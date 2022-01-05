import React from 'react' ;
import './Footer.css' ;
import {Link} from  'react-router-dom' ;
const Footer=()=>{
    return(
        <div id="footer">
            <Link to="/vr"><button>View Reservation</button></Link>
        </div>
    )
}
export default Footer ;