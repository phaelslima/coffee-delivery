import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  & > p {
    text-align: center;
  }
`

export const CoffeesLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme['purple-dark']};
  border-radius: 6px;

  line-height: 0;

  text-decoration: none;

  color: ${({ theme }) => theme.white};

  svg {
    margin-right: 0.375rem;
  }
`
