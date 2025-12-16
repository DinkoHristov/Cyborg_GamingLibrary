import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGameImages } from "../../services/api/games";
import "../../css/App.css";
import GameImage from "./GameImage";
import RelatedGames from "./RelatedGames";

function GameDetailsMain({ game }) {
    const [gameImages, setGameImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const loadGameImages = async () => {
            try {
                const data = await getGameImages(id);
                const dataImages = data.map(game => game.image);
                const images = dataImages.length > 3 
                    ? dataImages.slice(0, 3) 
                    : dataImages;
                setGameImages(images);
            } catch (error) {
                console.log(`Could not load game images: ${error}`);
            }
        };
    
        loadGameImages();
    }, [id]);

    return (
        <div className="game-details">
        <div className="row">
            <div className="col-lg-12">
            <h2>{game.name} Details</h2>
            </div>
            <div className="col-lg-12">
            <div className="content">
                <div className="row">
                <div className="col-lg-6">
                    <div className="left-info">
                    <div className="left">
                        <h4>{game.name}</h4>
                    </div>
                    <ul>
                        <li><i className="fa fa-star"></i> {game.rating}</li>
                        <li><i className="fa fa-download"></i> {game.added}</li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-info">
                    <ul>
                        <li><i className="fa fa-star"></i> {game.rating}</li>
                        <li><i className="fa fa-download"></i> {game.added}</li>
                        <li><i className="fa fa-youtube-play"></i> {game.youtube_count}</li>
                        <li><i className="fa fa-gamepad"></i> {game.genres[0].name}</li>
                    </ul>
                    </div>
                </div>
                    {gameImages.map(img => <GameImage image={ img } key={`${id}/${img}`} />)}
                <div className="col-lg-12">
                    <p>{game.description_raw}</p>
                </div>
                <RelatedGames />
                <div className="col-lg-12">
                    <div className="main-border-button">
                    <Link to='/'>Download {game.name} Now!</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default GameDetailsMain;