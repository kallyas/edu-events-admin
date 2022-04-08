import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import eduLogo from '../assets/images/android-chrome-512x512-removebg-preview.png';
import { useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    //show password
    const handleClickShowPassword = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await login(data)
            navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    //useEffect
    return (
        <div>
            <div className="page page-center">
                <div className="container-tight py-1">
                    <form
                        className="card card-md login-form"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <div className="card-body">
                            <div className="text-center mb-2 company-logo">
                                <img src={eduLogo} height="50" alt="" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                                        <Link to="/"> I forgot password </Link>
                                    </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input
                                        type={show ? 'text' : 'password'}
                                        name='password'
                                        className="form-control"
                                        placeholder="Enter Password"
                                        autoComplete="off"
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                    <span className="input-group-text">
                                        <Link
                                            to="/"
                                            className="link-secondary"
                                            title="Show password"
                                            data-bs-toggle="tooltip"
                                            onClick={handleClickShowPassword}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <circle cx="12" cy="12" r="2" />
                                                <path
                                                    d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
                                                />
                                            </svg>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <span className="form-check-label"> Remember me on this device </span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary w-100 login-btn">
                                    {loading ? 'Logging in...' : 'Sign in'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login