import { createContext, ReactNode, useState } from 'react'

interface CheckoutContextType {
  coffeesCheckout: {}
  handleDecreaseButton: () => void
  handleIncreaseButton: () => void
  removeCoffees: () => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

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

  function handleDecreaseButton() {
    const updateNumberOfCoffees = coffeesCheckout.map((coffees) => {
      return {
        ...coffees,
        numberOfCoffees: coffees.numberOfCoffees - 1,
      }
    })
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  function handleIncreaseButton() {
    const updateNumberOfCoffees = coffeesCheckout.map((coffees) => {
      return {
        ...coffees,
        numberOfCoffees: coffees.numberOfCoffees + 1,
      }
    })
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  function removeCoffees() {
    const updateNumberOfCoffees = coffeesCheckout.map((coffees) => {
      return {
        ...coffees,
        numberOfCoffees: 0,
      }
    })
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
