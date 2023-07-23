import React from 'react'
import "./Navbar.css";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <div className={`topnav ${props.mode}`}>
      <div>
      <Link className="active" to="/">{props.title}</Link>
  <Link to="/about" >News</Link>
  <Link to="/about" >{props.name}</Link>
  <Link to="/about" >About</Link>

      </div> 
      <div id="switching">
      <button className="button-27 success" onClick={()=>{props.toggleMode('#04AA6D')}} id="knegi"></button>
      <button className="button-27 info" onClick={()=>{props.toggleMode('#2196F3')}} id="knegi"></button>
      <button className="button-27 warning" onClick={()=>{props.toggleMode('#ff9800')}} id="knegi"></button>
      <button className="button-27 danger" onClick={()=>{props.toggleMode('#ff3300')}} id="knegi"></button>

      <label className="switch">

  <input type="checkbox" onClick={()=>{props.toggleMode(null)}}/>
  <span className="slider round"></span>
</label>
      </div>
</div>
    </div>
  )
}
Navbar.propTypes={
 title: PropTypes.string.isRequired,
 name: PropTypes.string,
}
Navbar.defaultProps={
  title:'kashishIsTheKing',
  name: 'tatiChat'
}