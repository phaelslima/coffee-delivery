import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useCart } from '../../contexts/CartContext'

import logoImg from '../../assets/logo-coffee-delivery.svg'

import {
  Cart,
  HeaderActions,
  HeaderContainer,
  HeaderContent,
  Location,
} from './styles'

export function Header() {
  const { items } = useCart()

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/" id="logo">
          <img src={logoImg} alt="Logo do Coffee Delivery" />
        </Link>

        <HeaderActions>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Londrina, PR</span>
          </Location>
          <Cart>
            <Link to="/checkout" title="Página de Checkout">
              <ShoppingCart size={22} weight="fill" />
              {!!items.length && <span>{items.length}</span>}
            </Link>
          </Cart>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
