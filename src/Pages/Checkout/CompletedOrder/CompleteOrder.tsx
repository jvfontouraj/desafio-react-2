import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckoutContext } from '../../../Contexts/CheckoutContext'
import {
  AdressContainer,
  AdressFormContainer,
  ComplementContainer,
  CompleteOrderContainer,
  PaymentContainer,
  PaymentMethodsContent,
} from './CompleteOrder.style'

export function CompletedOrder() {
  const { register } = useFormContext()
  const { handlePaymentSelected, paymentSelected } = useContext(CheckoutContext)

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
        <AdressFormContainer>
          <input
            type="tel"
            id="cep"
            placeholder="CEP"
            className="cep"
            maxLength={8}
            {...register('cep')}
          />
          <input
            type="text"
            id="rua"
            placeholder="Rua"
            className="rua"
            {...register('rua')}
          />
          <div>
            <input
              type="number"
              id="numero"
              placeholder="Número"
              className="numero"
              {...register('numero')}
            />
            <ComplementContainer>
              <input
                type="text"
                id="complemento"
                placeholder="Completemento"
                className="complemento"
                {...register('complemento')}
              />
            </ComplementContainer>
          </div>
          <div>
            <input
              type="text"
              id="bairro"
              placeholder="Bairro"
              className="bairro"
              {...register('bairro')}
            />
            <input
              type="text"
              id="cidade"
              placeholder="Cidade"
              className="cidade"
              {...register('cidade')}
            />
            <input
              type="text"
              id="uf"
              placeholder="UF"
              className="uf"
              maxLength={2}
              {...register('uf')}
            />
          </div>
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
            // type="button"
            onClick={() => handlePaymentSelected('CreditCard')}
            className={
              paymentSelected === 'CreditCard' ? 'selected' : 'default'
            }
          >
            <CreditCard size={16} className="purpleIcons" />
            <span>Cartão de Crédito</span>
          </button>
          <button
            // type="button"
            onClick={() => handlePaymentSelected('DebitCard')}
            className={paymentSelected === 'DebitCard' ? 'selected' : 'default'}
          >
            <Bank size={16} className="purpleIcons" />
            <span>Cartão de Débito</span>
          </button>
          <button
            // type="button"
            onClick={() => handlePaymentSelected('Money')}
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
