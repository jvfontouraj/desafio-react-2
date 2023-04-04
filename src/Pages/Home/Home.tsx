import { NavBarComponent } from '../../NavBarComponent/NavBar'
import { Hero } from './Hero/Hero'
import { HomeContainer } from './Home.style'
import ExpressoTradicional from '../../assets/Coffee/Expresso.png'
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
            <CoffeeCard
              coffeeImg={ExpressoTradicional}
              tag="tradicional"
              coffeeName="Expresso Tradicional"
              description="O tradicional café feito com água quente e grãos moídos"
              price="9,90"
            />
            <CoffeeCard
              coffeeImg={ExpressoTradicional}
              tag="tradicional"
              coffeeName="Expresso Tradicional"
              description="O tradicional café feito com água quente e grãos moídos"
              price="9,90"
            />
            {/* <CoffeeCard />
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
            <CoffeeCard /> */}
          </div>
        </div>
      </HomeContainer>
    </div>
  )
}
