import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 0.375rem 2.25rem;

  img {
    margin-top: -1.25rem;
  }
`

export const CoffeeCardContent = styled.div`
  padding: 0.75rem 1.25rem;

  h3 {
    margin-bottom: 0.5rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;

    text-align: center;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  h3 + p {
    font-size: 0.875rem;
    line-height: 1.1375rem;

    text-align: center;

    color: ${({ theme }) => theme['base-label']};
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.25rem;
`

export const Tag = styled.span`
  padding: 0.25rem 0.8rem;

  background: ${({ theme }) => theme['yellow-light']};

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.8125rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme['yellow-dark']};

  border-radius: 100px;
`

export const CoffeeCardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;

  width: 100%;
`

export const Price = styled.span`
  font-size: 0.875rem;
  line-height: 1.95rem;

  color: ${({ theme }) => theme['base-text']};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  button {
    background: transparent;
    border: 0;

    line-height: 0;

    color: ${({ theme }) => theme.purple};

    cursor: pointer;
  }

  span {
    padding: 0 0.5rem;

    line-height: 1.3rem;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const AddItem = styled.button`
  padding: 0.5rem;

  background: ${({ theme }) => theme['purple-dark']};
  border: 0;
  border-radius: 6px;

  line-height: 0;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.white};
  }
`
