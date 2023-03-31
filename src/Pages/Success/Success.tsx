import { SuccessContainer } from './Success.style'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
        <div>
          <div>
            <MapPin />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <Timer />
            <span>Previsão de entrega</span>
            <span>
              <strong>20 min - 30 min</strong>
            </span>
          </div>
          <div>
            <CurrencyDollar />
            <span>Pagamento na entrega</span>
            <span>
              <strong>Cartão de Crédito</strong>
            </span>
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </SuccessContainer>
  )
}
