import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

serviceWorkerRegistration.register()
