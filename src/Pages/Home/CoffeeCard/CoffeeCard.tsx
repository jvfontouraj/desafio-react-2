import { CoffeeCardContainer, ShoppingCartButton } from './CoffeeCard.style'
import ExpressoTradicional from '../../../assets/Coffee/Type=Expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import {
  CheckoutContext,
  CheckoutContextProvider,
} from '../../../Contexts/CheckoutContext'

interface CoffeeCardProps {
  coffeeImg: string
  tag: string
  coffeeName: string
  description: string
  price: string
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { coffeesCheckout, handleDecreaseButton, handleIncreaseButton } =
    useContext(CheckoutContext)

  return (
    <div>
      {coffeesCheckout.map((coffee, index) => (
        <CoffeeCardContainer key={index}>
          <img src={coffee.coffeeImg} alt="" />
          <span className="tag">{coffee.tag}</span>
          <h3 className="coffeeName">{coffee.coffeeName}</h3>
          <span className="description">{coffee.description} </span>
          <div className="buy">
            <div className="priceContainer">
              <span className="pricePrefix">R$</span>
              <span className="price">{coffee.price}</span>
            </div>
            <div className="counterContainer">
              <button
                disabled={!coffee.numberOfCoffees}
                onClick={handleDecreaseButton}
              >
                <Minus size={14} className="counterIcon" />
              </button>
              <div className="counterNumberContainer">
                <span className="counterNumber">{coffee.numberOfCoffees}</span>
              </div>
              <button onClick={handleIncreaseButton}>
                <Plus size={14} className="counterIcon" />
              </button>
            </div>
            <ShoppingCartButton>
              <ShoppingCart weight="fill" size={22} className="shoppingIcon" />
            </ShoppingCartButton>
          </div>
        </CoffeeCardContainer>
      ))}
    </div>
  )
}
