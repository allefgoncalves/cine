import {useParams, Navigate, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function SuccessPage(){
    
    useEffect(()=>{  
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idfilme}/showtimes`);     
        
        promise.then(resposta => {
            setSessions(resposta.data.days);
            setFilme(resposta.data);
            console.log(resposta.data.days);
        });
    
        promise.catch(() => {
          console.log('deu errado');
       });

      },[]);

    return(
        <>
        <div></div>
        </>
    );
}
