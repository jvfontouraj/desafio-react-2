import { createContext, ReactNode } from 'react'

export interface CoffeeCardContextType {
  coffeeImg: URL
  tag: string
  coffeeName: string
  description: string
  price: number
}

export const CoffeeCardContext = createContext({} as CoffeeCardContextType)

interface CoffeeCardContextProviderProps {
  children: ReactNode
}

export function CoffeeCardContextProvider({
  children,
}: CoffeeCardContextProviderProps) {
  const tag = ''

  return (
    <CoffeeCardContext.Provider
      value={{
        coffeeImg,
        tag,
        coffeeName,
        description,
        price,
      }}
    >
      {children}
    </CoffeeCardContext.Provider>
  )
}
