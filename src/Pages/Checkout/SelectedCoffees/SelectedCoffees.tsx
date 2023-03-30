import { CheckoutCoffeeSelected } from '../CheckoutCoffeeSelected/CheckoutCoffeeSelected'
import {
  ConfirmButton,
  ContentContainer,
  SelectedCoffeeContainer,
  SubTotalContainer,
  TotalContainer,
} from './SelectedCoffees.style'

export function SelectedCoffees() {
  return (
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
          <div>
            <span className="totalText">Total</span>
            <span className="totalFee">R$33,20</span>
          </div>
        </TotalContainer>

        <ConfirmButton>Confirmar Pedido</ConfirmButton>
      </ContentContainer>
    </SelectedCoffeeContainer>
  )
}
