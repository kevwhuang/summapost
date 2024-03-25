import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Navbar.scss';

function Navbar(): React.ReactElement {
    const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(document.cookie.length));

    function login(): void {
        const password = prompt('Please enter password.');

        setTimeout(() => {
            if (password === import.meta.env.VITE_PASSWORD) {
                document.cookie = `password=${password}`;
                setIsLoggedIn(true);
                alert('You are now logged in.');
            } else {
                alert('Password does not match. Please try again.');
            }
        }, 1000);
    }

    function logout(): void {
        setTimeout(() => {
            document.cookie = 'password=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
            setIsLoggedIn(false);
            alert('You are now logged out.');
        }, 1000);
    }

    return (
        <nav className="navbar">
            <section>
                <img alt="Logo" />
                <Link to="/">SummaPost</Link>
            </section>
            <button onClick={isLoggedIn ? logout : login}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </nav>
    );
}

export default Navbar;
