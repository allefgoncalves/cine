import Homepage from './components/Homepage';
import SessionsPage from './components/SessionsPage/SessionsPage';
import SeatsPage from './components/SeatsPage/SeatsPage'

import { useState, useEffect } from 'react';
import axios from 'axios';
import modoOff from "./modoOff";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [filmes, setfilmes] = useState([]);
  
  useEffect(()=>{  
      const promise = axios.get("https://"); //modo off
      //const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

      promise.then(resposta => {
    //setfilmes(resposta.data);
          console.assert.log("não ta indo")
      });

      promise.catch(() => {
        setfilmes(modoOff);
        console.log(filmes);
     });

  },[]) //[] -> execulta o codigo uma vez; 
       //[filmes] -> colocar aqui as variaveis de estados que
       // quando alteradas fazem a função ser execultada;


  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path={`/sessoes/:idFilme`} element={<SessionsPage />}></Route>
                <Route path={`/assentos/:idSessao`} element={<SeatsPage />}></Route>
                <Route path="/" element={<SuccessPage />}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App;
