
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState('default');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    },1000)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color='white';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';

    }
  }
  const themeMode = (color) =>{
    console.log(color)
    // setTheme(color);
    if(color==='green'){
      document.body.style.backgroundColor = '#008000';
      document.body.style.color='#fff';
      setTheme(color);
      showAlert('Theme Color Changed!', 'success');
    } else if(color === 'red'){
      document.body.style.backgroundColor = '#e12424';
      document.body.style.color='#fff';
      setTheme(color);
      showAlert('Theme Color Changed!', 'success');
    } else if(color==='blue'){
      document.body.style.backgroundColor = '#1E90FF';
      document.body.style.color='#fff';
      setTheme(color);
      showAlert('Theme Color Changed!', 'success');
    } else if(color==='purple'){
      document.body.style.backgroundColor = '#8B008B';
      document.body.style.color='#fff';
      setTheme(color);
      showAlert('Theme Color Changed!', 'success');

    } else if(color==='yellow'){
      document.body.style.backgroundColor = '#FFEA00';
      document.body.style.color='#000';
      setTheme(color);
      showAlert('Theme Color Changed!', 'success');
    }
  }
  return (
   <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} theme={theme} themeMode={themeMode}/>
      <Alert alert={alert}/>
          <Routes>
              <Route exact path ="/" element={<TextForm heading="Enter The Text Here" mode={mode} theme={theme} showAlert={showAlert} />} />
              <Route exact path ="/about" element={<About />} />
          </Routes>
   </Router>
   
   </>
  );
}
export default App;
