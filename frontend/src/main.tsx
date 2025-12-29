import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { store } from './store/store.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { Client } from './config/queryClient.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={Client}>
      <App />
    </QueryClientProvider>
  </Provider>
)
