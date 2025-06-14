import React, { useState } from 'react';
import '../Styles/MapVIP.css';
import logo from '../assets/logo.png';

const seats = [
    [40, 60, 10], [41, 110, 10], [42, 160, 10], [43, 210, 10], [44, 260, 10], [45, 310, 10], [46, 360, 10],
    [1, 60, 710], [2, 110, 710], [3, 160, 710], [4, 210, 710], [5, 260, 710], [6, 310, 710], [7, 360, 710],

    [38, 60, 160], [39, 60, 210], [36, 110, 160], [37, 110, 210],
    [8, 60, 460], [9, 60, 510], [10, 110, 460], [11, 110, 510],

    [34, 160, 160], [35, 160, 210], [32, 210, 160], [33, 210, 210],
    [12, 160, 460], [13, 160, 510], [14, 210, 460], [15, 210, 510],

    [30, 260, 160], [31, 260, 210], [28, 310, 160], [29, 310, 210],
    [16, 260, 460], [17, 260, 510], [18, 310, 460], [19, 310, 510],

    [26, 360, 160], [27, 360, 210], [24, 410, 160], [25, 410, 210],
    [20, 360, 460], [21, 360, 510], [22, 410, 460], [23, 410, 510],

    [47, 470, 60], [48, 520, 60], [49, 570, 60], [50, 620, 60], [51, 670, 60], [52, 720, 60],
];

function MapVIP() {
    const [selected, setSelected] = useState([]);

    const toggleSeat = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="map-vip-page">
            <div className='map-vip-content-wrapper'>
                <img src={logo} alt="Nongki Logo" className='logo-map-vip' />
                <div className="map-absolute-wrapper">
                    {seats.map(([id, top, left]) => (
                        <div
                            key={id}
                            className={`seat-block ${selected.includes(id) ? 'selected' : ''}`}
                            style={{ top: `${top}px`, left: `${left}px` }}
                            onClick={() => toggleSeat(id)}
                        >
                            {id}
                        </div>
                    ))}

                    <div className='door-label' style={{ top: '470px', left: '360px' }}>Pintu</div>
                    <div className='compass-block'>🧭</div>
                </div>
            </div>
        </div>
    );
}

export default MapVIP;
