import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [loading, setLoading] = React.useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    //handle password Type
    const handlePasswordType = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(data);
            // setLoading(true);
            // await login(data);
            // history.push('/dashboard');
            setData({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <div className="page page-center">
            <div className="container container-flex-row py-2">
                <div className="company-name">
                    <h1>
                        OutBox EDU
                    </h1>
                    <span>
                        Login to Manage Outbox EDU DashBoard
                    </span>
                    <div className='space-create-event'>
                    </div>
                </div>
                <form className="card card-md login-form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="card-body">
                        <h2 class="card-title mb-4">Login</h2>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Password
                            </label>
                            <div className="input-group input-group-flat">
                                <input
                                    type={passwordType}
                                    name='password'
                                    className="form-control"
                                    placeholder="Password"
                                    autoComplete="off"
                                    value={data.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary login-btn w-100">{loading ? 'Signing in' : 'Sign in'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login