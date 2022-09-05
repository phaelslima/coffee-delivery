import { Coffee, ShoppingCartSimple } from 'phosphor-react'

import { CoffeesLink, EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <ShoppingCartSimple size={32} />

      <p>Seu carrinho esta vazio :(</p>
      <p>
        Escolha <strong>seu café favorito</strong> em nossa lista
      </p>

      <CoffeesLink to="/">
        <Coffee size={18} weight="fill" />
        Ver cafés
      </CoffeesLink>
    </EmptyCartContainer>
  )
}
