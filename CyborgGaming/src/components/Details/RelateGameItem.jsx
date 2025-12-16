import { Link } from "react-router-dom";
import "../../css/App.css";

function RelateGameItem({ game }) {
    return (
    <div className="col-lg-6">
        <div className="item">
            <Link to={`/details/${game.id}`}>
                <img src={game.background_image} alt={game.name} className="templatemo-item" key={game.id} />
            </Link>
            <h4>{game.name}</h4>
            <ul>
            <li><i className="fa fa-star"></i> {game.rating}</li>
            <li><i className="fa fa-download"></i> {game.added}</li>
            </ul>
        </div>
    </div>
    );
}

export default RelateGameItem;