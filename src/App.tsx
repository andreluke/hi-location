import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username: string) => {
        setUsername(username);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername('');
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <Dashboard username={username} onLogout={handleLogout} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
