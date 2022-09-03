import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { DeliveryAddress } from './components/DeliveryAddress'

import { CheckoutContainer } from './styled'

const newOrderFormValidationSchema = zod.object({
  address: zod.object({
    postalCode: zod.string().nonempty({ message: 'Campo obrigatório' }),
    street: zod.string().nonempty({ message: 'Campo obrigatório' }),
    streetNumber: zod.string().nonempty({ message: 'Campo obrigatório' }),
    complement: zod.string().optional(),
    district: zod.string().nonempty({ message: 'Campo obrigatório' }),
    city: zod.string().nonempty({ message: 'Campo obrigatório' }),
    state: zod.string().nonempty({ message: 'Campo obrigatório' }),
  }),
  paymentMethod: zod
    .string({
      required_error: 'Selecione a forma de pagamento',
      invalid_type_error: 'Selecione a forma de pagamento',
    })
    .nonempty({ message: 'Selecione a forma de pagamento' }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { handleSubmit } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <div>
          <p>Complete seu pedido</p>

          <FormProvider {...newOrderForm}>
            <DeliveryAddress />
          </FormProvider>
        </div>
      </form>
    </CheckoutContainer>
  )
}
