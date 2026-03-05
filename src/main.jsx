import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './pages/Header'
import { Category } from './pages/Category'
import { Topres } from './pages/TopRes'
import { OnlineDelivery } from './pages/OnlineDelivery'
import { Banner_Section } from './pages/Banner_Section'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Category />
    <Topres />
    <OnlineDelivery />
    <Banner_Section />
  </StrictMode>,
)
