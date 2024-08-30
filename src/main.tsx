import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Reports } from './pages/Reports'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reports />
  </StrictMode>,
)
