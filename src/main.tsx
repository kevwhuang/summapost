import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import Display from './layouts/Display';

import Help from './pages/Help';
import Home from './pages/Home';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/media.scss';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="" element={<Display />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
