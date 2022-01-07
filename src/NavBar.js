import React from 'react' ;
import "./NavBar.css" ;
import {Link} from  'react-router-dom' ;
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
const NavBar =()=> {

return(    
    <div id="nav" >
        <div id="title"> My Reservations App</div>
        <div className="navigation" >
        <li  id="3">
            <Link to="/myp" style={{"textDecoration":"none",}}>
            <span class="icon">
                <ion-icon name="person-outline"></ion-icon>
            </span>
            </Link>
            <p class="icon-description">Profile</p>    
        </li>
        <li  id="1">
            <Link to="/home" style={{"textDecoration":"none",}}>
            <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
            </span>
            </Link>
            <p class="icon-description">Home</p>
        </li>

        <li  id="2">
            <Link to="/myr" style={{"textDecoration":"none",}}>
            <span class="icon">
                <ion-icon name="car-outline"></ion-icon>
            </span>
            </Link>
            <p class="icon-description">Reservations</p>
        </li>

    </div>
    </div>
)   
}
export default NavBar ;