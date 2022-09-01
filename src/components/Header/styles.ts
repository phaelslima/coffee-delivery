import styled from 'styled-components'

export const HeaderContainer = styled.header``

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  max-width: 73rem;
`

export const HeaderActions = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  list-style: none;
`

export const Location = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  background: ${({ theme }) => theme['purple-light']};
  border-radius: 6px;

  svg {
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.purple};
  }

  span {
    line-height: 1.1375rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const Cart = styled.li`
  a {
    display: flex;
    padding: 0.5rem;

    background: ${({ theme }) => theme['yellow-light']};
    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`
