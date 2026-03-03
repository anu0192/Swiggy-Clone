import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './pages/Header'
import { Category } from './pages/Category'
import { Topres } from './pages/TopRes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Category />
    <Topres />
  </StrictMode>,
)
