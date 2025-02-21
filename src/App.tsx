import './styles/index.scss'
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home/Home.tsx";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics.tsx";
import Header from "./shared/Header/Header.tsx";
import {Popup} from "./shared/Popup/Popup.tsx";

function App() {

    return (
        <div className={'app'}>
            <Popup/>
            <div className={'container'}>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/month'} element={<MonthStatistics/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
