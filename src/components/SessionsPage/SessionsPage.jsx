import {useParams, Navigate, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function SessionsPage(){
    const idobj = useParams();
    const idfilme = idobj.idFilme;
    const [sessions, setSessions] = useState([]);
    const [filme, setFilme] = useState([]);

    useEffect(()=>{  
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idfilme}/showtimes`);     
        
        promise.then(resposta => {
            setSessions(resposta.data.days);
            setFilme(resposta.data);
            console.log(resposta.data);
        });
    
        promise.catch(() => {
          console.log('deu errado, sessions');
       });

      },[]);
  
    return(
        <PageContainer>
            Selecione o horário
            <ul>
                {sessions.map(session=>(
                    <SessionContainer key={session.id}  data-test="movie-day" >
                         {session.weekday} - {session.date} 
                        <ButtonsContainer>
                            {session.showtimes.map(showtime =>
                                <Link 
                                    data-test="showtime"
                                    key={showtime.id}
                                    to={`/assentos/${showtime.id}`}
                                    onClick={()=>Navigate("/sessoes/:idFilme")}
                                >
                                    <button>{showtime.name}</button>
                                </Link>
                            )}
                        </ButtonsContainer>
                    </SessionContainer>
                ))}
            </ul>

            <FooterContainer data-test="footer">
                <div>
                    <img src={filme.posterURL} alt={filme.title} />
                </div>
                <div>
                    <p>{filme.title}</p>
                </div>
            </FooterContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`