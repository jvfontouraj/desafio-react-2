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
    <>
      {coffeesCheckout.map((coffee) => {
        if (!coffee.qtd) {
          return null
        } else {
          return (
            <CheckoutCoffeeSelectedContainer key={coffee.id}>
              <div>
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
                          disabled={!coffee.qtd}
                          onClick={() => handleDecreaseButton(coffee.id)}
                          type="button"
                        >
                          <Minus size={14} className="counterIcon" />
                        </button>
                        <div className="counterNumberContainer">
                          <span className="counterNumber">{coffee.qtd}</span>
                        </div>
                        <button
                          onClick={() => handleIncreaseButton(coffee.id)}
                          type="button"
                        >
                          <Plus size={14} className="counterIcon" />
                        </button>
                      </CounterContainer>

                      <TrashButton onClick={() => removeCoffees(coffee.id)}>
                        <Trash size={16} className="trashIcon" />
                        <span>Remover</span>
                      </TrashButton>
                    </div>
                  </BottomRowContainer>
                </ContentContainer>
              </div>
            </CheckoutCoffeeSelectedContainer>
          )
        }
      })}
    </>
  )
}
