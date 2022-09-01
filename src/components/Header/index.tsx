import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo-coffee-delivery.svg'

import {
  Cart,
  HeaderActions,
  HeaderContainer,
  HeaderContent,
  Location,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo do Coffee Delivery" />

        <HeaderActions>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Londrina, PR</span>
          </Location>
          <Cart>
            <Link to="/checkout" title="Página de Checkout">
              <ShoppingCart size={22} weight="fill" />
            </Link>
          </Cart>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
