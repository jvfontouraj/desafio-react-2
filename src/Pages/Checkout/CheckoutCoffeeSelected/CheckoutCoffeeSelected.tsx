import { Minus, Plus, Trash } from 'phosphor-react'
import expressoTradicional from '../../../assets/Coffee/Type=Expresso.png'
import {
  BottomRowContainer,
  CheckoutCoffeeSelectedContainer,
  ContentContainer,
  CounterContainer,
  TopRowContainer,
  TrashButton,
} from './CheckoutCoffeeSelected.style'

export function CheckoutCoffeeSelected() {
  return (
    <CheckoutCoffeeSelectedContainer>
      <img src={expressoTradicional} alt="" />
      <ContentContainer>
        <TopRowContainer>
          <h3>Expresso Tradicional</h3>
          <span>R$ 9,90</span>
        </TopRowContainer>

        <BottomRowContainer>
          <div>
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

            <TrashButton>
              <Trash size={16} className="trashIcon" />
              <span>Remover</span>
            </TrashButton>
          </div>
        </BottomRowContainer>
      </ContentContainer>
    </CheckoutCoffeeSelectedContainer>
  )
}
