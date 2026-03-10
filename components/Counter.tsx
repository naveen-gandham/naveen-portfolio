"use client"

import { useEffect, useState } from "react"

type Props = {
  end: number
}

export default function Counter({ end }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const step = Math.ceil(end / (duration / 16))

    const timer = setInterval(() => {
      start += step

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return <span>{count}</span>
}