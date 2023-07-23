import React from 'react'
import "./Alert.css";

export default function Alert(props) {

  var close = document.getElementsByClassName("closebtn");
  var i;
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function(){ div.style.display = "none"; }, 600);
    }
  }
  const capitalize=(word) =>{
    let lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

    // let parentElement=document.getElementsByClassName('alert');
  return (
    <div style={{height:'50px'}}>
    {props.alert &&
    <>
 <div>
    <div className={`alert ${props.alert.type}`}>
    <span className="closebtn">&times;</span>  
    <strong>Danger!</strong> {capitalize(props.alert.msg)}
  </div>
    </div>
 
</> 
    }
</div> 
  )
}


