import React from 'react' ;
import './SlideBox.css' ;
import Volvo from './img/Volvo.jpg' ;
import Electric from './img/Electric.jpg' ;
import Bugati from './img/Bugati.jpg' ;
const img= [Volvo,Bugati,Electric] ;
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function SlideBox() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div >
      <p id="welcome-message">Besides a range of cars to choose from, Reservation app also offers its users a choice 
        of flexible tariff plans. Pick a plan keeping in mind your requirement to make the
         most of every booking. If you are looking for a vehicle to commute to work or college,
          the Reservation app commute is the right plan for you. Travel alone, or carpool with your friends, 
          sharing the cost of rental for maximum savings. Pune is central to several tourist destinations, 
          the most popular among which are Lonavla and Khandala. Make every weekend fun with a self-drive
           car rental to a new destination. Reservation app not only ensures freedom safety and privacy but also 
           comes with features which are designed to ensure a hassle free ride. 
      </p>
    <div className="slideshow">
      
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ><img src={img[index]} alt="img"/> </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          > </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SlideBox