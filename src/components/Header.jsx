import React from 'react';
import title from '../assets/title.webp';
import '../styles/Header.scss';
import Search from './Search.jsx';

const Header = () => {
    return (
        <nav>
            <img src="" alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={title} alt="logo" className="logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Kanto</a>
                    </li>
                    <li>
                        <a href="/">Johto</a>
                    </li>
                    <li>
                        <a href="/">Hoenn</a>
                    </li>
                    <li>
                        <a href="/">Sinnoh</a>
                    </li>
                    <li>
                        <a href="/">Teselia</a>
                    </li>
                    <li>
                        <a href="/">Kalos</a>
                    </li>
                    <li>
                        <a href="/">Alola</a>
                    </li>
                    <li>
                        <a href="/">Galar</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <Search />
                </ul>
            </div>
        </nav>
    )
}

export default Header;