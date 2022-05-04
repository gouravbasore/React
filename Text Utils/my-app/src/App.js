import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
   setAlert({
     message: message,
     type: type})
     setTimeout(()=>{
       setAlert(null);
     },1500);
  }

  const toogleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode={mode} toogleMode={toogleMode}/>
    <Alert alert= {alert}/> 
    <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}

          {/* <Route exact path="/"> */}
          <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route>
        </Switch> */}

    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
