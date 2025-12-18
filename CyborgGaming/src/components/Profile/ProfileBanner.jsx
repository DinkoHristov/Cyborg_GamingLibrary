import "../../css/App.css";
import { Link } from "react-router-dom";

function ProfileBanner({ user }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="main-profile ">
          <div className="row">
            <div className="col-lg-4">
              <img
                src='../../public/profile.jpg'
                alt=""
                style={{borderRadius: "23px"}}
              />
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="main-info header-text">
                <span>{user ? 'Online' : 'Offline'}</span>
                <h4>Alan Smithee</h4>
                <p>Welcome again, John</p>
                <div className="main-border-button">
                    <Link to='/games'>Browse Games</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <ul>
                <li>
                  Games Downloaded <span>3</span>
                </li>
                <li>
                  Total Games on site <span>16</span>
                </li>
                <li>
                  Live Streams <span>None</span>
                </li>
                <li>
                  Clips <span>29</span>
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