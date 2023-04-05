import { NavBarComponent } from '../../NavBarComponent/NavBar'
import { Hero } from './Hero/Hero'
import { HomeContainer } from './Home.style'
import { CoffeeCard } from './CoffeeCard/CoffeeCard'
import { CheckoutContext } from '../../Contexts/CheckoutContext'
import { useContext } from 'react'

export function Home() {
  const { coffeesCheckout } = useContext(CheckoutContext)

  return (
    <div>
      <NavBarComponent />

      <HomeContainer>
        <Hero />
        <div className="CoffeeList">
          <h2>Nossos cafés</h2>
          <div className="coffees">
            {coffeesCheckout.map((coffee) => (
              <CoffeeCard coffee={coffee} key={coffee.id} />
            ))}
          </div>
        </div>
      </HomeContainer>
    </div>
  )
}
