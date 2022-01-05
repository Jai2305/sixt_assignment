import React from 'react' ;
import './ViewReservations.css'
import Data from './data/reservations.json' ;
import Lambo from'./img/Lambo.jpg' ;
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
  
  class ViewReservations extends React.Component {
    render () {
        let reservations= Data.reservations ;
        let cardsData= reservations.map(data =>{
            return(
                {id:data.reservationid, channel:data.bookingChannel,start:data.trip.time.start,end:data.trip.time.end,pick:data.trip.location.from ,destination:data.trip.location.to ,imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD86k8ZxWNSwX-J9Ks3RaNC2Lt5H6OakPuiw&usqp=CAU'}
            )
        })
    //   const cardsData = [
    //     {id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200'},
    //     {id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200'},
    //     {id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201'},
    //     {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201'},
    //     {id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200'},
    //     {id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199'},
    //     {id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199'},
    //     {id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200'},
    //     {id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198'},
    //     {id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199'},
    //   ]
      
      return(
        <div className="container-vr">
          <h1 style={{ 'text-align': 'center' ,"color":"grey"}}>
            Reservations Details
          </h1>
          
          <CardContainer cards={ cardsData } />
        </div>
      );
    }
  }
export default ViewReservations ;

