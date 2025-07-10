import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store.js'
import { Provider } from 'react-redux'
import './index.css'
import toast,{Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {Store}>
    <App />
    <Toaster />
    </Provider>
  </StrictMode>,
)
