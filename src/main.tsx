import {createRoot} from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
