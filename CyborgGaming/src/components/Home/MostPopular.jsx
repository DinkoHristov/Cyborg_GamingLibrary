import '../../css/App.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopEightGames } from "../../services/api/games";
import PreLoader from './PreLoader';
import GameItem from './GameItem';

function MostPopular() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]); 
  useEffect(() => {
    const loadGames = async () => {
        try {
            const data = await getTopEightGames();
            setGames(data);
        } catch (error) {
            console.log(`Could not load top games: ${error}`);
        } finally {
            setLoading(false);
        }
    }

    loadGames();
  }, []);

  return (
    <div className="most-popular">
      {loading ? (
        <PreLoader />
      ) : (
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <h4>
                <em>Most Popular</em> Right Now
              </h4>
            </div>
            <div className="row">
                {games.map(game => <GameItem game={game} key={game.id} />)}
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/browse">Discover Popular</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MostPopular;