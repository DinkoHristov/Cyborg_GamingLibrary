import '../../css/App.css';
import { Link } from "react-router-dom";

function GameItemTemplate({ game }) {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item">
        <div className="thumb">
          <img src={game.background_image} alt={game.name} style={{width: "246px", height: "138px"}} />
          <div className="hover-effect">
            <div className="content">
              <div className="live">
                <Link to={`/details/${game.id}`}>
                  <i className="fa fa-eye"></i> {game.added}
                </Link>
              </div>
              <ul>
                <li>
                    <Link to={`/details/${game.id}`}>
                        <i className="fa fa-gamepad"></i> {game.name}
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="down-content">
          <span>
            <i className="fa fa-circle"></i> {game.released}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameItemTemplate;