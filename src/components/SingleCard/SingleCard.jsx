// dependencies
import './SingleCard.css';

const SingleCard = ({ card, handleChoice }) => {
   // handle click
   const handleClick = (hello) => {
      handleChoice(card);
   };

   return (
      <div className="card">
         <img src={card.src} alt="front" className="front-img" />
         <img
            src="img/cover.png"
            alt="cover"
            className="cover-img"
            onClick={handleClick}
         />
      </div>
   );
};

export default SingleCard;
