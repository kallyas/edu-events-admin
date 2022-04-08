import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import eduLogo from '../assets/images/android-chrome-512x512-removebg-preview.png';
import { useEffect } from 'react';
//icons
import { IconEye } from '@tabler/icons';

const Login = () => {
    const navigate = useNavigate();
    const { login, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    //show password
    const handleClickShowPassword = () => {
        setShow(!show);
    };

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await login(data);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (currentUser) {
            navigate('/dashboard');
        }
    }, [currentUser, navigate]);

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
                                            <IconEye size={24} />
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
    );
};

export default Login;
