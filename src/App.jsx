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

   const [disabled, setDisabled] = useState(false);

   // shuffle cards
   const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);

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
         setDisabled(true);

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
            setTimeout(() => resetTurn(), 1000);
         }
      }
   }, [choiceOne, choiceTwo]);

   // start game automatically
   useEffect(() => {
      shuffleCards();
   }, []);

   // reset turns and increase turn
   const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);

      setTurns((prevTurn) => prevTurn + 1);
      setDisabled(false);
   };

   return (
      <div className="App">
         <h1>Magic Match</h1>
         <button onClick={shuffleCards}>New Game</button>
         <p className="turns"> Turns: {turns} </p>
         <div className="card-grid">
            {cards.map((card) => (
               <SingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                     card === choiceOne || card === choiceTwo || card.matched
                  }
                  disabled={disabled}
               />
            ))}
         </div>

         {/* credit */}
         <div className="dev-credit">
            <p>
               {' '}
               &copy;{' '}
               <a
                  style={{ textDecoration: 'none', color: '#7b7bb4' }}
                  href="https://facebook.com/mehediislamripon"
               >
                  Mehedi Islam Ripon
               </a>{' '}
            </p>
         </div>
      </div>
   );
}

export default App;
