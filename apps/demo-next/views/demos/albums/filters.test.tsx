import {
  type OnUrlUpdateFunction,
  withNuqsTestingAdapter,
} from 'nuqs/adapters/testing'
import { expect, it, type Mock, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Filters } from './filters'

it('renders filters with initial URL state', async () => {
  const { getByPlaceholder } = await render(<Filters />, {
    wrapper: withNuqsTestingAdapter({
      searchParams: '?q=rock&year=1990',
    }),
  })
  const search = getByPlaceholder('Search albums')
  const year = getByPlaceholder('Year')
  await expect.element(search).toHaveValue('rock')
  await expect.element(year).toHaveValue(1990)
})

it('updates the URL when filling filters', async () => {
  const onUrlUpdate = vi.fn<OnUrlUpdateFunction>()
  const { getByPlaceholder, getByRole } = await render(
    <Filters />,
    {
      wrapper: withNuqsTestingAdapter({
        onUrlUpdate,
        hasMemory: true,
        resetUrlUpdateQueueOnMount: false,
        autoResetQueueOnUpdate: false,
      }),
    }
  )
  const search = getByPlaceholder('Search albums')
  const year = getByPlaceholder('Year')
  await search.fill('metal')
  await year.fill('1984')
  // Optimistic local state updates
  await expect.element(search).toHaveValue('metal')
  await expect.element(year).toHaveValue(1984)
  // Spinner is showing
  const spinner = getByRole('status', { name: 'Loading' })
  await expect.element(spinner).toBeVisible()
  // Wait for debounced URL updates
  await new Promise((r) => setTimeout(r, 300))
  expect(onUrlUpdate).toHaveBeenCalledTimes(2)
  expect(query(onUrlUpdate, 0)).toBe('?q=metal')
  expect(query(onUrlUpdate, 1)).toBe('?q=metal&year=1984')
  // Spinner is gone
  await expect.element(spinner).not.toBeInTheDocument()
})

function query(
  { mock }: Mock<OnUrlUpdateFunction>,
  index: number
) {
  const call = mock.calls[index]
  if (!call) {
    throw new Error(`No call at index ${index}`)
  }
  return call[0].queryString
}
