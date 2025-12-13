function GameItem({ game }) {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item">
        <img src={game.background_image} alt={game.name} />
        <h4>{game.name.substring(0, 20)}<br /></h4>
        <ul>
          <li><i className="fa fa-star"></i> {game.rating}</li>
          <li><i className="fa fa-download"></i> {game.added}</li>
        </ul>
      </div>
    </div>
  );
}

export default GameItem;