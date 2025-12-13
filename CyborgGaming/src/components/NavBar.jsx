import '../css/App.css'
import { Link } from 'react-router-dom';

function NavBar() {
    function onBtnClicked(e) {
        e.preventDefault();
        alert('Clicked');
    }

    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <Link to='/' className="logo"><img src="../../logo.png" alt="logo" /></Link>
                <div className="search-input">
                    <form id="search" action="#">
                    <input
                        type="text"
                        placeholder="Search game..."
                        id="searchText"
                        name="searchKeyword"
                        onClick={onBtnClicked}/>
                    <i className="fa fa-search"></i>
                    </form>
                </div>
                <ul className="nav">
                    <li>
                        <Link to='/' className="active">Home</Link>
                    </li>
                    <li>
                        <Link to='/browse'>Browse</Link>
                    </li>
                    <li>
                        <Link to='/details'>Details</Link>
                    </li>
                    <li>
                        <Link to='/streams'>Streams</Link>
                    </li>
                    <li>
                        <Link to='/profile'>
                            Profile{" "}
                            <img src="../../profile-header.jpg" alt="profile-image" />
                        </Link>
                    </li>
                </ul>
                <a className="menu-trigger">
                    <span>Menu</span>
                </a>
                </nav>
            </div>
            </div>
        </div>
        </header>
    );
}

export default NavBar;