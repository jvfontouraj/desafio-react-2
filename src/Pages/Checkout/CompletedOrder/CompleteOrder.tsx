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
import { CheckoutFormValues } from '../Checkout'
import {
  AdressContainer,
  AdressFormContainer,
  ComplementContainer,
  CompleteOrderContainer,
  PaymentContainer,
  PaymentMethodsContent,
} from './CompleteOrder.style'

export function CompletedOrder() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormValues>()
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
          {errors.cep && <span>{errors.cep.message}</span>}
          <input
            type="text"
            id="rua"
            placeholder="Rua"
            className="rua"
            {...register('rua')}
          />
          {errors.rua && <span>{errors.rua.message}</span>}

          <div>
            <input
              // type="number"
              id="numero"
              placeholder="Número"
              className="numero"
              {...register('numero')}
            />
            {errors.numero && <span>{errors.numero.message}</span>}
            <ComplementContainer>
              <input
                type="text"
                id="complemento"
                placeholder="Completemento"
                className="complemento"
                {...register('complemento')}
              />
              {errors.complemento && <span>{errors.complemento.message}</span>}
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
            {errors.bairro && <span>{errors.bairro.message}</span>}

            <input
              type="text"
              id="cidade"
              placeholder="Cidade"
              className="cidade"
              {...register('cidade')}
            />
            {errors.cidade && <span>{errors.cidade.message}</span>}
            <input
              type="text"
              id="uf"
              placeholder="UF"
              className="uf"
              maxLength={2}
              {...register('uf')}
            />
            {errors.uf && <span>{errors.uf.message}</span>}
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
            onClick={() => handlePaymentSelected('CreditCard')}
            className={
              paymentSelected === 'CreditCard' ? 'selected' : 'default'
            }
            type="button"
          >
            <CreditCard size={16} className="purpleIcons" />
            <span>Cartão de Crédito</span>
          </button>
          <button
            onClick={() => handlePaymentSelected('DebitCard')}
            className={paymentSelected === 'DebitCard' ? 'selected' : 'default'}
            type="button"
          >
            <Bank size={16} className="purpleIcons" />
            <span>Cartão de Débito</span>
          </button>
          <button
            onClick={() => handlePaymentSelected('Money')}
            className={paymentSelected === 'Money' ? 'selected' : 'default'}
            type="button"
          >
            <Money size={16} className="purpleIcons" />
            <span>Dinheiro</span>
          </button>
        </PaymentMethodsContent>
      </PaymentContainer>
    </CompleteOrderContainer>
  )
}
