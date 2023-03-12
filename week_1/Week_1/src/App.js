import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import React,{useState} from 'react';
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
  return (
    <div className="App">
      <div className='hello'>
        <h2> TATVASOFT  </h2>
        <hr />
        <button className='btn-primary' onClick={HandlePageChange}>Change Page</button>
        { (Page==="Home")?
          <Home />:<About />
        }
        <hr />
      </div>
    </div>
  );
}
export default App;
