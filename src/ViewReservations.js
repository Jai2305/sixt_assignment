import React from 'react' ;
import './ViewReservations.css'
import MyReservations from'./MyReservations' ;
import Data from './data/reservations.json' ;
const View = (props) => (
    <div className="card-vr">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      <div className="card-vr-content">
        <h3>{ props.id }</h3>
        <h3>{ props.channel }</h3>
        <h3>{ props.start }</h3>
        <h3>{ props.end }</h3>
        <h3>{ props.pick }</h3>
        <h3>{ props.destination }</h3>
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <View id={ card.id }
            channel={ card.channel }
            start={card.start}
            end={card.end}
            pick={card.pick}
            destination={card.destination}
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );
//   <MyReservations style={{"display":"none"}}/>
//   console.log(document.getElementById('filter-btn')) ;
  const ViewReservations =(props)=> {
      let selectedElements=document.getElementsByClassName("select")
      let ids=[]
      for(let i=0;i<selectedElements.length;i++){
          ids.push(selectedElements[i].id)
      }
        let reservations= Data.reservations ;
        if(ids.length){
            reservations=reservations.filter(function(value){return ids.includes((value.reservationId).toString())})
        }

        let cardsData= reservations.map(data =>{
            return(
                {id:data.reservationId, channel:data.bookingChannel,start:data.trip.time.start,end:data.trip.time.end,pick:data.trip.location.from ,destination:data.trip.location.to ,imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD86k8ZxWNSwX-J9Ks3RaNC2Lt5H6OakPuiw&usqp=CAU'}
            )
            })
      return(
        <div className="container-vr">
          <h1 style={{ 'textAlign': 'center' ,"color":"grey", "position":"fixed","top":"150px","left":"40%"}}>
            Reservations Details
          </h1>   
          <CardContainer cards={ cardsData } />
        </div>
      );
    }

export default ViewReservations ;

