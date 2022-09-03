import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    display: none;
  }

  input:hover + label {
    background: ${({ theme }) => theme['base-hover']};
    border: 1px solid ${({ theme }) => theme['base-hover']};
  }

  input:checked + label {
    background: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme.purple};
  }

  label {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;

    background: ${({ theme }) => theme['base-button']};

    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 6px;

    font-size: 0.75rem;
    line-height: 1.2rem;

    text-transform: uppercase;

    color: ${({ theme }) => theme['base-text']};

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.purple};
    }
  }
`
