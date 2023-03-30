import { CoffeeCardContainer } from './CoffeeCard.style'
import ExpressoTradicional from '../../../assets/Coffee/Type=Expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={ExpressoTradicional} alt="" />
      <span className="tag">tradicional</span>
      <h3 className="coffeeName">Expresso Tradicional</h3>
      <span className="description">
        O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="buy">
        <div className="priceContainer">
          <span className="pricePrefix">R$</span>
          <span className="price">9,90</span>
        </div>
        <div className="counterContainer">
          <button>
            <Minus size={14} className="counterIcon" />
          </button>
          <div className="counterNumberContainer">
            <span className="counterNumber">1</span>
          </div>
          <button>
            <Plus size={14} className="counterIcon" />
          </button>
        </div>
        <ShoppingCart weight="fill" size={22} className="shoppingIcon" />
      </div>
    </CoffeeCardContainer>
  )
}
