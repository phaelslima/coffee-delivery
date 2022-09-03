import { useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { NewOrderFormData } from '../..'
import { PaymentMethod } from './PaymentMethod'

import { PaymentContainer, PaymentMethodOptions, ErrorMessage } from './styles'

export function Payment() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormData>()

  return (
    <PaymentContainer>
      <header>
        <CurrencyDollar size={22} />

        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>

      <PaymentMethodOptions>
        <PaymentMethod
          id="credit-card"
          icon={CreditCard}
          value="Cartão de Crédito"
          {...register('paymentMethod')}
        />

        <PaymentMethod
          id="debit-card"
          icon={Bank}
          value="Cartão de Débito"
          {...register('paymentMethod')}
        />

        <PaymentMethod
          id="cash"
          icon={Money}
          value="Dinheiro"
          {...register('paymentMethod')}
        />
      </PaymentMethodOptions>

      {errors.paymentMethod && (
        <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
      )}
    </PaymentContainer>
  )
}
