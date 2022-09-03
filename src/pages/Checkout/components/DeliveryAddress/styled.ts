import styled from 'styled-components'

export const DeliveryAddressContainer = styled.section`
  margin-bottom: 0.75rem;
  padding: 2.5rem;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;

    svg {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme['yellow-dark']};
    }

    div {
      h2 {
        margin-bottom: 0.125rem;

        font-size: 1rem;
        font-weight: 400;
        line-height: 1.3rem;

        color: ${({ theme }) => theme['base-subtitle']};
      }

      h2 + p {
        font-size: 0.875rem;
        line-height: 1.3rem;

        color: ${({ theme }) => theme['base-text']};
      }
    }
  }
`
export const InputTextGroup = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
`

interface ColProps {
  cols?: number
}

export const Col = styled.div<ColProps>`
  grid-column: ${({ cols = 1 }) => `auto / span ${cols}`};
`
