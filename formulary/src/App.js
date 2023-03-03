import './App.css';
/* import React, { useRef } from 'react'; */
/* import ReactDOM from 'react-dom';
import React, { Component } from 'react'; */
import Formulary from './components/formulario/Formulary';
import NavBar from './components/NavBar/NavBar';
import CheckBox from './components/buttons/CheckBox';
import { useEffect, useState } from 'react';


function App() {

  // TEMAS
  const TemaDark = {
    bk: "#121a27",
    background: "linear-gradient(145deg, #121a27, #151f2e)",
    boxShadowColorD: "1cqmin 1cqmin 2cqmin #080c11,-1cqmin -1cqmin 2cqmin #202e45",
    boxShadowColorI: "inset 1cqmin 1cqmin 1.8cqmin #080c11,inset -1cqmin -1cqmin 1.8cqmin #202e45",
    color: "#fff"
  },
  TemaLight = {
    bk: "#ebf0ff",
    background: "linear-gradient(145deg,  #d4d8e6, #fbffff)",
    boxShadowColorD: "1cqmin 1cqmin 2cqmin #c8ccd9,-1cqmin -1cqmin 2cqmin #ffffff",
    boxShadowColorI: "inset 1cqmin 1cqmin 2cqmin #c8ccd9, inset -1cqmin -1cqmin 3cqmin #ffffff",
    color: "#000"
  },
  Tema = [TemaDark, TemaLight];
  

  // Salva o 't' com valor 0
  const [t, setT] = useState(Number(localStorage.getItem('t')) || 0);

  // Ao Recaregar a pagina 't' não muda
  useEffect(() => {
    localStorage.setItem('t', t);
  }, [t]);

  document.body.style.background = Tema[t].bk;


  const FormInfo_Login = {email: 'Email', password: 'Password', text: 'Name'},
        FormInfo_SignUp = {...FormInfo_Login};
        delete FormInfo_SignUp.text;
  

  /* -------------- */

  /*  */

  /* console.log(usserInfo); */
  const NavBar_objLoguin = {
      Login: <Formulary object={FormInfo_Login} color={Tema[t]}/>, 
      SignUp: <Formulary object={FormInfo_SignUp} color={Tema[t]} />
    } 

  //Função pra alterar o valor de 't'
  function Click(){
    setT(t => (t ? 0 : 1));
  }

  return (
    <div>
       
    <div 
      className="cFormulario"
      style={{
        background: Tema[t].background,
        boxShadow: Tema[t].boxShadowColorD
      }}
    > 
      <CheckBox 
        id="check_box" 
        onClick={Click} 
        color={Tema[t]}
      />
      <NavBar 
        object={NavBar_objLoguin}
        color={Tema[t]}
      />
    </div>
    </div>
  );
}

/* history.push(`/formulario/info?email=${form.email}&password=${form.password}&text=${form.text}`); */
export default App;
