import "../../css/App.css";
import { Link } from "react-router-dom";

function GameDetails({ game }) {
    const additionalImage = game.background_image_additional !== null && ''
    ? game.background_image_additional 
    : game.developers[0].image_background;
    const video = game.metacritic_url !== null && ''
    ? game.metacritic_url 
    : game.reddit_url;
    const website = game.website !== null && ''
    ? game.website
    : game.reddit_url;

  return (
    <div className="row">
      <div className="col-lg-4">
        <Link to={website}>
          <img src={game.background_image} alt={game.name} style={{borderRadius: "23px", width: "370px", height: "305px"}} />
        </Link>
      </div>
      <div className="col-lg-8">
        <div className="thumb">
          <img src={additionalImage} alt={game.name} style={{borderRadius: "23px"}} />
          <Link to={video}><i className="fa fa-play"></i></Link>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;