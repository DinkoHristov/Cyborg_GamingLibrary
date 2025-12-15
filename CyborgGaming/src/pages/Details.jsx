import "../css/App.css";
import PreLoader from "../components/Home/PreLoader";
import GameDetailsFeatured from "../components/Details/GameDetailsFeatured";
import GameDetailsMain from "../components/Details/GameDetailsMain";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameDetails } from "../services/api/games";

function Details() {
  const [loading, setLoading] = useState(true);
  const [gameDetails, setGameDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadGameDetails = async () => {
      try {
        const data = await getGameDetails(id);
        setGameDetails(data);
      } catch (error) {
        console.log(`Could not load game details: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    loadGameDetails();
  });

  return (
    <div className="container">
      {loading ? (
        <PreLoader />
      ) : (
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-banner header-text">
                    <GameDetailsFeatured game={ gameDetails }/>
                    <GameDetailsMain game={ gameDetails } />
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

export default Details;