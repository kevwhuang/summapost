import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

function Display(): React.ReactElement {
    return (
        <div id="display">
            <Navbar />
            <Outlet />
            <Footer />
            <Modal />
        </div>
    );
}

export default Display;
