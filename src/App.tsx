import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/default.style'
import { GlobalStyle } from './Styles/global'
import { Home } from './Pages/Home/Home'

import { NavBarComponent } from './NavBarComponent/NavBar'
import { Checkout } from './Pages/Checkout/Checkout'
import { Success } from './Pages/Success/Success'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <NavBarComponent />
        {/* <Home /> */}
        {/* <Checkout /> */}
        <Success />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
