import { Minus, Plus, Trash } from 'phosphor-react'

import { formattedCurrency } from '../../../../../utils/formattedCurrency'

import {
  CoffeeSelectedContainer,
  CoffeeSelectedInfo,
  CoffeeSelectedDetails,
  Actions,
  Counter,
  RemoveButton,
  Price,
  Divider,
} from './styles'

interface CoffeeSelectedProps {
  name: string
  image: string
  quantity: number
  price: number
}

export function CoffeeSelected({
  name,
  image,
  quantity,
  price,
}: CoffeeSelectedProps) {
  return (
    <>
      <CoffeeSelectedContainer>
        <CoffeeSelectedInfo>
          <img src={image} alt="" />

          <CoffeeSelectedDetails>
            <p>{name}</p>

            <Actions>
              <Counter>
                <button>
                  <Minus size={14} />
                </button>
                <span>{quantity}</span>
                <button>
                  <Plus size={14} />
                </button>
              </Counter>

              <RemoveButton>
                <Trash size={14} />
                Remover
              </RemoveButton>
            </Actions>
          </CoffeeSelectedDetails>
        </CoffeeSelectedInfo>

        <Price>{formattedCurrency(price)}</Price>
      </CoffeeSelectedContainer>

      <Divider />
    </>
  )
}
