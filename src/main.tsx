import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css' // C'est ici que ton Tailwind est importé

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)