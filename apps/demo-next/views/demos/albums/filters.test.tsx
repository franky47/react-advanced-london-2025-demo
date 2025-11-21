import { expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Filters } from './filters'

it('renders filters', async () => {
  const { getByPlaceholder } = await render(<Filters />)
  const search = getByPlaceholder('Search albums')
  const year = getByPlaceholder('Year')
  await search.fill('metal')
  await year.fill('1984')
  await expect.element(search).toHaveValue('metal')
  await expect.element(year).toHaveValue(1984)
})
