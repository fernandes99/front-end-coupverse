import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import * as io from 'socket.io-client';

import { WelcomePage } from './pages/welcome';
import './styles/reset.css';
import './styles/global.css';
import { LobbyPage } from './pages/lobby';

const socket = io.connect('http://localhost:3001');

function App() {
    // useEffect(() => {}, [socket]);

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate to='/bem-vindo' replace />} />
                    <Route path='/bem-vindo' element={<WelcomePage socket={socket} />} />
                    <Route path='/sala/:roomId/lobby' element={<LobbyPage socket={socket} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
