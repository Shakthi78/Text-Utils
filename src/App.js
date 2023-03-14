// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import Alert from "./components/Alert";

// import {
//   Route,
//   Routes,
//   BrowserRouter
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const toggleGreen = ()=>{
    setMode('success')
    document.body.style.backgroundColor = 'green'
  }
  const toggleRed = ()=>{
    setMode('danger')
    document.body.style.backgroundColor = 'red'
  }
  const toggleYellow = ()=>{
    setMode('warning')
    document.body.style.backgroundColor = 'yellow'
  }

  const toggleMode = ()=>{
    if(mode === 'light' ){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled','success')
      // document.title='Text utils | Dark Mode'
      setInterval(() => {
        document.title('Text Util is Amazing')
      }, 3000);
      setInterval(() => {
        document.title('Install Something')
      }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')

    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      showAlert();
    }, 3000);
    // setInterval(() => {
    //   showAlert();
    // }, 3000);
  }

  return (
    <>
    
      {/* <Navbar /> */}
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} toggleYellow={toggleYellow} toggleRed={toggleRed}/>
      <Alert alert={alert} />
      <div className="container my-3" >
      {/* <Routes>
          <Route path="/about" element={<About />}>
            
          </Route> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode}/>}> 
            
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter your text" mode={mode}/>
      </div>
      {/* </BrowserRouter>    */}
    
    </>
  );
}

export default App;
