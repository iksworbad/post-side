/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect, useRef } from 'react'

export function useAsync(execute, deps) {
  const [value, setValue] = useState(undefined)
  const [error, setError] = useState(undefined)
  const promise = useRef(undefined)

  useLayoutEffect(() => {
    value !== undefined && setValue(undefined)
    error !== undefined && setError(undefined)

    const p = execute()
    promise.current = p

    p.then(
      result => promise.current === p && setValue(result),
      err => promise.current === p && setError(err),
    )

    return () => {
      promise.current = undefined
    }
  }, deps)

  return [value, error]
}
