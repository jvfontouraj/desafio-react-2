import { NavBarComponent } from '../../NavBarComponent/NavBar'
import { CompletedOrder } from './CompletedOrder/CompleteOrder'
import { CheckoutContainer } from './Checkout.style'
import {
  ConfirmButton,
  ContentContainer,
  SelectedCoffeeContainer,
  SubTotalContainer,
  TotalContainer,
} from './SelectedCoffees.style'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CheckoutCoffeeSelected } from './CheckoutCoffeeSelected/CheckoutCoffeeSelected'
import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../../Contexts/CheckoutContext'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP').max(8),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Expected number, received a string',
  }),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF').max(2),
})

export type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { storeFormData, coffeesCheckout } = useContext(CheckoutContext)

  const checkoutCoffeeForm = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = checkoutCoffeeForm

  function handleCheckout(data: CheckoutFormValues) {
    storeFormData(data)
    navigate('/success')
  }

  console.log(coffeesCheckout)

  const { total, subtotal, entrega } = useMemo(
    () =>
      coffeesCheckout.reduce(
        (acc, curr) => ({
          ...acc,
          total: acc.total + curr.price * curr.qtd,
          subtotal: acc.subtotal + curr.price * curr.qtd,
        }),
        {
          total: 3.5,
          subtotal: 0,
          entrega: 3.5,
        },
      ),
    [coffeesCheckout],
  )

  return (
    <div>
      <NavBarComponent />
      <form onSubmit={handleSubmit(handleCheckout)}>
        <CheckoutContainer>
          <FormProvider {...checkoutCoffeeForm}>
            <CompletedOrder />
          </FormProvider>
          <SelectedCoffeeContainer>
            <h2>Cafés selecionados</h2>
            <ContentContainer>
              <CheckoutCoffeeSelected />
              <SubTotalContainer>
                <div>
                  <h4 className="subtotalText">Total de itens</h4>
                  <span className="subtotalFee">R${subtotal}</span>
                </div>

                <div>
                  <h4 className="deliveryText">Entrega</h4>
                  <span className="deliverylFee">R${entrega}</span>
                </div>
              </SubTotalContainer>

              <TotalContainer>
                <span className="totalText">Total</span>
                <span className="totalFee">R${total}</span>
              </TotalContainer>

              <ConfirmButton type="submit" disabled={isSubmitting}>
                Confirmar Pedido
              </ConfirmButton>
            </ContentContainer>
          </SelectedCoffeeContainer>
        </CheckoutContainer>
      </form>
    </div>
  )
}
