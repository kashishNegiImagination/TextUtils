import React,{useState} from 'react'

import "./TextConvert.css"

export default function TextConvert(props) {
// const [myStyle,setMyStyle] = useState({
//     color:'black',
//     backgroundColor:'white'
//   })
  
// // const [themeChange,setThemeChange]=useState("Turn to Dark mode")
// const toggle= ()=>{
//       if(myStyle.color==='white') {
//         setMyStyle({
//           color:'black',
//           backgroundColor:'white'
//         })
//         setThemeChange("Turn to Dark mode")

//       }
//       else{
//         setMyStyle({
//           color:'white',
//           backgroundColor:'black'
//         })
//         setThemeChange("Turn to Light mode")

//       }
// }

const changeCopy=()=>{
  var text= document.getElementById('negi');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert('alert' , 'Text is coppied');

}
 const changeHandler= (event)=>{
          console.log("changeHandler onChange");
          // console.log(event);
          // console.log(text);
          setText(event.target.value);
  }
  const lowClick= () =>{
    let fewText=text.toLowerCase();
    setText(fewText);
    props.showAlert('info' , 'text is converted to lower case');

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('success' , 'Text is speaking WTF?');

  }
  const handleReverse = () => {
    let strArr = text.split(" ");
    strArr = strArr.reverse();
    let newText = strArr.join(" ");
    setText(newText);
    props.showAlert('warning' , 'text is reversed');

  };
  const handleRemoveSpace = () =>{
    let newTEXT= text.split(/[ ]+/);
    setText(newTEXT.join(' '))
    props.showAlert('alert' , 'spaces has been removed');

  }
  
 const upClick = () =>{
          // console.log("Clicked on the button");
          // console.log(text);
          let newText= text.toUpperCase();
          setText(newText);
          props.showAlert('warning' , 'Text is converted to upper case');
  }
    const [text,setText]=useState("IDHAR LIKH BE...");
  return ( 
    <>
    <div>
    {/* <div>
    <button className="button-50" onClick={toggle}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >{themeChange}</button>
    </div> */}
 <div id='ram'>
    <h1 style={{color: props.mode==='light' ? '#042743' : 'white'}} >{props.headingg}</h1>
      <textarea  name="kashsih" id="negi" cols="30" rows="10" value={text} onChange={changeHandler} style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}></textarea>
      <button className="button-50"   onClick={upClick}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >ToUpperCase</button>
      <button className="button-50"   onClick={lowClick}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >ToLowerCase</button>
      <button className="button-50"   onClick={speak}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >Speak</button>
      <button className="button-50"   onClick={handleReverse}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >Reverse</button>
      <button className="button-50"   onClick={changeCopy}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >Copy</button>
      <button className="button-50"   onClick={handleRemoveSpace}    style={{backgroundColor: props.mode==='light'? 'white' : '#042743', color: props.mode==='light' ? '#042743' : 'white'}}  >RemoveSpaces</button>



      <h2>{props.h2}</h2>
      <p>Word length: {text.split(" ").length} and Character Length: {text.length}</p>
      <p>How much time it take to read: {Math.round((0.18 )*(text.length))} seconds ,  {Math.round(((0.18 )*(text.length))/60)} minutes</p>


    </div>
    </div>
    </>
  )

}
