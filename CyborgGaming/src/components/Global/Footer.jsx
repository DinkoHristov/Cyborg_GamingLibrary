import '../../css/App.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright ©2026 
                <Link to='/'> Cyborg Gaming</Link> Company. All rightsreserved.
              <br />Design: Dinko Hristov
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;