import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import StoreContext from './StoreContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
)
