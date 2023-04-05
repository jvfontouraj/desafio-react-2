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

export interface Coffee {
  id: number
  coffeeImg: string
  tag: string
  coffeeName: string
  description: string
  qtd: number
  price: number
}

interface CheckoutContextType {
  coffeesCheckout: Coffee[]
  handleDecreaseButton: (index: any) => void
  handleIncreaseButton: (index: any) => void
  removeCoffees: (index: any) => void
  handlePaymentSelected: (payment: string) => void
  paymentSelected: string
  storeFormData: (data: any) => void
  formData: FormDataTypes
}

export const CheckoutContext = createContext({
  coffeesCheckout: [],
  handleDecreaseButton: () => {},
  handleIncreaseButton: () => {},
  removeCoffees: () => {},
  handlePaymentSelected: () => {},
  paymentSelected: '',
  storeFormData: () => {},
  formData: {} as FormDataTypes,
} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const coffeesData: Coffee[] = [
    {
      id: 0,
      coffeeImg: '../../assets/Coffee/Expresso.png',
      tag: 'tradicional',
      coffeeName: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      qtd: 0,
      price: 9.99,
    },
    {
      id: 1,
      coffeeImg: '../../assets/Coffee/Americano.png',
      tag: 'tradicional',
      coffeeName: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      qtd: 0,
      price: 8.99,
    },
  ]

  const [coffeesCheckout, setCoffeesCheckout] = useState(coffeesData)

  const [paymentSelected, setPaymentSelected] = useState<string>('')

  const [formData, setFormData] = useState({} as FormDataTypes)

  function handlePaymentSelected(payment: string) {
    setPaymentSelected(payment)
  }

  function handleDecreaseButton(id: number) {
    const items = coffeesCheckout.map((item) =>
      item.id === id ? { ...item, qtd: item.qtd - 1 } : item,
    )

    setCoffeesCheckout(items)
  }

  function handleIncreaseButton(id: number) {
    const items = coffeesCheckout.map((item) =>
      item.id === id ? { ...item, qtd: item.qtd + 1 } : item,
    )

    setCoffeesCheckout(items)
  }

  function removeCoffees(id: number) {
    const items = coffeesCheckout.filter((item) => item.id !== id)

    setCoffeesCheckout(items)
  }

  function storeFormData(data: FormDataTypes) {
    const getDataFromForm: FormDataTypes = {
      ...data,
    }

    setFormData((state) => ({ ...state, ...getDataFromForm }))
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
