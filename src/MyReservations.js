import React,{useState} from 'react' ;
import Data from './data/reservations.json' ;
import "./MyReservations.css" ;

let defaultDisplay=Data.reservations ;     
function filterFunc(arr){
    let buttons = document.getElementsByClassName("flowrino-btn") ;
    console.log(arr)
    // console.log(buttons[0].innerHTML)
    // console.log(arr.trip.time.start,arr.trip.time.end,arr.trip.location.from,arr.trip.location.to,arr.bookingChannel)
    // console.log(buttons[0].innerHTML,buttons[1].innerHTML,buttons[2].innerHTML,buttons[3].innerHTML,buttons[4].innerHTML)

    if(buttons[0].innerHTML!=="Start Date" && arr.trip.time.start !==buttons[0].innerHTML){ console.log("executed0") ;return false}
    if(buttons[1].innerHTML!=="End Date" && arr.trip.time.end!==buttons[1].innerHTML){console.log("executed1");return false}
    if(buttons[2].innerHTML!=="From Location" && arr.trip.location.from!==buttons[2].innerHTML){console.log("executed2");return false}
    if(buttons[3].innerHTML!=="To Location" && arr.trip.location.to!==buttons[3].innerHTML){console.log("executed3") ;return false}
    if(buttons[4].innerHTML!=="Booking Channel" && arr.bookingChannel!==buttons[4].innerHTML){console.log("executed4") ;return false}
    return true
}
const Filter = (props)=>{
    
    const [value,setValue]=useState(props.criteria) 
    const stateValue= (variable)=>{
        setValue(variable)
    }
    let arr=[] ;
    if(props.criteria==="Start Date"){arr=Data.reservations.map(data=>{return(data.trip.time.start )})}
    else if(props.criteria==="End Date"){arr=Data.reservations.map(data=>{return(data.trip.time.end )})}
    else if(props.criteria==="From Location"){arr=Data.reservations.map(data=>{return(data.trip.location.from )})}
    else if(props.criteria==="To Location"){arr=Data.reservations.map(data=>{return(data.trip.location.to )})}
    else if(props.criteria==="Booking Channel"){ arr=Data.reservations.map(data=>{return(data.bookingChannel )})}
    //removing duplicates
    let count=0
    arr=arr.filter(ele=>{
        if (arr.indexOf(ele)===count++){return ele ;}
    })
    return(
        <div className="filter">
        <button className="flowrino-btn" id="props.criteria">{value}</button>
        <div className="filter-list">
        { arr.map(ele=>{return(<div key={ele} className={Data.reservations.reservationId} onClick={()=>{stateValue(ele) ;}}>{ele}</div>)}) }
        <div onClick={()=>{stateValue(props.criteria) ;}}>clear</div>
        </div>
        </div>
    )

}
const MyReservations = ()=>{
    const [display,setDisplay]=useState(defaultDisplay)
    const stateDisplay = ()=>{
        setDisplay(defaultDisplay.filter(filterFunc))
    }
    //console.log(display)
    return(
        <div id="reservation-content">
            <div id="filters">
            <Filter criteria='Start Date'/>
            <Filter criteria='End Date'/>
            <Filter criteria='From Location'/>
            <Filter criteria='To Location'/>
            <Filter criteria='Booking Channel'/>
            <button className="flowrino-btn" onClick={stateDisplay} id="filter-btn">Filter</button> 
            </div>
            <table className='table-fill'>
                <thead>
                <tr>
                    <th className='text-left'>Start Date</th>
                    <th className='text-left'>End Date</th>
                    <th className='text-left'>From Location</th>
                    <th className='text-left'>To Location</th>
                    <th className='text-left'>Booking Channel</th>
                </tr>
                </thead>
                <tbody>
                {display.map(data =>{
                    return(
                        <tr key={data.reservationId}>
                            <td className='text-left'>{data.trip.time.start }</td>
                            <td className='text-left'>{data.trip.time.end}</td>
                            <td className='text-left'>{data.trip.location.from }</td>
                            <td className='text-left'>{data.trip.location.to }</td>
                            <td className='text-left'>{data.bookingChannel }</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            <div style={{"height":"30px"}}></div>
        </div>
    )
}

export default MyReservations ;