import { NavBar } from './NavBar.style'
import logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function NavBarComponent() {
  return (
    <NavBar>
      <nav>
        <img src={logo} alt="" />
        <div className="actions">
          <div className="location">
            <MapPin weight="fill" size={22} className="mapPin" />
            <span>Porto Alegre, RS</span>
          </div>
          <ShoppingCart weight="fill" size={22} className="shoppingCart" />
        </div>
      </nav>
    </NavBar>
  )
}
