import {createRoot} from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import ThemeProvider from "./provider/ThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
