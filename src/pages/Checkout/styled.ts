import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  form {
    display: grid;
    grid-template-columns: 40rem 1fr;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
    gap: 2rem;

    max-width: 73rem;

    & > div > p {
      margin-bottom: 1rem;

      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.4625rem;

      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`
