import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeSelectedInfo = styled.div`
  display: flex;

  img {
    margin-right: 1.25rem;

    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeSelectedDetails = styled.div`
  & > p {
    margin-bottom: 0.5rem;

    line-height: 1.3rem;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;

  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  button {
    background: transparent;

    line-height: 0;
    border: 0;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.purple};

      &:hover {
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }

  span {
    padding: 0 0.25rem;
    line-height: 1.625rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  border: 0;

  font-size: 0.75rem;
  line-height: 1.2rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme['base-text']};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  svg {
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.purple};
  }
`

export const Price = styled.span`
  font-weight: 700;
  line-height: 1.3rem;

  color: ${({ theme }) => theme['base-text']};
`

export const Divider = styled.hr`
  margin: 1.5rem 0;
  border: 1px solid ${({ theme }) => theme['base-button']};
`
