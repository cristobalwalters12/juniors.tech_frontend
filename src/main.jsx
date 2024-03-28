import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import App from './App.jsx'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { enableMocks } from './config/enviroment.js'
const queryClient = new QueryClient()

enableMocks().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ReactQueryDevtools/>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}).catch((error) => {
  console.error('[main.jsx] ==> enableMocking.', error)
})
