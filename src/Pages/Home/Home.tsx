import { NavBarComponent } from '../../NavBarComponent/NavBar'
import { Hero } from './Hero/Hero'
import { HomeContainer } from './Home.style'
import { CoffeeCard } from './CoffeeCard/CoffeeCard'

export function Home() {
  return (
    <div>
      <NavBarComponent />

      <HomeContainer>
        <Hero />
        <div className="CoffeeList">
          <h2>Nossos cafés</h2>
          <div className="coffees">
            <CoffeeCard />
          </div>
        </div>
      </HomeContainer>
    </div>
  )
}
