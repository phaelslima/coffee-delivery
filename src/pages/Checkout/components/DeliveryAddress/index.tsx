import { useFormContext } from 'react-hook-form'
import { MapPin } from 'phosphor-react'

import { NewOrderFormData } from '../..'

import { TextInput } from './TextInput'

import { DeliveryAddressContainer, InputTextGroup, Col } from './styled'

export function DeliveryAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormData>()

  return (
    <DeliveryAddressContainer>
      <header>
        <MapPin size={22} />

        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>

      <InputTextGroup>
        <TextInput
          type="number"
          placeholder="CEP"
          required
          error={errors.address?.postalCode}
          {...register('address.postalCode')}
        />

        <Col cols={3}>
          <TextInput
            placeholder="Rua"
            required
            error={errors.address?.street}
            {...register('address.street')}
          />
        </Col>

        <TextInput
          type="number"
          placeholder="Número"
          required
          error={errors.address?.streetNumber}
          {...register('address.streetNumber')}
        />

        <Col cols={2}>
          <TextInput
            placeholder="Complemento"
            error={errors.address?.complement}
            {...register('address.complement')}
          />
        </Col>

        <TextInput
          placeholder="Bairro"
          required
          error={errors.address?.district}
          {...register('address.district')}
        />

        <TextInput
          placeholder="Cidade"
          required
          error={errors.address?.city}
          {...register('address.city')}
        />

        <TextInput
          autoCapitalize="characters"
          placeholder="UF"
          required
          error={errors.address?.state}
          {...register('address.state')}
        />
      </InputTextGroup>
    </DeliveryAddressContainer>
  )
}
