import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { SlidebarProvider } from './Context/MyContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <SlidebarProvider>
      <App />
    </SlidebarProvider>
  </BrowserRouter>,
)
