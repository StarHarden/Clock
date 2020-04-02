import React, { useRef } from 'react';
import './App.css';

function App() {

  const secondHand = useRef (null);
  const minsHand = useRef (null);
  const hourHand = useRef (null);

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    if (secondHand.current !== null) {
      secondHand.current.style.backgroundColor =
      `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
      secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`
    }

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;

    if (minsHand.current !== null) {
      minsHand.current.style.transform = `rotate(${minsDegrees}deg)`
    }

    const hoursDegrees = ((mins / 12) * 360) + 90;

    if (hourHand.current !== null) {
      hourHand.current.style.transform = `rotate(${hoursDegrees}deg)`
    }
  }
  setInterval(setDate, 1000);

  return (
      <>
          <div className="clock">
            <div className="clock-face">
              <div ref={hourHand} class="hand hour-hand"></div>
              <div ref={minsHand} class="hand min-hand"></div>
              <div ref={secondHand} class="hand second-hand"></div>
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
