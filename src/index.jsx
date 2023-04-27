import './style.css'
import ReactDOM from 'react-dom/client'
import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"
import App from './App'
import React from 'react'
import { Leva } from 'leva'

studio.extend(extension)
studio.initialize()
studio.ui.hide()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Leva collapsed hidden />
        <App />
    </React.StrictMode>,
)
