import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import React,{useState} from 'react';
import Register from './components/loginForm'
function App() {
  const [Page, setHomePage] = useState('Home')
  function HandlePageChange() {

    (Page === 'Home')? setHomePage('About'):setHomePage('Home')

  //  { if (Page == 'Home') {
  //     setHomePage('About')
  //   }
  //   else {
  //     setHomePage('Home')
  //   }}
  }
  function HandleRegister(){
      setHomePage('Register')
  }
  return (
    <div className="App">
      <div className='hello'>
        <h2> TATVASOFT  </h2>
        <hr />
        <button className='btn-primary' onClick={HandlePageChange}>Change Page</button>
        <button className='btn-primary' onClick={HandleRegister}>Register</button>
        { (Page==="Home")?
          <Home />:(Page==="About")?<About />:<Register/>
        }
        <hr />
      </div>
    </div>
  );
}
export default App;
