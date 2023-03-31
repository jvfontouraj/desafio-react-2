import {
  DeliveryInfoContainer,
  InfosContainer,
  SuccessContainer,
} from './Success.style'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImage from '../../assets/Success-image.png'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </div>
      <div className="alignCenterContainer">
        <DeliveryInfoContainer>
          <InfosContainer>
            <MapPin weight="fill" size={16} className="mapIcon" />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </InfosContainer>

          <InfosContainer>
            <Timer weight="fill" size={16} className="timerIcon" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </InfosContainer>

          <InfosContainer>
            <CurrencyDollar weight="fill" size={16} className="dollarIcon" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </InfosContainer>
        </DeliveryInfoContainer>

        <img src={successImage} alt="" />
      </div>
    </SuccessContainer>
  )
}
