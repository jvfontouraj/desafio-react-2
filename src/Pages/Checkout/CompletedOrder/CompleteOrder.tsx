import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AdressContainer,
  AdressFormContainer,
  ComplementContainer,
  CompleteOrderContainer,
  PaymentContainer,
  PaymentMethodsContent,
} from './CompleteOrder.style'

export function CompletedOrder() {
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
          <input type="number" placeholder="CEP" className="cep" />
          <input type="text" placeholder="Rua" className="rua" />
          <div>
            <input type="number" placeholder="Número" className="numero" />
            <ComplementContainer>
              <input
                type="text"
                placeholder="Completemento"
                className="complemento"
              />
            </ComplementContainer>
          </div>
          <div>
            <input type="text" placeholder="Bairro" className="bairro" />
            <input type="text" placeholder="Cidade" className="cidade" />
            <input type="text" placeholder="UF" className="uf" />
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
          <button>
            <CreditCard size={16} className="purpleIcons" />
            <span>Cartão de Crédito</span>
          </button>
          <button>
            <Bank size={16} className="purpleIcons" />
            <span>Cartão de Débito</span>
          </button>
          <button>
            <Money size={16} className="purpleIcons" />
            <span>Dinheiro</span>
          </button>
        </PaymentMethodsContent>
      </PaymentContainer>
    </CompleteOrderContainer>
  )
}
