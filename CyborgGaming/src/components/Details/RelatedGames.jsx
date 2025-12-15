import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRelatedGames } from "../../services/api/games";
import RelateGameItem from "./RelateGameItem";

function RelatedGames() {
    const [relatedGames, setRelatedGames] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const loadRelatedGames = async () => {
            try {
                const data = await getRelatedGames(id);
                setRelatedGames(data.slice(0, 6));
            } catch (error) {
                console.log(`Could not load related games: ${error}`);
            }
        };

        loadRelatedGames();
    }, [id]);

    return (
        <div className="other-games">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4><em>Other Related</em> Games</h4>
                </div>
              </div>
              {relatedGames.map(relatedGame => <RelateGameItem game={relatedGame} key={relatedGame.id} />)}
            </div>
          </div>
    );
}

export default RelatedGames;