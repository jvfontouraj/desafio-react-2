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
  handleDecreaseButton: (index: any) => void
  handleIncreaseButton: (index: any) => void
  removeCoffees: (index: any) => void
  handlePaymentSelected: (payment: string) => void
  paymentSelected: string
}

export const CheckoutContext = createContext({
  coffeesCheckout: null,
  handleDecreaseButton: () => {},
  handleIncreaseButton: () => {},
  removeCoffees: () => {},
  handlePaymentSelected: () => {},
  paymentSelected: '',
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

  const [paymentSelected, setPaymentSelected] = useState('')

  function handlePaymentSelected(payment: string) {
    setPaymentSelected(payment)
  }

  function handleDecreaseButton(index: any) {
    const updateNumberOfCoffees = [...coffeesCheckout]
    updateNumberOfCoffees[index] = {
      ...updateNumberOfCoffees[index],
      numberOfCoffees: updateNumberOfCoffees[index].numberOfCoffees - 1,
    }
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  function handleIncreaseButton(index: any) {
    const updateNumberOfCoffees = [...coffeesCheckout]
    updateNumberOfCoffees[index] = {
      ...updateNumberOfCoffees[index],
      numberOfCoffees: updateNumberOfCoffees[index].numberOfCoffees + 1,
    }
    setCoffeesCheckout(updateNumberOfCoffees)
  }

  function removeCoffees(index: any) {
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
        handlePaymentSelected,
        paymentSelected,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
