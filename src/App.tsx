import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './contexts/CartContext'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
