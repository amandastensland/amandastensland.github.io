import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const app = document.getElementById('app')
const root = app && createRoot(app)
root?.render(<App />)