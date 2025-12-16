import '../../css/App.css'
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();

        if (!searchQuery.trim()) 
            return;

        navigate(`/games?search=${encodeURIComponent(searchQuery)}`);
    }

    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <Link to='/' className="logo"><img src="../../logo.png" alt="logo" /></Link>
                <div className="search-input">
                    <form id="search" onSubmit={onSubmit}>
                    <input type="text"
                        placeholder="Search game..."
                        id="searchText"
                        name="searchKeyword"
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <i className="fa fa-search"></i>
                    </form>
                </div>
                <ul className="nav">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/games' className={({ isActive }) => isActive ? 'active' : ''}>Games</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={({ isActive }) => isActive ? 'active' : ''}>
                            Profile{" "}
                            <img src="../../profile-header.jpg" alt="profile-image" />
                        </NavLink>
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