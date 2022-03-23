import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard/SingleCard';

const cardImages = [
   { src: '/img/helmet-1.png', matched: false },
   { src: '/img/potion-1.png', matched: false },
   { src: '/img/ring-1.png', matched: false },
   { src: '/img/scroll-1.png', matched: false },
   { src: '/img/shield-1.png', matched: false },
   { src: '/img/sword-1.png', matched: false },
];

function App() {
   // states
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);

   const [choiceOne, setChoiceOne] = useState(null);
   const [choiceTwo, setChoiceTwo] = useState(null);

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

   // handle choices
   const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   };

   // compare selected cards
   useEffect(() => {
      if (choiceOne && choiceTwo) {
         if (choiceOne.src === choiceTwo.src) {
            setCards((prevCards) => {
               return prevCards.map((card) => {
                  if (card.src === choiceOne.src) {
                     return { ...card, matched: true };
                  } else {
                     return card;
                  }
               });
            });

            resetTurn();
         } else {
            console.log('cards are not same');
            resetTurn();
         }
      }
   }, [choiceOne, choiceTwo]);

   // reset turns and increase turn
   const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);

      setTurns((prevTurn) => prevTurn + 1);
   };

   return (
      <div className="App">
         <h1>Magic Match</h1>
         <button onClick={shuffleCards}>New Game</button>

         <div className="card-grid">
            {cards.map((card) => (
               <SingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
               />
            ))}
         </div>
      </div>
   );
}

export default App;
