import './App.css'
import logo from './assets/images/logo.svg';
import Calculator from './components/Calculator/Calculator';

function App() {

  return (
    <div className='main-container'>
      <img src={logo} className='logo' alt='logo'/>
      <Calculator />
    </div>
  )
}

export default App
