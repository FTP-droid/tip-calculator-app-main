import './App.css'
import logo from '../images/logo.svg';
import Calculator from './components/Calculator/Calculator';

function App() {

  return (
    <div className={'main-container'}>
      <img src={logo}/>
      <Calculator />
    </div>
  )
}

export default App
