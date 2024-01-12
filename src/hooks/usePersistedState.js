import { useEffect, useState } from 'react'

export function getLocalStorage (key, initial) {
  if (typeof window !== 'undefined') {
    const savedValue = JSON.parse(window.localStorage.getItem(key))
    if (savedValue) {
      return savedValue
    }
  }
  return initial
}

export function setLocalStorage (key, value) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export default function usePersistedState (key, initial = '') {
  const [value, setValue] = useState(getLocalStorage(key, initial))

  useEffect(() => {
    setLocalStorage(key, value)
  }, [key, value])

  return [value, setValue]
}
