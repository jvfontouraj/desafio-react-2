import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import homeImage from '../../../assets/Home-image.png'
import { HeroContainer } from './Hero.style'

export function Hero() {
  return (
    <HeroContainer>
      <div className="heroContent">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <div className="itemsDiv">
          <div className="itemsColumnOne">
            <div className="itemContent">
              <ShoppingCart weight="fill" size={16} className="shoppingIcon" />
              <span>Compra simples e segura</span>
            </div>
            <div className="itemContent">
              <Timer weight="fill" size={16} className="timerIcon" />
              <span>Entrega rápida e rastreada</span>
            </div>
          </div>
          <div className="itemsColumnTwo">
            <div className="itemContent">
              <Package weight="fill" size={16} className="packageIcon" />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className="itemContent">
              <Coffee weight="fill" size={16} className="coffeeIcon" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <img src={homeImage} alt="" />
    </HeroContainer>
  )
}
