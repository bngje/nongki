import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Confirm.css';
import logo from '../assets/logo.png';
import qrisLogo from '../assets/qrisLogo.png';
import qrCode from '../assets/qrbayar.png';
import gopayLogo from '../assets/gopayLogo.png';

function Order() {
    const navigate = useNavigate();
    const [showModal, setshowModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
    const [modalView, setModalView] = useState('selection'); // 'selection' or 'qris'

    useEffect(() => {
        if (showModal && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [showModal, timeLeft]);

    const handleOpenModal = () => {
        setModalView('selection');
        setTimeLeft(10 * 60); // Reset to 10 minutes
        setshowModal(true);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

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
                        <button onClick={() => setshowModal(true)} className="btn-pay">Pay</button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <img src={logo} alt="Nongki Logo" className="modal-logo" />
                            <button onClick={() => setshowModal(false)} className="modal-close-btn">&times;</button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body">
                            <div className="payment-details">
                                <div className="payment-amount">
                                    <p>Total Amount Due</p>
                                    <h2>Rp 100.000</h2>
                                </div>
                                <div className="payment-timer">
                                    {modalView === 'selection' ? 'Choose within' : 'Pay within'} {formatTime(timeLeft)}
                                </div>
                            </div>
                            <p className="order-id">Order ID #NGK/2025/07/001</p>

                            {/* == Conditional Rendering Start == */}
                            {modalView === 'selection' ? (
                                <>
                                    <h3 className="payment-title">All payment methods</h3>
                                    <div className="payment-options">
                                        <div className="payment-option" onClick={() => setModalView('qris')}>
                                            <span>QRIS</span>
                                            <span>&gt;</span>
                                        </div>
                                        <div className="payment-option" onClick={() => setModalView('gopay')}>
                                            <span>GoPay/GoPay Later</span>
                                            <span>&gt;</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="payment-view-container">
                                    <div className="payment-view-header">
                                        <h3>{modalView === 'qris' ? 'QRIS' : 'GoPay/GoPay Later'}</h3>
                                        <img
                                            src={modalView === 'qris' ? qrisLogo : gopayLogo}
                                            alt={modalView === 'qris' ? 'QRIS Logo' : 'GoPay Logo'}
                                            className="payment-method-logo"
                                        />
                                    </div>
                                    <img src={qrCode} alt="QR Code" className="payment-code-img" />
                                    <a href="#" className="how-to-pay">How to pay</a>
                                    <div className="payment-actions">
                                        <button className="btn-payment btn-download">Download QRIS</button>
                                        <button className="btn-payment btn-status">Check Status</button>
                                        <button className="btn-payment btn-change-method" onClick={() => setModalView('selection')}>Change Payment Method</button>
                                    </div>
                                </div>
                            )}
                            {/* == Conditional Rendering End == */}

                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <p>Powered by Your Payment Gateway</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Order;
