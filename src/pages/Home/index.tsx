import { Hero } from './components/Hero'
import { CoffeeCard } from './components/CoffeeCard'

import data from '../../coffees-data.json'

import { HomeContainer, CoffeeListContainer, CoffeeListContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <CoffeeListContent>
          {data.map((item) => (
            <CoffeeCard key={item.id} {...item} />
          ))}
        </CoffeeListContent>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
