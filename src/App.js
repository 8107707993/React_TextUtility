import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aboutus from './components/Aboutus';


function App() {
  
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  document.body.style.backgroundColor=mode === 'dark'?'#495057':'#e8edf3'

  const showAlert =(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#495057'
      showAlert("Dark mode has been enabled","success");
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor='#e8edf3'
    showAlert("Light mode has been enabled","success");
    }
  }
  return (
    
  < >
  
  <Router>
   <Navbar title="Bloger" mode ={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <Switch>
          <Route exact path="/aboutus"> 
           <Aboutus mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <Textform mode={mode} showAlert={showAlert}/> 
          </Route>
        </Switch>
       
   </Router>
 
</>
  );
}

export default App;
