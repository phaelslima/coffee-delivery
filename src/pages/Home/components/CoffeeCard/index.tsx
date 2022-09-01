import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeCardContent,
  Tags,
  Tag,
  CoffeeCardFooter,
  Price,
  Actions,
  Counter,
  AddItem,
} from './styles'

interface CoffeeCardProps {
  name: string
  image: string
  description: string
  tags: string[]
  price: number
}

export function CoffeeCard({
  name,
  image,
  description,
  tags,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />

      <CoffeeCardContent>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        <h3>{name}</h3>
        <p>{description}</p>
      </CoffeeCardContent>

      <CoffeeCardFooter>
        <Price>
          R$ <span>{price.toFixed(2).replace('.', ',')}</span>
        </Price>

        <Actions>
          <Counter>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </Counter>
          <AddItem type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </AddItem>
        </Actions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
