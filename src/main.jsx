import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {Store} from './store/store.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <div className='total-container'>
      <App />
      </div>
    </Provider>
  </StrictMode>,
)
