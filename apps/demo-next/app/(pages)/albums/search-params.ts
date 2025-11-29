import { useQueryStates } from 'nuqs'
import {
  createLoader,
  type Options,
  parseAsInteger,
  parseAsString,
  type UrlKeys,
} from 'nuqs/server'
import { createTypedLink } from '@/lib/typed-links'

const searchParams = {
  query: parseAsString.withDefault(''),
  releaseYear: parseAsInteger,
}
const urlKeys: UrlKeys<typeof searchParams> = {
  query: 'q',
  releaseYear: 'year',
}

export const loadFilters = createLoader(searchParams, {
  urlKeys,
})

export const getAlbumsLink = createTypedLink(
  '/albums',
  searchParams,
  { urlKeys }
)

export const useFilters = (options: Options = {}) =>
  useQueryStates(searchParams, {
    shallow: false,
    urlKeys,
    ...options,
  })
