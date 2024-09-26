import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider }from 'react-redux'
import {counterStore}  from './Store/Index.js'
import {persistor} from './Store/Index.js'
import { PersistGate } from'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={counterStore}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
  </StrictMode>,
)
