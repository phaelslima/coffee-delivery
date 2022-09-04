import { createContext, ReactNode, useContext } from 'react'

type CartContextData = {}

const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
