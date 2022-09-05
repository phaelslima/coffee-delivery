import { useFormContext } from 'react-hook-form'
import { MapPin } from 'phosphor-react'

import { NewOrderFormData } from '../..'

import { TextInput } from './TextInput'

import { DeliveryAddressContainer, InputTextGroup, Col } from './styled'
import { useEffect } from 'react'

interface ResponseData {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  erro: string
}

export function DeliveryAddress() {
  const {
    register,
    watch,
    clearErrors,
    resetField,
    setValue,
    setError,

    formState: { errors },
  } = useFormContext<NewOrderFormData>()

  const postalCode = watch('address.postalCode')

  useEffect(() => {
    if (postalCode && postalCode.length === 8) {
      fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
        .then((response) => response.json())
        .then((response: ResponseData) => {
          if (!response.erro) {
            const { logradouro, bairro, localidade, uf } = response

            setValue('address.street', logradouro)
            setValue('address.district', bairro)
            setValue('address.city', localidade)
            setValue('address.state', uf)

            clearErrors([
              'address.street',
              'address.district',
              'address.city',
              'address.state',
            ])
          } else {
            setError('address.postalCode', { message: 'CEP inválido' })

            resetField('address.street')
            resetField('address.streetNumber')
            resetField('address.complement')
            resetField('address.district')
            resetField('address.city')
            resetField('address.state')
          }
        })
        .catch(() => {})
    }
  }, [postalCode])

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
          readOnly
          required
          error={errors.address?.city}
          {...register('address.city')}
        />

        <TextInput
          autoCapitalize="characters"
          placeholder="UF"
          readOnly
          required
          error={errors.address?.state}
          {...register('address.state')}
        />
      </InputTextGroup>
    </DeliveryAddressContainer>
  )
}
