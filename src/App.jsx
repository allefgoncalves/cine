import Homepage from './components/Homepage';
import SessionsPage from './components/SessionsPage/SessionsPage';
import SeatsPage from './components/SeatsPage/SeatsPage';
import SuccessPage from './components/SuccessPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from 'styled-components';


export default function App() {
  return (
    <BrowserRouter>
      <NavContainer>CINEFLEX</NavContainer>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path={`/sessoes/:idFilme`} element={<SessionsPage />}></Route>
        <Route path={`/assentos/:idSessao`} element={<SeatsPage />}></Route>
        <Route path={`/sucesso`} element={<SuccessPage />}></Route>
      </Routes>     
    </BrowserRouter>
  )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`

