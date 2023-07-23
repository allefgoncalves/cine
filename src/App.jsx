import Homepage from './components/Homepage';
import SessionsPage from './components/SessionsPage/SessionsPage';
import SeatsPage from './components/SeatsPage/SeatsPage';
import SuccessPage from './components/SuccessPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path={`/sessoes/:idFilme`} element={<SessionsPage />}></Route>
                <Route path={`/assentos/:idSessao`} element={<SeatsPage />}></Route>
                <Route path={`/sucesso`} element={<SuccessPage />}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App;
