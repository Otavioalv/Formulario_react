import './App.css';
import Formulary from './components/formulario/Formulary';

function App() {
  const FormInfo = ["Email", "Password", "Name"];
  return (
    <div className="cFormulario">
      <Formulary placeholder={FormInfo}/>
      <input type="color" />
    </div>
  );
}

export default App;
