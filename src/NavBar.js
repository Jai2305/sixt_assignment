import React from 'react' ;
import "./NavBar.css" ;
import {Link} from  'react-router-dom' ;
const NavBar =()=> {
return(    
    <div id="nav" >
        <div id="title"> My Reservations App</div>
        <ul id="menu">
        <li> Home</li>
        <li> My Reservations </li>
        <li> Reservations Details </li>
        <li> My Profile </li>
        </ul>
    </div>
)   
}
export default NavBar ;
