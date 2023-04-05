import { createContext, ReactNode, useState } from 'react'

interface FormDataTypes {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

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
  storeFormData: (data: any) => void
  formData: FormDataTypes
}

export const CheckoutContext = createContext({
  coffeesCheckout: null,
  handleDecreaseButton: () => {},
  handleIncreaseButton: () => {},
  removeCoffees: () => {},
  handlePaymentSelected: () => {},
  paymentSelected: '',
  storeFormData: () => {},
  formData: {
    cep: 0,
    rua: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  },
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

  const [formData, setFormData] = useState([] as FormDataTypes[])

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

  function storeFormData(data: FormDataTypes) {
    const getDataFromForm: FormDataTypes = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
    }

    setFormData((state) => [...state, getDataFromForm])
    console.log(formData)
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
        storeFormData,
        formData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
