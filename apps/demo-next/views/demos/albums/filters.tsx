'use client'

import { debounce } from 'nuqs'
import { useTransition } from 'react'
import { useFilters } from '@/app/(pages)/albums/search-params'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { SearchInput } from '@/components/search-input'
import { FiltersSection } from './filters-section'

export function Filters() {
  const [isPending, startTransition] = useTransition()
  const [{ query, releaseYear }, setSearchParams] =
    useFilters({
      startTransition,
    })
  const onClear = () => {
    setSearchParams(null)
  }
  return (
    <FiltersSection>
      <SearchInput
        value={query}
        onChange={(e) => {
          startTransition(async () => {
            await setSearchParams(
              { query: e.target.value },
              {
                limitUrlUpdates: e.target.value
                  ? debounce(250)
                  : undefined,
              }
            )
          })
        }}
        placeholder="Search albums"
        isLoading={isPending}
        className="flex-2 text-xl lg:flex-1"
      />
      <Input
        type="number"
        className="flex-1 py-5 text-xl"
        value={releaseYear ?? ''}
        onChange={(e) =>
          setSearchParams(
            {
              releaseYear: Number.isNaN(
                e.target.valueAsNumber
              )
                ? null
                : e.target.valueAsNumber,
            },
            {
              limitUrlUpdates: e.target.value
                ? debounce(250)
                : undefined,
            }
          )
        }
        placeholder="Year"
      />
      <Button
        className="flex-1 py-5 text-lg"
        onClick={onClear}
      >
        Clear
      </Button>
    </FiltersSection>
  )
}
