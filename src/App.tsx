import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/default.style'
import { GlobalStyle } from './Styles/global'
import { Home } from './Pages/Home/Home'

import { NavBarComponent } from './NavBarComponent/NavBar'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <NavBarComponent />
        <Home />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
