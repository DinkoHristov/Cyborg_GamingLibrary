import '../../css/App.css';
import { Link } from 'react-router-dom';
import { useGameContext } from '../../contexts/GameContext';
import GameLibraryItem from './GameLibraryItem';

function GamingLibrary() {
    const { downloaded } = useGameContext();

    if (downloaded.length > 0) {
        return (
        <div className="gaming-library profile-library">
            <div className="col-lg-12">
                <div className="heading-section" style={{ textAlign: "center" }}>
                    <h4>
                        <em>Your Gaming</em> Library
                    </h4>
                </div>
                {downloaded.map(game => <GameLibraryItem game={game} key={game.id} />)}
            </div>
        </div>
        );
    }

    return (
        <div className="gaming-library profile-library">
            <div className="col-lg-12">
                <div className="heading-section" style={{ textAlign: "center" }}>
                    <h4>
                        <em>Your Gaming</em> Library
                    </h4>
                </div>
                <div className="item" style={{ textAlign: "center" }}>
                    <h4>No Downloaded Games Yet!</h4>
                    <h3>Find the best games for you <Link to='/games' style={{ color: "#F5F5DD", cursor: "pointer" }}>here</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default GamingLibrary;