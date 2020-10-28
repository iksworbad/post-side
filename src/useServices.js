import { useContext, createContext } from 'react'

export const ServiceContext = createContext({})

export function useServices () {
  return useContext(ServiceContext)
}