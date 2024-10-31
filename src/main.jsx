// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>,
  </ErrorBoundary>
)
