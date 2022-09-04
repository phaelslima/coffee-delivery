import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import {
  addCoffeeToCartAction,
  deleteCoffeeFromCartAction,
  updateCoffeeInCartAction,
  UpdatedCoffeeData,
} from '../reducers/cart/actions'

import { CardItemData, CartReducer } from '../reducers/cart/reduce'

type CartContextData = {
  items: CardItemData[]
  addCoffeeToCart: (coffee: CardItemData) => void
  updateCoffeeInCart: (updatedCoffee: UpdatedCoffeeData) => void
  deleteCoffeeFromCart: (coffeeId: string) => void
}

const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, { items: [] }, () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    } else {
      return {
        items: [],
      }
    }
  })

  const { items } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addCoffeeToCart(coffee: CardItemData) {
    dispatch(addCoffeeToCartAction(coffee))
  }

  function updateCoffeeInCart(updatedCoffee: UpdatedCoffeeData) {
    dispatch(updateCoffeeInCartAction(updatedCoffee))
  }

  function deleteCoffeeFromCart(coffeeId: string) {
    dispatch(deleteCoffeeFromCartAction(coffeeId))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addCoffeeToCart,
        updateCoffeeInCart,
        deleteCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
