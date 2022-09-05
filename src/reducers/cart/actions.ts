import { CardItemData } from './reduce'

export enum ActionType {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  UPDATE_COFFEE_IN_CART = 'UPDATE_COFFEE_IN_CART',
  DELETE_COFFEE_FROM_CART = 'DELETE_COFFEE_FROM_CART',
  CLEAN_CART = 'CLEAN_CART',
}

export function addCoffeeToCartAction(coffee: CardItemData) {
  return {
    type: ActionType.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  }
}

export type UpdatedCoffeeData = {
  id: string
  amount: number
  totalPrice: number
}

export function updateCoffeeInCartAction(updatedCoffee: UpdatedCoffeeData) {
  const { id, amount, totalPrice } = updatedCoffee

  return {
    type: ActionType.UPDATE_COFFEE_IN_CART,
    payload: {
      id,
      amount,
      totalPrice,
    },
  }
}

export function deleteCoffeeFromCartAction(coffeeId: string) {
  return {
    type: ActionType.DELETE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function cleanCartAction() {
  return {
    type: ActionType.CLEAN_CART,
  }
}
