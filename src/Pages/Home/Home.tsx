import { CoffeeCard } from './CoffeeCard/CoffeeCard'
import { Hero } from './Hero/Hero'
import { HomeContainer } from './Home.style'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <div className="CoffeeList">
        <h2>Nossos cafés</h2>
        <div className="coffees">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </HomeContainer>
  )
}
