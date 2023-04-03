import { NavBarComponent } from '../../NavBarComponent/NavBar'
import { CheckoutContainer } from './Checkout.style'
import { CompletedOrder } from './CompletedOrder/CompleteOrder'
import { SelectedCoffees } from './SelectedCoffees/SelectedCoffees'

export function Checkout() {
  return (
    <div>
      <NavBarComponent />
      <CheckoutContainer>
        <CompletedOrder />
        <SelectedCoffees />
      </CheckoutContainer>
    </div>
  )
}
