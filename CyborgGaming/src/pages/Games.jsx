import "../css/App.css";
import PreLoader from "../components/Global/PreLoader";
import GameItemTemplate from "../components/Games/GameItemTemplate";
import { useEffect, useState } from "react";
import { getAllGamesPaginated, getSearchedGames } from "../services/api/games";
import { useSearchParams } from "react-router-dom";

function Games() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {setPageNumber(1)}, [searchQuery]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);

         if (searchQuery) {
          const data = await getSearchedGames(searchQuery, pageNumber);
          setGames(data.results);
          setMaxPage(Math.ceil(data.count / 20));
        } else {
          const data = await getAllGamesPaginated(pageNumber);
          setGames(data.results);
          setMaxPage(Math.ceil(data.count / 20));
        }
      } catch (error) {
        console.log(`Could not load all games: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, [pageNumber, searchQuery]);

  return (
    <div className="container">
      {loading ? (
        <PreLoader />
      ) : (
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4 style={{ textAlign: "center" }}>
                    <em>{searchQuery ? `${searchQuery} Results` : "All Games"}</em> Browse Now</h4>
                </div>
              </div>
              <div className="live-stream">
                <div className="row">
                  {games.map(game => <GameItemTemplate game={game} key={game.id} />)}

                  <div className="col-lg-12">
                    <div className="main-button">
                      <div className="pagination-wrapper">
                        <button className="page-btn" disabled={pageNumber === 1} onClick={() => setPageNumber(page => page - 1)}>
                          ⬅ Previous
                        </button>
                        <span className="page-indicator">
                          {pageNumber}
                        </span>
                        <button className="page-btn" disabled={pageNumber === maxPage} onClick={() => setPageNumber(page => page + 1)}>
                          Next ➡
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Games;