import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { createContext, useState } from 'react'
import {
  AdressContainer,
  AdressFormContainer,
  ComplementContainer,
  CompleteOrderContainer,
  PaymentContainer,
  PaymentMethodsContent,
} from './CompleteOrder.style'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const checkoutFormValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe o CEP').max(8),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.number().min(1, 'Informe o Número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF').max(2),
})

type CheckoutForm = zod.infer<typeof checkoutFormValidationSchema>

export function CompletedOrder() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const [paymentSelected, setPaymentSelected] = useState('')

  function handleCheckout(data: CheckoutForm) {
    console.log(data)
  }

  const formFilled = watch('rua')

  return (
    <CompleteOrderContainer>
      <h2>Complete seu pedido</h2>
      <AdressContainer>
        <header>
          <MapPinLine size={22} className="mapIcon" />
          <div>
            <h3>Endereço de Entrega</h3>
            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
        </header>
        <AdressFormContainer onSubmit={handleSubmit(handleCheckout)}>
          <input
            type="tel"
            placeholder="CEP"
            className="cep"
            maxLength={8}
            {...register('cep')}
          />
          <input
            type="text"
            placeholder="Rua"
            className="rua"
            {...register('rua')}
          />
          <div>
            <input
              type="number"
              placeholder="Número"
              className="numero"
              {...register('numero')}
            />
            <ComplementContainer>
              <input
                type="text"
                placeholder="Completemento"
                className="complemento"
                {...register('complemento')}
              />
            </ComplementContainer>
          </div>
          <div>
            <input
              type="text"
              placeholder="Bairro"
              className="bairro"
              {...register('bairro')}
            />
            <input
              type="text"
              placeholder="Cidade"
              className="cidade"
              {...register('cidade')}
            />
            <input
              type="text"
              placeholder="UF"
              className="uf"
              maxLength={2}
              {...register('uf')}
            />
          </div>
          <button onClick={handleSubmit} disabled={!formFilled}>
            Enviar
          </button>
        </AdressFormContainer>
      </AdressContainer>

      <PaymentContainer>
        <header>
          <CurrencyDollar size={22} className="purpleIcons" />
          <div>
            <h3>Pagamento</h3>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </div>
        </header>
        <PaymentMethodsContent>
          <button
            onClick={() => setPaymentSelected('CreditCard')}
            className={
              paymentSelected === 'CreditCard' ? 'selected' : 'default'
            }
          >
            <CreditCard size={16} className="purpleIcons" />
            <span>Cartão de Crédito</span>
          </button>
          <button
            onClick={() => setPaymentSelected('DebitCard')}
            className={paymentSelected === 'DebitCard' ? 'selected' : 'default'}
          >
            <Bank size={16} className="purpleIcons" />
            <span>Cartão de Débito</span>
          </button>
          <button
            onClick={() => setPaymentSelected('Money')}
            className={paymentSelected === 'Money' ? 'selected' : 'default'}
          >
            <Money size={16} className="purpleIcons" />
            <span>Dinheiro</span>
          </button>
        </PaymentMethodsContent>
      </PaymentContainer>
    </CompleteOrderContainer>
  )
}
