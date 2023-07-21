
import "./App.css";
import Navbar from "./components/Navbar";
import TextConvert from "./components/TextConvert";
import Alert from "./components/Alert";
import { useState } from "react";
// import About from "./components/About";
import React from "react";
// import {Route, Routes} from 'react-router-dom';

function App() {  
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);
 const showAlert=(type , message)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode= ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#043743";
      showAlert("success" , "dark mode enabled by kashish negi");
      document.title="TextUtils-DarkMode";

      // setInterval(() => {
      //   document.title="you are a monster";
      // }, 2000);
      // setInterval(() => {
      //   document.title="fuck you!";
      // },1599)
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("info" , "light mode enabled by kashish don");
      document.title="TextUtils-LightMode";
    }
  }
  return (
    <>

 <div>
    <Alert alert={alert}/>
    <Navbar  name="negi" mode={mode} toggleMode={toggleMode}/>
    </div>
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<TextConvert showAlert={showAlert} headingg="Enter the text" mode={mode}/>} /> */}
    {/* </Routes> */}
    <TextConvert showAlert={showAlert} headingg="Enter the text" mode={mode}/>


     </>
  );
}

export default App;
