import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import './style/global.css'
import { AuthProvider } from './context/auth'

ReactDOM.render(
  <React.StrictMode>
      
    <AuthProvider> 
      <App />
    </AuthProvider>
 
  </React.StrictMode>,
  document.getElementById('root')
)