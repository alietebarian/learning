import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './context/CourseContext.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>
);
