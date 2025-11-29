'use client'

import { parseAsInteger, useQueryState } from 'nuqs'
import { Button } from '@/components/button'

export function CounterButton() {
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0)
  )
  return (
    <Button
      className="rounded-xl p-8 text-2xl tabular-nums"
      onClick={() => setCount((c) => c + 1)}
    >
      Count: {count}
    </Button>
  )
}
