/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import loginUser from '../service/AuthService';
import useToken from '../utils/useToken'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const customButton = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-dark me-3'
  },
  buttonsStyling: false
}))

    
function Login() {
  const history = useHistory()
  const { setToken } = useToken()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
    
    const handlesubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
      const { accessToken } = await loginUser(data)
      if(!accessToken) console.log(error);
      if (!accessToken) {
        setError("Email or password maybe incorrect")
        setLoading(false)
        return customButton.fire('login error', error, 'error')
      }
      setToken(accessToken)
      history.push('/dashboard')
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
                  <h1>Outbox Edu events</h1>
                  <p>Login to Manage outbox Edu Events</p>
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
