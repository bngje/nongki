import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css';
import logo from '../assets/logo.png';

function Register() {

    return (
        <div className="login-page">
            <div className="card">
                <div>
                    <img src={logo} alt="Logo" className="logo-login" />
                    <h3 className="title">Create an account</h3>
                </div>
                <div className="register-container">
                    <label htmlFor='name'>Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                    />
                    <label htmlFor='number'>Number</label>
                    <input
                        type="text"
                        placeholder="Number"
                        maxLength={15}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onKeyDown={(e) => {
                            const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
                            if (
                                e.key.length === 1 &&
                                !/[0-9]/.test(e.key) &&
                                !allowedKeys.includes(e.key)
                            ) {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <button>Regist</button>
                    <p className="register-link">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;