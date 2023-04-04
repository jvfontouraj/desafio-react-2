import { createContext, ReactNode, useState } from 'react'

interface Coffees {
  id: number
  coffeeImg: URL
  tag: string
  coffeeName: string
  description: string
  numberOfCoffees: number
}

interface CheckoutContextType {
  coffeesCheckout: Coffees | null
  handleDecreaseButton: () => void
  handleIncreaseButton: () => void
  removeCoffees: () => void
}

export const CheckoutContext = createContext({
  coffeesCheckout: null,
  handleDecreaseButton: () => {},
  handleIncreaseButton: () => {},
  removeCoffees: () => {},
} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const coffeesData = [
    {
      id: 0,
      coffeeImg: '../../assets/Coffee/Expresso.png',
      tag: 'tradicional',
      coffeeName: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      numberOfCoffees: 0,
    },
    {
      id: 1,
      coffeeImg: '../../assets/Coffee/Americano.png',
      tag: 'tradicional',
      coffeeName: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      numberOfCoffees: 0,
    },
  ]

  const [coffeesCheckout, setCoffeesCheckout] = useState(coffeesData)

  function handleDecreaseButton(index) {
    const updateNumberOfCoffees = [...coffeesCheckout]
    updateNumberOfCoffees[index] = {
      ...updateNumberOfCoffees[index],
      numberOfCoffees: updateNumberOfCoffees[index].numberOfCoffees - 1,
    }
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  function handleIncreaseButton(index) {
    const updateNumberOfCoffees = [...coffeesCheckout]
    updateNumberOfCoffees[index] = {
      ...updateNumberOfCoffees[index],
      numberOfCoffees: updateNumberOfCoffees[index].numberOfCoffees + 1,
    }
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  function removeCoffees(index) {
    const updateNumberOfCoffees = [...coffeesCheckout]
    updateNumberOfCoffees[index] = {
      ...updateNumberOfCoffees[index],
      numberOfCoffees: 0,
    }
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  return (
    <CheckoutContext.Provider
      value={{
        coffeesCheckout,
        handleDecreaseButton,
        handleIncreaseButton,
        removeCoffees,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
