import React from 'react';

import '../styles/components/Footer.scss';

function Footer(): React.ReactElement {
    return (
        <footer className="footer">
            <p>© 2024 SummaPost</p>
            <ul>
                <li>
                    <a href="https://austincodingacademy.com" target="_blank">Home</a>
                </li>
                <li>
                    <a href="https://austincodingacademy.com/category/blog" target="_blank">Blog</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
