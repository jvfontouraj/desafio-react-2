import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Checkout } from './Pages/Checkout/Checkout'
import { Success } from './Pages/Success/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
