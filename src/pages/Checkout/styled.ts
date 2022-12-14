import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  form {
    display: grid;
    grid-template-columns: 40rem 1fr;
    margin: 6.75rem auto 0;
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

    @media screen and (max-width: 69rem) {
      grid-template-columns: 1fr 23.5rem;
    }

    @media screen and (max-width: 62rem) {
      grid-template-columns: 1fr;
    }
  }
`
