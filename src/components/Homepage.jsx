import {useParams, Navigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function HomePage(){
  const [filmes, setfilmes] = useState([]);

  useEffect(()=>{  
    const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies"); //modo off
    //const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

    promise.then(resposta => {
      setfilmes(resposta.data);
      console.log(resposta.data);
    });

    promise.catch(() => {
      //setfilmes(modoOff);
      console.log('deu errado filmes');
   });

  },[]);

  return(
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {filmes.map(filme=>(
          <MovieContainer key={filme.id}>
            <Link to={`/sessoes/${filme.id}`}>
              <img 
                src={filme.posterURL} 
                alt={filme.title}
                onClick={()=>Navigate("/sessoes/:idFilme")}
              />
            </Link>
          </MovieContainer>
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.ul`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.li`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`