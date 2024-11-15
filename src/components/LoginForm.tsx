import React, { useState } from 'react';
import './LoginForm.css'; 

interface LoginFormProps {
    onLogin: (username: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setError('Por favor, preencha todos os campos.');
        } else {
            setError('');
            onLogin(username);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Login</h2>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`input ${error ? 'error' : ''}`} 
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`input ${error ? 'error' : ''}`} 
                />
            </div>
            {error && <p className="error-text">{error}</p>}
            <button onClick={handleLogin} className="button">Login</button>
        </div>
    );
};

export default LoginForm;
