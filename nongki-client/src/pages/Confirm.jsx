import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Confirm.css';
import logo from '../assets/logo.png';
import qrisLogo from '../assets/qrisLogo.png';
import qrCode from '../assets/qrbayar.png';
import gopayLogo from '../assets/gopayLogo.png';
import { FaShoppingCart } from 'react-icons/fa';

function Confirm() {
    const navigate = useNavigate();
    const [showModal, setshowModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
    const [modalView, setModalView] = useState('selection'); // 'selection' or 'qris'
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        if (showModal && !paymentConfirmed && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft <= 0 && showModal && !paymentConfirmed) {
            setModalView('expired');
        }
    }, [showModal, paymentConfirmed, timeLeft]);

    const handleOpenModal = () => {
        setModalView('selection');
        setTimeLeft(10 * 60);
        setPaymentConfirmed(false);
        setOrderDetails(null);
        setshowModal(true);
    };

    const toggleHistoryModal = () => {
        setShowHistoryModal(!showHistoryModal);
    };

    const formatTime = (seconds) => {
        if (seconds < 0) return '00:00';
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleCheckStatus = () => {
        // Simulate checking payment status
        // This would typically involve an API call to check the payment status
        console.log('Checking payment status...');

        setTimeout(() => {
            const isSuccess = Math.random() > 0.3;

            if (isSuccess) {
                // Simulate successful payment confirmation
                const details = {
                    orderId: 'NGK/2025/07/001',
                    amount: 'Rp 100.000',
                    bookedSpace: 'Group Desk G1, G2, G3, G4, G5, G6',
                    bookingDate: '06/25/2025',
                    bookingTime: '08:00 to 10:00',
                    paymentMethod: 'QRIS',
                };
                setOrderDetails(details);
                setPaymentConfirmed(true);
                setModalView('success');
            } else {
                setModalView('failure');
                alert('Payment failed. Please try again.');
            }
        }, 3000);
    };

    const handleCloseModal = () => {
        setshowModal(false);
        if (paymentConfirmed) {
            navigate('/order');
        }
    };


    return (
        <div className='confirm-page'>
            <div className='confirm-content-warpper'>
                <div className='header-container'>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Nongki Logo" className='logo-order' />
                    </a>
                    <button className='btn-history' onClick={toggleHistoryModal}>
                        <FaShoppingCart className='cart-icon' />
                    </button>
                </div>

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
                            {modalView === 'selection' && (
                                <>
                                    <div className="payment-details">
                                        <div className="payment-amount">
                                            <p>Total Amount Due</p>
                                            <h2>Rp 100.000</h2>
                                        </div>
                                        <div className="payment-timer">
                                            Choose within {formatTime(timeLeft)}
                                        </div>
                                    </div>

                                    <p className="order-id">Order ID #NGK/2025/07/001</p>
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
                            )}
                            {(modalView === 'qris' || modalView === 'gopay') && !paymentConfirmed && (
                                <>
                                    <div className="payment-details">
                                        <div className="payment-amount">
                                            <p>Total Amount Due</p>
                                            <h2>Rp 100.000</h2>
                                        </div>
                                        <div className="payment-timer">
                                            pay within {formatTime(timeLeft)}
                                        </div>
                                    </div>
                                    <p className="order-id">Order ID #NGK/2025/07/001</p>

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
                                            <button className="btn-payment btn-status" onClick={handleCheckStatus}>Check Status</button>
                                            <button className="btn-payment btn-change-method" onClick={() => setModalView('selection')}>Change Payment Method</button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {modalView === 'success' && paymentConfirmed && orderDetails && (
                                <div className="payment-success-view">
                                    <h3 className="success-title">🎉 Payment Successful! 🎉</h3>
                                    <p className="success-message">Your order has been confirmed.</p>
                                    <div className="success-details">
                                        <div className="detail-row">
                                            <span>Order ID:</span>
                                            <strong>{orderDetails.orderId}</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Total Paid:</span>
                                            <strong>{orderDetails.amount.toLocaleString('id-ID')}</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Booked Space:</span>
                                            <strong>{orderDetails.bookedSpace}</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Booking Date:</span>
                                            <strong>{orderDetails.bookingDate}</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Booking Time:</span>
                                            <strong>{orderDetails.bookingTime}</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Payment Method:</span>
                                            <strong>{orderDetails.paymentMethod}</strong>
                                        </div>
                                    </div>
                                    <p className="follow-up-message">
                                        An email with your booking details has been sent to your registered email address.
                                    </p>
                                    <button className="btn-payment btn-back-to-home"
                                        onClick={() => { navigate('/order'); setshowModal(false); }}
                                    >
                                        Back to Home
                                    </button>
                                </div>
                            )}

                            {(modalView === 'failure' || modalView === 'expired') && !paymentConfirmed && (
                                <div className="payment-failure-view">
                                    <h3 className="failure-title">Payment {modalView === 'failure' ? 'Failed' : 'Expired'}😔</h3>
                                    <p className="failure-message">
                                        {modalView === 'failure' ?
                                            'Your payment could not be processed. Please try again or choose another method.' :
                                            'The time limit for your payment has expired. Please try booking again.'
                                        }
                                    </p>
                                    <div className="failure-actions">
                                        <button className="btn-payment btn-try-again" onClick={() => setModalView('selection')}>
                                            Try Again
                                        </button>
                                        <button className="btn-payment btn-contact-support" onClick={() => window.open('mailto:support@nongki.id?subject=Payment Failure - Order ID ${orderDetails.orderId}', '_blank')}>
                                            Contact Support
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <p>Powered by Your Payment Gateway</p>
                        </div>
                    </div>
                </div>
            )}

            {showHistoryModal && (
                <div className='history-modal-overlay' onClick={toggleHistoryModal}>
                    <div className='history-modal-content' onClick={(e) => e.stopPropagation()}>
                        <h2>Booking History</h2>
                        <p>No booking history available.</p>
                        <button className='history-modal-close-btn' onClick={toggleHistoryModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Confirm;
