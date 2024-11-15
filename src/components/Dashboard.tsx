import React, { useEffect } from 'react';
import './Dashboard.css'; 
import useLocation from '../hooks/useLocations';

interface DashboardProps {
    username: string;
    onLogout: () => void;
}


const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => {
    const {getLocation, greeting, loading, locationInfo} = useLocation()

    useEffect(() => {
        getLocation()
    }, [getLocation]);

    return (
        <div className="dashboard-container">
            {!loading && locationInfo ? (
                <>
                    <h2 className="dashboard-title">{greeting.normalize("NFC")} {username}, você fez login com sucesso!</h2>
                    <p className="dashboard-info"><span>IP:</span> {locationInfo.query}</p>
                    <p className="dashboard-info"><span>Cidade:</span> {locationInfo.city}</p>
                    <p className="dashboard-info"><span>País:</span> {locationInfo.country}</p>
                    <p className="dashboard-info"><span>Região:</span> {locationInfo.regionName}</p>
                    <p className="dashboard-info"><span>Fuso Horário:</span> {locationInfo.timezone.replace(/_/g, ' ')}</p>
                    <p className="dashboard-info"><span>Latitude:</span> {locationInfo.lat}</p>
                    <p className="dashboard-info"><span>Longitude:</span> {locationInfo.lon}</p>
                    <p className="dashboard-info"><span>Código Postal:</span> {locationInfo.zip}</p>
                </> 
            ) : (
                <>
                <p className='loading'>Loading...</p>
            </>
            )}
            <button onClick={onLogout} className="logout-button">Logout</button>
        </div>
    );
};

export default Dashboard;
