import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
    <div className="page page-center">
      <div className="container container-flex-row py-2">
        <div className="company-name">
          <h1>OutBox EDU</h1>
          <span>Login to Manage Outbox EDU DashBoard</span>
        </div>
        <form className="card card-md login-form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="card-body">
            <h2 className="card-title mb-4">Login</h2>
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
              <label className="form-label">Password</label>
              <div className="input-group input-group-flat">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="off"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary login-btn w-100">
                {loading ? 'Signing in' : 'Sign in'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
