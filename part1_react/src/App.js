
import './App.css';
import Mensaje from './Mensaje.js';

const Description  = () => {
  return  <p>Esta es la App que esta creando</p>
}

const App  = () => {
  const  a = 2
  const  b = 3
   
  return (
    <div className="App">
    <h1>Titulo de la App</h1>
    <strong>Estamos trabajando en ellos</strong>
    <div>
    <p>El resultado es:</p>
    {a-b}
    </div>
    < Mensaje color ='red' massage='Estamos en un curso'/>
    < Mensaje color ='green' massage='Desde cero '/>
    < Mensaje color ='blue' massage='Con React'/>
    < Description/>
    </div>
    
    
  )
}


export default App;
