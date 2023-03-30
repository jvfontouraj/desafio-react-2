import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { CompleteOrderContainer } from './CompleteOrder.style'

export function CompletedOrder() {
  return (
    <CompleteOrderContainer>
      <h2>Complete seu pedido</h2>
      <div>
        {/* Endereço */}
        <header>
          <MapPin weight="fill" size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
        </header>
        <form action="">
          <input type="number" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div>
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Completemento(Opcional)" />
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </form>
      </div>

      <div>
        {/* Pagamento */}
        <header>
          <CurrencyDollar weight="fill" size={22} />
          <div>
            <h3>Pagamento</h3>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </div>
        </header>
        <div>
          <button>
            <CreditCard />
            <span>Cartão de Crédito</span>
          </button>
          <button>
            <Bank />
            <span>Cartão de Débito</span>
          </button>
          <button>
            <Money />
            <span>Dinheiro</span>
          </button>
        </div>
      </div>
    </CompleteOrderContainer>
  )
}
