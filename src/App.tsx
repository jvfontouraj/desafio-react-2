import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/default.style'
import { GlobalStyle } from './Styles/global'
import { Home } from './Pages/Home/Home'

import { NavBarComponent } from './NavBarComponent/NavBar'
import { Checkout } from './Pages/Checkout/Checkout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <NavBarComponent />
        {/* <Home /> */}
        <Checkout />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
