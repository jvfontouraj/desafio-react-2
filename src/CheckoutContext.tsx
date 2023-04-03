import { createContext, ReactNode } from 'react'

interface CheckoutContextType {}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  return <CheckoutContext.Provider>{children}</CheckoutContext.Provider>
}
