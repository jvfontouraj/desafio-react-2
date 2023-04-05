import { CoffeeCardContainer, ShoppingCartButton } from './CoffeeCard.style'
import ExpressoTradicional from '../../../assets/Coffee/Expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CheckoutContext, Coffee } from '../../../Contexts/CheckoutContext'
import { Link } from 'react-router-dom'

interface CoffeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeCardProps) {
  const { coffeesCheckout, handleDecreaseButton, handleIncreaseButton } =
    useContext(CheckoutContext)

  return (
    <CoffeeCardContainer>
      <img src={ExpressoTradicional} alt="" />
      <span className="tag">{coffee.tag}</span>
      <h3 className="coffeeName">{coffee.coffeeName}</h3>
      <span className="description">{coffee.description} </span>
      <div className="buy">
        <div className="priceContainer">
          <span className="pricePrefix">R$</span>
          <span className="price">9,90</span>
        </div>
        <div className="counterContainer">
          <button
            disabled={!coffee.qtd}
            onClick={() => handleDecreaseButton(coffee.id)}
          >
            <Minus size={14} className="counterIcon" />
          </button>
          <div className="counterNumberContainer">
            <span className="counterNumber">{coffee.qtd}</span>
          </div>
          <button onClick={() => handleIncreaseButton(coffee.id)}>
            <Plus size={14} className="counterIcon" />
          </button>
        </div>
        <ShoppingCartButton>
          <Link to="/checkout">
            <ShoppingCart weight="fill" size={22} className="shoppingIcon" />
          </Link>
        </ShoppingCartButton>
      </div>
    </CoffeeCardContainer>
  )
}
