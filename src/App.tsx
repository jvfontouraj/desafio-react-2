import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/default.style'
import { GlobalStyle } from './Styles/global'
import { Router } from './Router'
import {
  CheckoutContext,
  CheckoutContextProvider,
} from './Contexts/CheckoutContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
