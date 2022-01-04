import React from 'react';
import NavBar from './NavBar';
import Home from './Home' ;
import MyProfile from './MyProfile';
import MyReservations from './MyReservations' ;
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' ;
import Footer from './Footer' ;
import SlideBox from './SlideBox';
const App = ()=> {
    return (
        <div>
        <Router>
        <div>
            <NavBar/>
        <Switch>
            <Route path='/myp' exact component={MyProfile}/>
            <Route path='/home' component={Home}/>
            <Route path='/myr' component={MyReservations}/>
            <Route path='/sb' component={SlideBox}/>
        </Switch>
        </div>
        </Router>
        <Footer/>
        {/* <SlideBox/> */}
        </div>
      
    )   
}
export default App ;
