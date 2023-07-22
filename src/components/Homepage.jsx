import { useParams } from "react-router-dom"

export default function Tela1(){
  const params = useParams();


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

},[])

    return(
      <>
      </>  
    );
}