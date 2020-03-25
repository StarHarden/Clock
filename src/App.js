import React from 'react';
import './App.css';

//const secondHand = document.querySelector('.second-hand');
//const minsHand = document.querySelector('.min-hand');
//const hourHand = document.querySelector('.hour-hand');


function App() {
  
    function setDate() {
const now = new Date();

const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`

const mins = now.getMinutess();
const minsDegrees = ((mins / 60) * 360) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`

const hour = now.getMinutes();
const hoursDegrees = ((mins / 12) * 360) + 90;
hourHand.style.transform = `rotate(${minsDegrees}deg)`
}
setInterval(setDate, 1000);
return (
      <>
          <div class="clock">
            <div class="clock-face">
              <div class="hand hour-hand"></div>
              <div class="hand min-hand"></div>
              <div class="hand second-hand"></div>
              <div class="number number1">1</div>
              <div class="number number2">2</div>
              <div class="number number3">3</div>
              <div class="number number4">4</div>
              <div class="number number5">5</div>
              <div class="number number6">6</div>
              <div class="number number7">7</div>
              <div class="number number8">8</div>
              <div class="number number9">9</div>
              <div class="number number10">10</div>
              <div class="number number11">11</div>
              <div class="number number12">12</div>
            </div>
          </div>
        
      </>
  );
}

export default App;
