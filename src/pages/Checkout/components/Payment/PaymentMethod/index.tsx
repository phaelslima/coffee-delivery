import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { IconProps } from 'phosphor-react'

import { PaymentMethodContainer } from './styles'

interface PaymentMethodBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ForwardRefExoticComponent<IconProps>
}

const PaymentMethodBase: ForwardRefRenderFunction<
  HTMLInputElement,
  PaymentMethodBaseProps
> = ({ id, icon: Icon, value, ...rest }, ref) => (
  <PaymentMethodContainer>
    <input ref={ref} id={id} type="radio" value={value} {...rest} />
    <label htmlFor={id}>
      <Icon size={16} />
      {value}
    </label>
  </PaymentMethodContainer>
)

export const PaymentMethod = forwardRef(PaymentMethodBase)
