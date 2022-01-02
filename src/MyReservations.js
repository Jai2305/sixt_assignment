import React from 'react' ;
import Data from './data/reservations.json' ;
import "./MyReservations.css" ;

const Filter = (props)=>{
    let arr=[] ;

    if(props.criteria=="Start Date"){arr=Data.reservations.map(data=>{return(data.trip.time.start )})}
    else if(props.criteria=="End Date"){arr=Data.reservations.map(data=>{return(data.trip.time.end )})}
    else if(props.criteria=="From Location"){arr=Data.reservations.map(data=>{return(data.trip.location.from )})}
    else if(props.criteria=="To Location"){arr=Data.reservations.map(data=>{return(data.trip.location.to )})}
    else if(props.criteria=="Booking Channel"){ arr=Data.reservations.map(data=>{return(data.bookingChannel )})}
    //removing duplicates
    let count=0
    arr=arr.filter(ele=>{
        if (arr.indexOf(ele)==count++){return ele ;}
    })
    return(
        <div className="filter">
        <button className="filter-button" >{props.criteria}</button>
        <div className="filter-list">
        { arr.map(ele=>{return(<div className={Data.reservations.reservationId}>{ele}</div>)}) }
        </div>
        </div>
    )
    

}
const MyReservations = ()=>{
    return(
        <div>
            <h1>Filter By</h1>
            <div id="filters">
            <Filter criteria='Start Date'/>
            <Filter criteria='End Date'/>
            <Filter criteria='From Location'/>
            <Filter criteria='To Location'/>
            <Filter criteria='Booking Channel'/>
            </div>
        </div>
    )
}
export default MyReservations ;