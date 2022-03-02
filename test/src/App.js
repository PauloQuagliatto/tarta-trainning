import {useState} from "react";
import logo from './logo.svg';
import './App.css';
 


function App() { 
  const [numero, setNumero] = useState(); // inicia a constante numero com zero
  const [text, setText] = useState(""); //inicia uma constante de texto com chaves
  
  function maisUm() {
     setNumero(numero+1);
  }
  // função que soma mais um ao numero
  function menosUm() {
    setNumero(numero-1);
  } 
  // função que subtrai um do numero

  function raIz() {
    setNumero (Math.sqrt(numero)) 
  }
  // função que faz a raiz quadrada do numero

  function doBro() {
    setNumero (Math.pow(numero,2))
  }
  //função que eleva o numero ao quadrado

  return (
    <div className="App">
       
      <h1>
        {numero}
      </h1>
      <input
      value={numero}
      onChange={(e) => setNumero(e.target.value)}
      />
        <button onClick={() => raIz()}>√</button>
       <button onClick={() => doBro()}>²</button>
    </div>
  );
}


export default App; 
//queria ter feito uma função que bloqueasse as letras e que retornasse um aviso de que nçao era permitido o tipo de caracter 
