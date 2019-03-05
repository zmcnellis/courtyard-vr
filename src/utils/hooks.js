import { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts'

export const useTheme = name => {
  const theme = useContext(ThemeContext)

  return theme[name]
}

export const useEffectOnce = fn => useEffect(fn, [])
