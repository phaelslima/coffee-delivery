import produce from 'immer'

import { ActionType } from './actions'

export type CardItemData = {
  id: string
  name: string
  image: string
  amount: number
  price: number
  totalPrice: number
}

interface CartState {
  items: CardItemData[]
}

const INITIAL_STATE: CartState = {
  items: [],
}

export function CartReducer(state = INITIAL_STATE, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.ADD_COFFEE_TO_CART: {
        const { coffee } = action.payload

        const itemInCartIndex = draft.items.findIndex(
          (item) => item.id === coffee.id,
        )

        if (itemInCartIndex >= 0) {
          draft.items[itemInCartIndex] = coffee
        } else {
          draft.items.push(coffee)
        }

        break
      }

      case ActionType.UPDATE_COFFEE_IN_CART: {
        const { id, amount, totalPrice } = action.payload

        const updatedCoffee = draft.items.map((coffee) => {
          if (coffee.id === id) {
            return {
              ...coffee,
              amount,
              totalPrice,
            }
          } else {
            return coffee
          }
        })

        draft.items = updatedCoffee

        break
      }

      case ActionType.DELETE_COFFEE_FROM_CART: {
        const filteredCartItems = draft.items.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        )

        draft.items = filteredCartItems

        break
      }

      case ActionType.CLEAN_CART: {
        draft.items = []

        break
      }

      default:
        return draft
    }
  })
}
