import '../../css/App.css';
import { Link } from "react-router-dom";

function GameItem({ game }) {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item">
        <Link to={`/details/${game.id}`} key={game.id}><img src={game.background_image} alt={game.name} /></Link>
        <h4>{game.name.substring(0, 20)}<br /></h4>
        <ul>
          <li><i className="fa fa-star"></i> {game.rating}</li>
          <li><i className="fa fa-download"></i> {game.added}</li>
        </ul>
      </div>
    </div>
  );
}

export default GameItem;