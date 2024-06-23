import React from 'react'
import ReactDOM from 'react-dom/client' // to be able to render the file on the browser we add /client for hitting in the browser
import App from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
