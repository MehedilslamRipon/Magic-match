// dependencies
import './SingleCard.css';

const SingleCard = ({ card }) => {
   return (
      <div className="card">
         <img src={card.src} alt="front" className="front-img" />
         <img src="img/cover.png" alt="cover" className="cover-img" />
      </div>
   );
};

export default SingleCard;
