import '../../css/App.css';
import { Link } from 'react-router-dom';

function GameLibraryItem({ game }) {
    return (
        <div className="item">
            <ul>
                <li>
                    <img src={game.background_image} alt={game.name} className="templatemo-item" />
                </li>
                <li>
                    <h4>{game.name}</h4>
                </li>
                <li>
                    <h4>Date Added</h4>
                    <span>{new Date(game.updated).toISOString().slice(0, 10)}</span>
                </li>
                <li>
                    <h4>Total Downloads</h4>
                    <span>{game.added}</span>
                </li>
                <li>
                    <h4>Currently</h4>
                    <span>Downloaded</span>
                </li>
                <li>
                    <div className="main-border-button border-no-active">
                        <Link to={`/details/${game.id}`}>Downloaded</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default GameLibraryItem;