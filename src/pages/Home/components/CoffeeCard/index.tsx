import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { useCart } from '../../../../contexts/CartContext'

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
  id: string
  name: string
  image: string
  description: string
  tags: string[]
  price: number
}

export function CoffeeCard({
  id,
  name,
  image,
  description,
  tags,
  price,
}: CoffeeCardProps) {
  const { addCoffeeToCart } = useCart()

  const [amount, setAmount] = useState(1)

  function handleAddCoffeeToCart() {
    const coffee = {
      id,
      image,
      name,
      amount,
      price,
      totalPrice: price * amount,
    }

    addCoffeeToCart(coffee)
  }

  function handleMinus() {
    setAmount((oldState) => (oldState > 1 ? oldState - 1 : 1))
  }

  function handlePlus() {
    setAmount((oldState) => oldState + 1)
  }

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
            <button onClick={handleMinus}>
              <Minus size={14} />
            </button>
            <span>{amount}</span>
            <button onClick={handlePlus}>
              <Plus size={14} />
            </button>
          </Counter>
          <AddItem onClick={handleAddCoffeeToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddItem>
        </Actions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
