import '../css/App.css';
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="main-banner">
      <div className="row">
        <div className="col-lg-7">
          <div className="header-text">
            <h6>Welcome To Cyborg</h6>
            <h4>
              <em>Browse</em> Our Popular Games Here
            </h4>
            <div className="main-button">
              <Link to='/browse'>Browse Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;