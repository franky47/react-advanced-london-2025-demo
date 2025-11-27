import Link from 'next/link'

export function Favourites() {
  return (
    <nav>
      <ul className="list-disc pl-8 text-lg">
        <li>
          <Link
            className="hover:underline"
            href="/albums?query=love&releaseYear=1967"
          >
            Search for "love" released in 1967
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href="/albums?query=metal"
          >
            Search for "metal"
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href="/albums?releaseYear=1987"
          >
            Albums released in 1987
          </Link>
        </li>
      </ul>
    </nav>
  )
}
