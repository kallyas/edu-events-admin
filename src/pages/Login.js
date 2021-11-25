/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from '../context/AuthContext';

const customButton = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-dark me-3'
  },
  buttonsStyling: false
}))

    
function Login() {
  const history = useHistory()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
    
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
          setLoading(true)
          await login(data)
          history.push("/dashboard")
        } catch {
          customButton.fire('Error', 'error logging in, try again', 'error')
        }

        setLoading(false)
    }
  

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card-group d-block d-md-flex row">
            <div
                className="card col-md-5 text-white py-5"
                style={{ backgroundColor: '#096691' }}
              >
                <div className="card-body text-center">
                  <h1>Outbox EDU </h1>
                  <p>Login to Manage Outbox EDU </p>
                </div>
              </div>
              <div className="card col-md-7 p-4 mb-0">
                <div className="card-body">
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to admin account
                  </p>
                  <form onSubmit={handlesubmit}>
                    <div className="input-group mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="enter your email"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="enter your Password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button className="btn btn-dark px-4" type="submit">
                          {loading ? 'Loging In...' : 'Login'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
