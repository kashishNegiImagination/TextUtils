
import "./App.css";
import Navbar from "./components/Navbar";
import TextConvert from "./components/TextConvert";
import Alert from "./components/Alert";
import { useState } from "react";
import About from "./components/About";
import React from "react";
import {Route, Routes} from 'react-router-dom';

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
  const toggleMode= (cls)=>{
    console.log(cls);
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
    else if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("info" , "light mode enabled by kashish don");
      document.title="TextUtils-LightMode";
    }
  
    
      if(cls==="#04AA6D"){
        document.body.style.backgroundColor = "#04AA6D";
      }
      if(cls==="#2196F3"){
        document.body.style.backgroundColor= "#2196F3";
      }
      if(cls==="#ff9800"){
        document.body.style.backgroundColor= "#ff9800";
      }
      if(cls==="#ff3300"){
        document.body.style.backgroundColor= "#ff3300";
      }
    }
    // let body=document.getElementById('body').style.color;
  return (
    <>

<div id="body">
   
    <Navbar  name="negi" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    </div>
    <Routes>
          <Route exact path="/about" element={<About />} />
          <Route path="/" element={<TextConvert showAlert={showAlert} headingg="Enter the text" mode={mode}/>} />
    </Routes>



     </>
  );
}

export default App;
