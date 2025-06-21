import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Confirm.css';
import logo from '../assets/logo.png';

function Order() {
    const navigate = useNavigate();
    return (
        <div className='order-page'>
            <div className='order-content-warpper'>
                <img src={logo} alt="Nongki Logo" className='logo-order' />

                <div className='card-order'>
                    <h3 className='title-order'>Confirm Order</h3>
                </div>

                <div className="confirm-container">
                    <div className="confirm-row">
                        {/* KIRI */}
                        <div className="confirm-col">
                            <div className="confirm-item">
                                <div className="label">Name</div>
                                <div className="colon">:</div>
                                <div className="value">Mahir</div>
                            </div>

                            <div className="confirm-item">
                                <div className="label">Kind of Space</div>
                                <div className="colon">:</div>
                                <div className="value">Group Desk</div>
                            </div>

                            <div className="confirm-item">
                                <div className="label">Number of Desk</div>
                                <div className="colon">:</div>
                                <div className="value">G1, G2, G3, G4, ,G5, G6</div>
                            </div>

                            <div className="confirm-item">
                                <div className="label">Payment Method</div>
                                <div className="colon">:</div>
                                <select className="confirm-select value">
                                    <option>Cash</option>
                                    <option>QRIS</option>
                                    <option>Transfer</option>
                                </select>
                            </div>
                        </div>

                        {/* KANAN */}
                        <div className="confirm-col">
                            <div className="confirm-item">
                                <div className="label">Time</div>
                                <div className="colon">:</div>
                                <div className="value">08.00 to 10.00</div>
                            </div>

                            <div className="confirm-item">
                                <div className="label">Date</div>
                                <div className="colon">:</div>
                                <div className="value">06/25/2025</div>
                            </div>

                            <div className="confirm-item">
                                <div className="label">Total Amount Due</div>
                                <div className="colon">:</div>
                                <div className="value">Rp 100.000</div>
                            </div>
                        </div>
                    </div>

                    <div className="confirm-actions">
                        <button onClick={() => navigate('/map')} className="btn-back">Back</button>
                        <button className="btn-pay">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
