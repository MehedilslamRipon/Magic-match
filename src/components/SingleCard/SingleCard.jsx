// dependencies
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
   // handle click
   const handleClick = () => {
      if (!disabled) {
         handleChoice(card);
      }
   };

   return (
      <div className="card">
         <div className={flipped ? 'flipped' : ''}>
            <img src={card.src} alt="front" className="front-img" />
            <img
               src="img/cover.png"
               alt="cover"
               className="cover-img"
               onClick={handleClick}
            />
         </div>
      </div>
   );
};

export default SingleCard;
