import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme['base-input']};

  z-index: 10;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  max-width: 73rem;

  #logo {
    :focus {
      box-shadow: none;
    }
  }
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

    position: relative;

    background: ${({ theme }) => theme['yellow-light']};
    border-radius: 6px;

    text-decoration: none;

    svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: -0.5rem;
      right: -0.5rem;

      width: 1.25rem;
      height: 1.25rem;

      background: ${({ theme }) => theme['yellow-dark']};
      border-radius: 50%;

      line-height: 0;

      font-size: 0.75rem;
      font-weight: 700;

      color: ${({ theme }) => theme.white};
    }
  }
`
