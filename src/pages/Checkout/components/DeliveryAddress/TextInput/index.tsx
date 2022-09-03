import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { FieldError } from 'react-hook-form'

import {
  TextInputContainer,
  Input,
  OptionalLabel,
  ErrorMessage,
} from './styles'

interface TextInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputBaseProps
> = ({ required, error, ...rest }, ref) => (
  <TextInputContainer>
    <Input ref={ref} {...rest} />
    {!required && <OptionalLabel>Opcional</OptionalLabel>}
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </TextInputContainer>
)

export const TextInput = forwardRef(TextInputBase)
