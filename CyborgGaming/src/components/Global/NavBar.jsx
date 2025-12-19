import '../../css/App.css'
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../../services/utils/userStorage';
import { logout } from '../../services/utils/userAuth';

function NavBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const user = getUserData();

    async function onSubmit(e) {
        e.preventDefault();

        if (!searchQuery.trim()) 
            return;

        navigate(`/games?search=${encodeURIComponent(searchQuery)}`);
    }

    function onLogout(e) {
        e.preventDefault();
        logout();
        setShowDropdown(false);
        navigate('/profile');
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
                    <li className="profile-menu"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}>
                        <NavLink to='/profile' className={({ isActive }) => isActive ? 'active' : ''}>
                            {user ? 'Profile': 'Login'}
                            <img src="../../profile-header.jpg" alt="profile-image" />
                        </NavLink>
                        {user && showDropdown && (
                            <ul className="profile-dropdown">
                                <li onClick={(e) => onLogout(e)} className="logout">
                                    Logout
                                </li>
                            </ul>
                        )}
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