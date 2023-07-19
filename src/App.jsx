import { useState } from 'react';
import Tela1 from './tela1';
import Tela2 from './Tela2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import modoOff from "./modoOff";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [filmes, setfilmes] = useState([]);
  const [filme, setfilme] = useState([]);
  
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
                <route path="/" element={<Tela1 />}></route>
                <route path={`/sessoes/:idFilme`} element={<Tela2 filme={filme} setfilme={setfilme}/>}></route>
            </Routes>
    </BrowserRouter>
  )
}

export default App;
