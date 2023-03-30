import { CheckoutContainer } from './Checkout.style'
import { CompletedOrder } from './CompletedOrder/CompleteOrder'
import { SelectedCoffees } from './SelectedCoffees/SelectedCoffees'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompletedOrder />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
