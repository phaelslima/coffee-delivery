import { Minus, Plus, Trash } from 'phosphor-react'

import { useCart } from '../../../../../contexts/CartContext'
import { formattedCurrency } from '../../../../../utils/formattedCurrency'

import {
  CoffeeSelectedContainer,
  CoffeeSelectedInfo,
  CoffeeSelectedDetails,
  Actions,
  Counter,
  RemoveButton,
  Price,
  Divider,
} from './styles'

interface CoffeeSelectedProps {
  id: string
  name: string
  image: string
  amount: number
  price: number
  totalPrice: number
}

export function CoffeeSelected(cartItem: CoffeeSelectedProps) {
  const { updateCoffeeInCart, deleteCoffeeFromCart } = useCart()

  function handleDecrementCoffeeAmount() {
    if (cartItem.amount > 1) {
      const newAmount = cartItem.amount - 1
      const newPrice = newAmount * cartItem.price

      const updateCartItem = {
        id: cartItem.id,
        amount: newAmount,
        totalPrice: newPrice,
      }

      updateCoffeeInCart(updateCartItem)
    }
  }

  function handleIncrementCoffeeAmount() {
    const newAmount = cartItem.amount + 1
    const newPrice = newAmount * cartItem.price

    const updateCartItem = {
      id: cartItem.id,
      amount: newAmount,
      totalPrice: newPrice,
    }

    updateCoffeeInCart(updateCartItem)
  }

  function handleDeleteCoffeeFromCart(cartItemId: string) {
    deleteCoffeeFromCart(cartItemId)
  }

  return (
    <>
      <CoffeeSelectedContainer>
        <CoffeeSelectedInfo>
          <img src={cartItem.image} alt="" />

          <CoffeeSelectedDetails>
            <p>{cartItem.name}</p>

            <Actions>
              <Counter>
                <button type="button" onClick={handleDecrementCoffeeAmount}>
                  <Minus size={14} />
                </button>
                <span>{cartItem.amount}</span>
                <button type="button" onClick={handleIncrementCoffeeAmount}>
                  <Plus size={14} />
                </button>
              </Counter>

              <RemoveButton
                type="button"
                onClick={() => handleDeleteCoffeeFromCart(cartItem.id)}
              >
                <Trash size={14} />
                Remover
              </RemoveButton>
            </Actions>
          </CoffeeSelectedDetails>
        </CoffeeSelectedInfo>

        <Price>{formattedCurrency(cartItem.totalPrice)}</Price>
      </CoffeeSelectedContainer>

      <Divider />
    </>
  )
}
