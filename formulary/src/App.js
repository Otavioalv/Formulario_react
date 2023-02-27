import './App.css';
import Formulary from './components/formulario/Formulary';
import NavBar from './components/NavBar/NavBar'


function App() {
  const TemaDark = {
    background: "linear-gradient(145deg, #121a27, #151f2e)",
    boxShadowColorD: "1cqmin 1cqmin 2cqmin #080c11,-1cqmin -1cqmin 2cqmin #202e45",
    boxShadowColorI: "inset 1cqmin 1cqmin 1.8cqmin #080c11,inset -1cqmin -1cqmin 1.8cqmin #202e45",
    color: "#fff"
  },
  TemaLight = {
    background: "linear-gradient(145deg, #d0cee6, #f7f5ff))",
    boxShadowColorD: "1cqmin 1cqmin 2cqmin #c4c3d9,-1cqmin -1cqmin 2cqmin #ffffff",
    boxShadowColorI: "inset 1cqmin 1cqmin 1.8cqmin #c4c3d9,inset -1cqmin -1cqmin 1.8cqmin #ffffff;",
    color: "#000"
  }

  document.body.style.background = TemaLight.background;


  const FormInfo_Login = {email: 'Email', password: 'Password', text: 'Name'},
        FormInfo_SignUp = {...FormInfo_Login};
        delete FormInfo_SignUp.text;
      

  const NavBar_objLoguin = {
      Login: <Formulary object={FormInfo_Login} color={TemaLight}/>, 
      SignUp: <Formulary object={FormInfo_SignUp} color={TemaLight}/>
    } 

  return (
    <div 
      className="cFormulario"
      style={{
        background: TemaLight.background,
        boxShadow: TemaLight.boxShadowColorD
      }}
    >
      <NavBar 
        object={NavBar_objLoguin}
      />
      {/* <Formulary object={FormInfo_Login}/> */}
      {/* <input type="color" /> */}
    </div>
  );
}

export default App;
