import { CoffeeSelected } from './CoffeeSelected'

import { formattedCurrency } from '../../../../utils/formattedCurrency'

import {
  OrderSummaryContainer,
  OrderSubtotal,
  DeliveryFee,
  OrderTotal,
  ConfirmOrderButton,
} from './styled'

export function OrderSummary() {
  return (
    <OrderSummaryContainer>
      {/* {[].map((item, index) => (
        <CoffeeSelected
          key={index}
          name=""
          image=""
          quantity={}
          price={}
        />
      ))} */}

      <OrderSubtotal>
        <span>Total de itens</span>
        <span>{formattedCurrency(0)}</span>
      </OrderSubtotal>

      <DeliveryFee>
        <span>Entrega</span>
        <span>{formattedCurrency(0)}</span>
      </DeliveryFee>

      <OrderTotal>
        <span>Total</span>
        <span>{formattedCurrency(0)}</span>
      </OrderTotal>

      <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
    </OrderSummaryContainer>
  )
}
