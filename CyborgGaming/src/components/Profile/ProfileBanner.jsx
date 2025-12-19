import "../../css/App.css";
import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/GameContext";
import { Link } from "react-router-dom";
import { getTotalGamesCount, getTotalGenresCount, getTotalPlatformsCount } from "../../services/api/games";

function ProfileBanner({ user }) {
  const { downloaded } = useGameContext();
  const [gamesCount, setGamesCount] = useState([]);
  const [platformsCount, setPlatformsCount] = useState([]);
  const [genresCount, setGenresCount] = useState([]);

  useEffect(() => {
    const loadGamesCount = async () => {
      try {
        const count = await getTotalGamesCount();
        setGamesCount(count);
      } catch (error) {
        console.log(`Could not load games count: ${error}`);
      }
    };

    loadGamesCount();
  });

  useEffect(() => {
    const loadPlatformsCount = async () => {
      try {
        const count = await getTotalPlatformsCount();
        setPlatformsCount(count);
      } catch (error) {
        console.log(`Could not load platforms count: ${error}`);
      }
    };

    loadPlatformsCount();
  });

  useEffect(() => {
    const loadGenresCount = async () => {
      try {
        const count = await getTotalGenresCount();
        setGenresCount(count);
      } catch (error) {
        console.log(`Could not load genres count: ${error}`);
      }
    };

    loadGenresCount();
  });

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="main-profile ">
          <div className="row">
            <div className="col-lg-4">
              <img
                src='../../public/profile.jpg'
                alt={user.username}
                style={{borderRadius: "23px"}}
              />
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="main-info header-text">
                <span>{user ? 'Online' : 'Offline'}</span><br></br>
                <h4>{user.username}</h4>
                <p>Welcome again, {user.username}</p>
                <div className="main-border-button">
                    <Link to='/games'>Browse Games</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <ul>
                <li>
                  Games Downloaded <span>{downloaded?.length}</span>
                </li>
                <li>
                  Total Games on site <span>{gamesCount}</span>
                </li>
                <li>
                  Total Platforms for games <span>{platformsCount}</span>
                </li>
                <li>
                  Total Genres on site <span>{genresCount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;