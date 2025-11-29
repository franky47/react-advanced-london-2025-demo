/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: making it easier to demo */
import { database } from '@root/db/queries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { Album } from '@/views/demos/albums/album'
import { AlbumGrid } from '@/views/demos/albums/album-grid'
import { Favourites } from '@/views/demos/albums/favourites'
import { Filters } from '@/views/demos/albums/filters'
import { loadFilters } from './search-params'

export default async function AlbumsPage({
  searchParams,
}: PageProps<'/albums'>) {
  const filters = await loadFilters(searchParams)
  const albums = await database.findAlbums(filters)
  return (
    <>
      <Suspense>
        <Filters />
      </Suspense>
      <Favourites />
      <AlbumGrid>
        {albums.map((album) => (
          <Link
            key={album.id}
            href={{ pathname: `/albums/${album.id}` }}
          >
            <Album data={album} />
          </Link>
        ))}
      </AlbumGrid>
    </>
  )
}

export const metadata = {
  title: 'Albums',
} satisfies Metadata
