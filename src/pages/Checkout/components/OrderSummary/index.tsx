import { CoffeeSelected } from './CoffeeSelected'

import { useCart } from '../../../../contexts/CartContext'
import { EmptyCart } from './EmptyCart/Index'
import { formattedCurrency } from '../../../../utils/formattedCurrency'

import {
  OrderSummaryContainer,
  OrderSubtotal,
  DeliveryFee,
  OrderTotal,
  ConfirmOrderButton,
} from './styled'

export function OrderSummary() {
  const { items } = useCart()

  const subtotal = items.reduce((acc, cur) => acc + cur.totalPrice, 0)
  const deliveryFee = !items.length ? 0 : 3.5
  const total = subtotal + deliveryFee

  return (
    <OrderSummaryContainer>
      {!items.length ? (
        <EmptyCart />
      ) : (
        <>
          {items.map((item) => (
            <CoffeeSelected key={item.id} {...item} />
          ))}

          <OrderSubtotal>
            <span>Total de itens</span>
            <span>{formattedCurrency(subtotal)}</span>
          </OrderSubtotal>

          <DeliveryFee>
            <span>Entrega</span>
            <span>{formattedCurrency(deliveryFee)}</span>
          </DeliveryFee>

          <OrderTotal>
            <span>Total</span>
            <span>{formattedCurrency(total)}</span>
          </OrderTotal>

          <ConfirmOrderButton type="submit" disabled={!items.length}>
            Confirmar Pedido
          </ConfirmOrderButton>
        </>
      )}
    </OrderSummaryContainer>
  )
}
