import styled from 'styled-components'

export const OrderSummaryContainer = styled.section`
  padding: 2.5rem;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 0.375rem 2.75rem;
`

export const OrderSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.875rem;

  span {
    font-size: 0.875rem;
    line-height: 1.1375rem;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const DeliveryFee = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.875rem;

  span {
    font-size: 0.875rem;
    line-height: 1.1375rem;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled.button`
  padding: 0.75rem 0.5rem;

  width: 100%;

  background: ${({ theme }) => theme.yellow};
  border-radius: 6px;
  border: 0;

  font-size: 0.875rem;
  font-stretch: 100;
  font-weight: 700;
  line-height: 1.4rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme.white};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
