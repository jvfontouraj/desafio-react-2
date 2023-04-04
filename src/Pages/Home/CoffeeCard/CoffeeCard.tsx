import { CoffeeCardContainer, ShoppingCartButton } from './CoffeeCard.style'
import ExpressoTradicional from '../../../assets/Coffee/Expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../../Contexts/CheckoutContext'
import { Link } from 'react-router-dom'

export function CoffeeCard() {
  const { coffeesCheckout, handleDecreaseButton, handleIncreaseButton } =
    useContext(CheckoutContext)

  return (
    <div>
      {coffeesCheckout.map((coffee: any, index: any) => (
        <CoffeeCardContainer key={index}>
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
                disabled={!coffee.numberOfCoffees}
                onClick={() => handleDecreaseButton(index)}
              >
                <Minus size={14} className="counterIcon" />
              </button>
              <div className="counterNumberContainer">
                <span className="counterNumber">{coffee.numberOfCoffees}</span>
              </div>
              <button onClick={() => handleIncreaseButton(index)}>
                <Plus size={14} className="counterIcon" />
              </button>
            </div>
            <ShoppingCartButton>
              <Link to="/checkout">
                <ShoppingCart
                  weight="fill"
                  size={22}
                  className="shoppingIcon"
                />
              </Link>
            </ShoppingCartButton>
          </div>
        </CoffeeCardContainer>
      ))}
    </div>
  )
}
