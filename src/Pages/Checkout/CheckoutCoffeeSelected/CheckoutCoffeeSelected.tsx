import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import expressoTradicional from '../../../assets/Coffee/Expresso.png'
import { CheckoutContext } from '../../../Contexts/CheckoutContext'
import {
  BottomRowContainer,
  CheckoutCoffeeSelectedContainer,
  ContentContainer,
  CounterContainer,
  TopRowContainer,
  TrashButton,
} from './CheckoutCoffeeSelected.style'

export function CheckoutCoffeeSelected() {
  const {
    coffeesCheckout,
    handleDecreaseButton,
    handleIncreaseButton,
    removeCoffees,
  } = useContext(CheckoutContext)

  return (
    <div>
      {coffeesCheckout.map((coffee, index) => (
        <CheckoutCoffeeSelectedContainer key={index}>
          <img src={expressoTradicional} alt="" />
          <ContentContainer>
            <TopRowContainer>
              <h3>{coffee.coffeeName}</h3>
              <span>R$ 9,90</span>
            </TopRowContainer>

            <BottomRowContainer>
              <div>
                <CounterContainer>
                  <button
                    disabled={!coffee.numberOfCoffees}
                    onClick={handleDecreaseButton}
                  >
                    <Minus size={14} className="counterIcon" />
                  </button>
                  <div className="counterNumberContainer">
                    <span className="counterNumber">
                      {coffee.numberOfCoffees}
                    </span>
                  </div>
                  <button onClick={handleIncreaseButton}>
                    <Plus size={14} className="counterIcon" />
                  </button>
                </CounterContainer>

                <TrashButton onClick={removeCoffees}>
                  <Trash size={16} className="trashIcon" />
                  <span>Remover</span>
                </TrashButton>
              </div>
            </BottomRowContainer>
          </ContentContainer>
        </CheckoutCoffeeSelectedContainer>
      ))}
    </div>
  )
}
