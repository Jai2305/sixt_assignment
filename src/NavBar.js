import React from 'react' ;
import "./NavBar.css" ;
import {Link} from  'react-router-dom' ;
const NavBar =()=> {

return(    
    <div id="nav" >
        <div id="title"> My Reservations App</div>
        <ul id="menu">
        <Link to="/home" style={{"textDecoration":"none","color":"rgba(6, 121, 175, 0.849)"}}><li> Home</li></Link>
        <Link to="/myr" style={{"textDecoration":"none","color":"rgba(6, 121, 175, 0.849)"}}><li> My Reservations </li></Link>
        <Link to="/" style={{"textDecoration":"none","color":"rgba(6, 121, 175, 0.849)"}}><li> Reservations Details </li></Link>
        <Link to="/myp"style={{"textDecoration":"none","color":"rgba(6, 121, 175, 0.849)"}}><li> My Profile </li></Link>
        </ul>
    </div>
)   
}
export default NavBar ;
