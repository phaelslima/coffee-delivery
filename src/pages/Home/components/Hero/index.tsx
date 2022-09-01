import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import disposableCoffeeCupImg from '../../../../assets/disposable-coffee-cup-and-some-coffee-beans.png'

import { HeroContainer, HeroContent, HighlightList, Highlight } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <HighlightList>
          <Highlight color="yellow-dark">
            <span className="step-1">
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </Highlight>

          <Highlight color="base-text">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </Highlight>

          <Highlight color="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </Highlight>

          <Highlight color="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </Highlight>
        </HighlightList>
      </HeroContent>

      <img
        src={disposableCoffeeCupImg}
        alt="Copo de café descartável e alguns grãos de café"
      />
    </HeroContainer>
  )
}
