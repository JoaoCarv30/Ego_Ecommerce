import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FetchApiProvider } from './context/FetchApi.tsx'

createRoot(document.getElementById('root')!).render(
  <FetchApiProvider>

  <StrictMode>
    <App />
  </StrictMode>,
</FetchApiProvider>
)
