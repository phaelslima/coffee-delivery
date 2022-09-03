import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['yellow-dark']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
