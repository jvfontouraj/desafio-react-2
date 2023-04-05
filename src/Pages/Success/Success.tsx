import {
  DeliveryInfoContainer,
  InfosContainer,
  SuccessContainer,
} from './Success.style'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImage from '../../assets/Success-image.png'
import { NavBarComponent } from '../../NavBarComponent/NavBar'
import { useContext } from 'react'
import { CheckoutContext } from '../../Contexts/CheckoutContext'

export function Success() {
  const { formData, paymentSelected } = useContext(CheckoutContext)

  return (
    <div>
      <NavBarComponent />
      <SuccessContainer>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <h3>Agora é só aguardar que logo o café chegará até você</h3>
        </div>
        <div className="alignCenterContainer">
          {formData.map((data: any, index: any) => {
            return (
              <DeliveryInfoContainer key={index}>
                <InfosContainer>
                  <MapPin weight="fill" size={16} className="mapIcon" />
                  <div>
                    <span>
                      Entrega em
                      <strong>{`${data.rua}, ${data.numero}`}</strong>
                    </span>
                    <span>{`${data.bairro} - ${data.cidade}, ${data.uf}`}</span>
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
                  <CurrencyDollar
                    weight="fill"
                    size={16}
                    className="dollarIcon"
                  />
                  <div>
                    <span>Pagamento na entrega</span>
                    <span>
                      <strong>{paymentSelected}</strong>
                    </span>
                  </div>
                </InfosContainer>
              </DeliveryInfoContainer>
            )
          })}

          <img src={successImage} alt="" />
        </div>
      </SuccessContainer>
    </div>
  )
}
