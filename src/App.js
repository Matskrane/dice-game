import './App.css';
import { useState } from 'react';

import DiceImage1 from "./images/Dice1.png";
import DiceImage2 from "./images/Dice2.png";
import DiceImage3 from "./images/Dice3.png";
import DiceImage4 from "./images/Dice4.png";
import DiceImage5 from "./images/Dice5.png";
import DiceImage6 from "./images/Dice6.png";

const diceImages = [
  DiceImage1,
  DiceImage2,
  DiceImage3,
  DiceImage4,
  DiceImage5,
  DiceImage6,
]

function App() {
  const [image, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }

  return (
    <div className="container">
      <h1>Dice Game</h1>
      <div>  
      <img src={image} className='dices'></img>
      <div className='inline-block'></div>
      <img src={image2} className='dices'></img>
      </div>

      <div className='button-container'>
        <button onClick={rollDice}>Toss Dices</button>
      </div> 


    </div>
  );
}

export default App;
