import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './pages/Header'
import { Category } from './pages/Category'
import { TopRes } from './pages/TopRes'
import { OnlineDelivery } from './pages/OnlineDelivery'
import { Banner_Section } from './pages/Banner_Section'
import { Footer } from './pages/Footer'

function App() {
  const [hideHeader, setHideHeader] = useState(false)

  return (
    <StrictMode>
      <Header hideHeader={hideHeader}/>
      <Category />
      <TopRes />
      <OnlineDelivery hideHeader={hideHeader} setHideHeader={setHideHeader}/>
      <Banner_Section />
      <Footer />
      
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
