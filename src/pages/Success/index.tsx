import { Navigate, useLocation } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { NewOrderFormData } from '../Checkout'

import deliverymanImg from '../../assets/deliveryman.svg'

import { SuccessContainer, SuccessContent, Info, InfoList } from './styles'

type OrderState = {
  order: NewOrderFormData
}

export function Success() {
  const { state } = useLocation()

  if (!state) {
    return <Navigate to="/" />
  }

  const { order } = state as OrderState

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SuccessContent>
        <InfoList>
          <Info color="purple">
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              Entrega em{' '}
              <strong>
                {order.address.street}, {order.address.streetNumber}
              </strong>
              <br />
              {order.address.district} - {order.address.city},{' '}
              {order.address.state}
            </p>
          </Info>

          <Info color="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </Info>

          <Info color="yellow-dark">
            <div>
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <strong>{order.paymentMethod}</strong>
            </p>
          </Info>
        </InfoList>

        <img src={deliverymanImg} alt="Rapaz na mota com uma encomenda" />
      </SuccessContent>
    </SuccessContainer>
  )
}
