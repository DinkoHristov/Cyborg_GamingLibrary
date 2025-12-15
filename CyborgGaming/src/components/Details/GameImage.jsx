function GameImage({ image }) {
    return (
        <div className="col-lg-4">
            <img src={image} style={{borderRadius: "23px", marginBottom: "30px" }} />
        </div>
    );
}

export default GameImage;