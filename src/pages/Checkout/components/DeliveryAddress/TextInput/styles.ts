import styled from 'styled-components'

export const TextInputContainer = styled.div`
  position: relative;
`

export const Input = styled.input`
  padding: 0.75rem;

  width: 100%;

  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  line-height: 1.1375rem;

  color: ${({ theme }) => theme['base-text']};

  ::placeholder {
    font-size: 0.875rem;
    line-height: 1.1375rem;

    color: ${({ theme }) => theme['base-label']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const OptionalLabel = styled.span`
  position: absolute;
  top: 1rem;
  right: 0.75rem;

  font-style: italic;
  font-size: 0.75rem;
  line-height: 0.975rem;

  color: ${({ theme }) => theme['base-label']};
`

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;

  font-size: 0.75rem;
  line-height: 0.975rem;

  color: ${({ theme }) => theme.red};
`
