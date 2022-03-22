import { useState } from 'react';
import './App.css';

const cardImages = [
   { src: '/img/helmet-1.png' },
   { src: '/img/potion-1.png' },
   { src: '/img/ring-1.png' },
   { src: '/img/scroll-1.png' },
   { src: '/img/shield-1.png' },
   { src: '/img/sword-1.png' },
];

function App() {
   // states
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);

   // shuffle cards
   const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({ ...card, id: Math.random() }));

      // set shuffled card values
      setCards(shuffledCards);

      // reset the turns value
      setTurns(0);
   };

   return (
      <div className="App">
         <h1>Magic Match</h1>
         <button onClick={shuffleCards}>New Game</button>

         <div className="card-grid">
            {cards.map((card) => (
               <div className="card">
                  <img src={card.src} alt="front" className="front-img" />
                  <img src="img/cover.png" alt="cover" className="cover-img" />
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
