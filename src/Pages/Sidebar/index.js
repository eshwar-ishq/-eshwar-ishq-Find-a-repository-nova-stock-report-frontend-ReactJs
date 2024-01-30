import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const menuBut = () => {
        setIsActive(!isActive);
        console.log('clicked');
    };

    return (
        <>
            <div id="side" className={`sidebar ${isActive ? 'active' : ''}`}>
                <div className="menu_icons" onClick={menuBut}>
                    <GiHamburgerMenu />
                </div>
                <div className="inner">
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><Link href="allStocks.html" to="/">All Stocks</Link></li>
							<li><Link href="index.html" to="/belmont">Belmont</Link></li>
							<li><Link href="richmond.html" to="/richmond">RichMond</Link></li>
							<li><Link href="haridwar.html" to="/haridwar">Haridwar</Link></li>
							<li><Link href="hyderabad.html" to="/hyderabad">Hyderabad</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
