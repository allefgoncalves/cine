import {useParams, Navigate, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import modooff from "./modooff";
import Rodape from "./Rodape";

export default function SeatsPage(){
    const idobj = useParams();
    const idsession = idobj.idSessao;
    const [seatslocal, setseatslocal] = useState([]);
    const [filme, setfilme] = useState([]);
    const [selecionados, setSelecionados] =useState([]);
    
    useEffect(()=>{  

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idsession}/seats`);     
        
        promise.then(resposta => {filme, setfilme
            setseatslocal(resposta.data.seats);
            setfilme(resposta.data);       
        });

        promise.catch(() => {
          console.log('deu errado, seats');
       });

    },[]);
   
    if(filme.length==0||seatslocal.length==0){
        console.log("passou");
        setseatslocal(modooff.seats);
        setfilme(modooff); 
    } 

    console.log(filme);

    function selecionar(id){
        console.log('teste');
        console.log(id);
        if(selecionados.includes(id)){
            let x= selecionados;
            setSelecionados(x.filter(numero=>id==numero));
        }else{
            selecionados.push(id);
        }
    }
   

    return(
        <PageContainer>
             Selecione o(s) assento(s)
             <SeatsContainer>
                {seatslocal.map(seat=>(
                    <SeatItem
                        data-test="seat"
                        key={seat.id}
                        onClick={()=>selecionar(seat.id)}
                    >
                        {seat.name}
                    </SeatItem>
                ))}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>
            
            <FormContainer>
                <form onSubmit="salverdados">
                    <label>Nome do Comprador:
                        <input tipy="text" placeholder="Digite seu nome..." />
                    </label>
                    <label>
                    CPF do Comprador:
                    <input placeholder="Digite seu CPF..." />
                    </label>
                    <button type="submit">Reservar Assento(s)</button>
                </form>
                
            </FormContainer>
            <Rodape filme={filme}/>
        </PageContainer>
    );
}
/*
function cor(selecionados,ocupados,id){
    if(ocupados===true){
        return("#F7C52B");
    }else{
        if(selecionados.includes(id)){
            return("#0E7D71");
        }else{
            return("#7B8B99");
        }
    }
}
function bordcor(selecionados,ocupados,id){

}*/

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.ul`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.li`
    border: 1px solid #7B8B99;  
    background-color: #C3CFD9;  
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
