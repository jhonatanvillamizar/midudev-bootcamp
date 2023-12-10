import './App.css';
import Mensaje from './Modulo.jsx';


const Description = () => {
  return <p>
    Esta es la app del curso de fullstack bootcamp
  </p>
}

const App = () => {
  return ( 
    <div className='App'>
      <Mensaje />
      <Mensaje />
      <Mensaje />
      <Description/>
    </div>
  )
}

export default App
