import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Download from './pages/Download';
export const Entry = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route exact path='/download/:id' element={<Download />} />
            </Routes>
        </>
    );
};
