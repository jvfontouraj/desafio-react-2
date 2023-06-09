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
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CheckoutContext } from '../../Contexts/CheckoutContext'
import {
  PaymentContainer,
  PaymentMethodsContent,
} from './CompletedOrder/CompleteOrder.style'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

// const checkoutFormValidationSchema = zod.object({
//   cep: zod.number().min(1, 'Informe o CEP').max(8),
//   rua: zod.string().min(1, 'Informe a Rua'),
//   numero: zod.number().min(1, 'Informe o Número'),
//   complemento: zod.string().optional(),
//   bairro: zod.string().min(1, 'Informe o Bairro'),
//   cidade: zod.string().min(1, 'Informe a Cidade'),
//   uf: zod.string().min(1, 'Informe a UF').max(2),
// })

// type CheckoutForm = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { storeFormData, handlePaymentSelected, paymentSelected } =
    useContext(CheckoutContext)

  const checkoutCoffeeForm = useForm({
    // resolver: zodResolver(checkoutFormValidationSchema),
    // defaultValues: {
    //   cep: 0,
    //   rua: '',
    //   numero: 0,
    //   complemento: '',
    //   bairro: '',
    //   cidade: '',
    //   uf: '',
    // },
  })

  const { handleSubmit, watch } = checkoutCoffeeForm

  function handleCheckout(data: any) {
    storeFormData(data)
  }

  const formFilled = watch('rua')

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
                  <span className="subtotalFee">R$29,70</span>
                </div>

                <div>
                  <h4 className="deliveryText">Entrega</h4>
                  <span className="deliverylFee">R$3,50</span>
                </div>
              </SubTotalContainer>

              <TotalContainer>
                <span className="totalText">Total</span>
                <span className="totalFee">R$33,20</span>
              </TotalContainer>

              <Link to="/success" title="Success">
                <ConfirmButton
                  // onClick={handleSubmit}
                  type="submit"
                  disabled={!formFilled}
                >
                  Confirmar Pedido
                </ConfirmButton>
              </Link>
            </ContentContainer>
          </SelectedCoffeeContainer>
        </CheckoutContainer>
      </form>
    </div>
  )
}
