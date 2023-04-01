import { NavBar } from './NavBar.style'
import logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function NavBarComponent() {
  return (
    <NavBar>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>
        <div className="actions">
          <div className="location">
            <MapPin weight="fill" size={22} className="mapPin" />
            <span>Porto Alegre, RS</span>
          </div>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart weight="fill" size={22} className="shoppingCart" />
          </NavLink>
        </div>
      </nav>
    </NavBar>
  )
}
