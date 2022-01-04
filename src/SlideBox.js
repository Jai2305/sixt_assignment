import React from 'react' ;
import './SlideBox.css' ;
import Volvo from './img/Volvo.jpg' ;
import Electric from './img/Electric.jpg' ;
import Bugati from './img/Bugati.jpg' ;
const SlideBox =()=>{
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides)
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
    return(
        <div id="slide-box">
            <div className="slideshow-container">
                <div className="mySlides">
                <div className="numbertext">1 / 3</div>
                <img src={Volvo} alt='text'/>
                <div className="text">Caption Text</div>
                </div>

                <div className="mySlides">
                <div className="numbertext">2 / 3</div>
                <img src={Bugati} alt="text"/>
                <div className="text">Caption Two</div>
                </div>

                <div className="mySlides">
                <div className="numbertext">3 / 3</div>
                <img src={Electric} alt='text'/>
                <div className="text">Caption Three</div>
                </div>

                <a className="prev" href='#slide-box' onClick={plusSlides(-1)}>&#10094;</a>
                <a className="next" href='#slide-box' onClick={plusSlides(1)}>&#10095;</a>

                </div>
                <br/>

                <div style={{"text-align":"center"}}>
                <span className="dot" onClick={currentSlide(1)}></span> 
                <span className="dot" onClick={currentSlide(2)}></span> 
                <span className="dot" onClick={currentSlide(3)}></span> 
                </div>
        </div>
    )
}

export default SlideBox ;