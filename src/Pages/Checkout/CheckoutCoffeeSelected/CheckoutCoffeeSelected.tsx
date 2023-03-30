import { Minus, Plus, Trash } from 'phosphor-react'
import expressoTradicional from '../../../assets/Coffee/Type=Expresso.png'
import {
  BottomRowContainer,
  CheckoutCoffeeSelectedContainer,
  ContentContainer,
  CounterContainer,
  TopRowContainer,
} from './CheckoutCoffeeSelected.style'

export function CheckoutCoffeeSelected() {
  return (
    <CheckoutCoffeeSelectedContainer>
      <img src={expressoTradicional} alt="" />
      <ContentContainer>
        <TopRowContainer>
          <h3>Expresso Tradicional</h3>
          <h3>R$ 9,90</h3>
        </TopRowContainer>

        <BottomRowContainer>
          <CounterContainer>
            <button>
              <Minus size={14} className="counterIcon" />
            </button>
            <div className="counterNumberContainer">
              <span className="counterNumber">1</span>
            </div>
            <button>
              <Plus size={14} className="counterIcon" />
            </button>
          </CounterContainer>

          <button>
            <Trash />
            <span>Remover</span>
          </button>
        </BottomRowContainer>
      </ContentContainer>
    </CheckoutCoffeeSelectedContainer>
  )
}
