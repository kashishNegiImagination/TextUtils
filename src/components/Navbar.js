import React from 'react'
import "./Navbar.css";
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <div className={`topnav ${props.mode}`}>
      <div>
      <a className="active" href="#">{props.title}</a>
  <a href="#" >News</a>
  <a href="#" >{props.name}</a>
  <a href="#" >About</a>

      </div> 
      <div id="switching">
      <button className="button-27" id="knegi">Button 27</button>

      <label className="switch">

  <input type="checkbox" onClick={props.toggleMode}/>
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