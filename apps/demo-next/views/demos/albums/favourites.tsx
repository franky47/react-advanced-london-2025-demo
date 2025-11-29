import Link from 'next/link'
import { getAlbumsLink } from '@/app/(pages)/albums/search-params'

export function Favourites() {
  return (
    <nav>
      <ul className="list-disc pl-8 text-lg">
        <li>
          <Link
            className="hover:underline"
            href={getAlbumsLink({
              query: 'love',
              releaseYear: 1967,
            })}
          >
            Search for "love" released in 1967
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href={getAlbumsLink({ query: 'metal' })}
          >
            Search for "metal"
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href={getAlbumsLink({ releaseYear: 1987 })}
          >
            Albums released in 1987
          </Link>
        </li>
      </ul>
    </nav>
  )
}
