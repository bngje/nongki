import React, { useState } from 'react';
import '../Styles/Map.css';
import logo from '../assets/logo.png';
import compas from '../assets/compas.png';
import { useNavigate } from 'react-router-dom';

const desks = [
    { id: 'A1', top: 20, left: 20, vertical: false },
    { id: 'A2', top: 20, left: 130, vertical: false },
    { id: 'A3', top: 20, left: 240, vertical: false },
    { id: 'A4', top: 20, left: 350, vertical: false },

    { id: 'B1', top: 100, left: 20, vertical: false },
    { id: 'B2', top: 100, left: 130, vertical: false },
    { id: 'B3', top: 100, left: 240, vertical: false },
    { id: 'B4', top: 100, left: 350, vertical: false },

    { id: 'C1', top: 45, left: 530, vertical: false },
    { id: 'C2', top: 45, left: 610, vertical: false },
    { id: 'C3', top: 85, left: 530, vertical: false },
    { id: 'C4', top: 85, left: 610, vertical: false },

    { id: 'D1', top: 45, left: 720, vertical: false },
    { id: 'D2', top: 45, left: 800, vertical: false },
    { id: 'D3', top: 85, left: 720, vertical: false },
    { id: 'D4', top: 85, left: 800, vertical: false },

    { id: 'E1', top: 200, left: 170, vertical: false },
    { id: 'E2', top: 200, left: 250, vertical: false },
    { id: 'E3', top: 200, left: 330, vertical: false },
    { id: 'E4', top: 240, left: 170, vertical: false },
    { id: 'E5', top: 240, left: 250, vertical: false },
    { id: 'E6', top: 240, left: 330, vertical: false },

    { id: 'F1', top: 340, left: 170, vertical: false },
    { id: 'F2', top: 340, left: 250, vertical: false },
    { id: 'F3', top: 340, left: 330, vertical: false },
    { id: 'F4', top: 380, left: 170, vertical: false },
    { id: 'F5', top: 380, left: 250, vertical: false },
    { id: 'F6', top: 380, left: 330, vertical: false },

    { id: 'G1', top: 480, left: 170, vertical: false },
    { id: 'G2', top: 480, left: 250, vertical: false },
    { id: 'G3', top: 480, left: 330, vertical: false },
    { id: 'G4', top: 520, left: 170, vertical: false },
    { id: 'G5', top: 520, left: 250, vertical: false },
    { id: 'G6', top: 520, left: 330, vertical: false },

    { id: 'H1', top: 200, left: 550, vertical: false },
    { id: 'H2', top: 200, left: 630, vertical: false },
    { id: 'H3', top: 200, left: 710, vertical: false },
    { id: 'H4', top: 240, left: 550, vertical: false },
    { id: 'H5', top: 240, left: 630, vertical: false },
    { id: 'H6', top: 240, left: 710, vertical: false },

    { id: 'I1', top: 340, left: 550, vertical: false },
    { id: 'I2', top: 340, left: 630, vertical: false },
    { id: 'I3', top: 340, left: 710, vertical: false },
    { id: 'I4', top: 380, left: 550, vertical: false },
    { id: 'I5', top: 380, left: 630, vertical: false },
    { id: 'I6', top: 380, left: 710, vertical: false },

    { id: 'J1', top: 480, left: 550, vertical: false },
    { id: 'J2', top: 480, left: 630, vertical: false },
    { id: 'J3', top: 480, left: 710, vertical: false },
    { id: 'J4', top: 520, left: 550, vertical: false },
    { id: 'J5', top: 520, left: 630, vertical: false },
    { id: 'J6', top: 520, left: 710, vertical: false },

    { id: 'K1', top: 200, left: 20, vertical: true },
    { id: 'K2', top: 310, left: 20, vertical: true },
    { id: 'K3', top: 420, left: 20, vertical: true },
    { id: 'K4', top: 530, left: 20, vertical: true },
    { id: 'K5', top: 200, left: 850, vertical: true },
    { id: 'K6', top: 310, left: 850, vertical: true },
    { id: 'K7', top: 420, left: 850, vertical: true },
    { id: 'K8', top: 530, left: 850, vertical: true },

    { id: 'L1', top: 640, left: 20, vertical: true },
    { id: 'L2', top: 750, left: 100, vertical: false },
    { id: 'L3', top: 750, left: 240, vertical: false },
];

function MapVip() {
    const [selectedDesk, setSelectedDesks] = useState([]);

    const toggleSelect = (deskId) => {
        setSelectedDesks(prevSelectedDesks => {
            const newSelectedDesks = prevSelectedDesks.includes(deskId)
                ? prevSelectedDesks.filter(id => id !== deskId)
                : [...prevSelectedDesks, deskId];
            return newSelectedDesks;
        });
    };

    const navigate = useNavigate();

    const handleNext = () => {
        if (selectedDesk.length === 0) return;
        navigate('/confirm', { state: { selectedDesk } });
    }

    return (
        <div className="nonvip-container">
            <div className="map-header">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Nongki Logo" className='logo-order' />
                </a>
                <div className="spacer" />
                <h2 className="map-title">Choose Your Desk(s)</h2>
                <div className="spacer" />
            </div>

            <div className="map-warpper">
                <div className="map-area">
                    {desks.map((desk) => (
                        <div
                            key={desk.id}
                            className={`desk ${selectedDesk.includes(desk.id) ? 'selected' : ''}`}
                            onClick={() => toggleSelect(desk.id)}
                            style={{
                                top: desk.top,
                                left: desk.left,
                                width: desk.vertical ? 30 : 70,
                                height: desk.vertical ? 70 : 30,
                            }}
                        >
                            {desk.id}
                        </div>
                    ))}
                    <div className="door-line-wrapper" style={{ top: 150, left: 0 }}>
                        <div className="door-line" style={{ top: 0, left: 0, width: 900 }}></div>
                        <span className="door-text" style={{ top: -5, left: 440 }}>door</span>
                    </div>
                    <div className="door-line-wrapper" style={{ top: 630, left: 0 }}>
                        <div className="door-line" style={{ top: 100, left: 300, width: 0 }}></div>
                        <div className="vertical-cut" style={{ top: 10, left: 380, height: 160 }}></div>
                        <span className="door-text" style={{ top: 3, left: 440 }}>door</span>
                        <div className="door-line" style={{ top: 10, left: 380, width: 520 }}></div>
                    </div>
                    <img src={compas} alt="Compass" className="compass-icon" />
                </div>
                <div className="map-actions">
                    <button
                        className="back-button"
                        onClick={() => navigate('/order')}
                    >
                        Back
                    </button>
                    <button
                        className="next-button"
                        onClick={handleNext}
                        disabled={selectedDesk.length === 0}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MapVip;
