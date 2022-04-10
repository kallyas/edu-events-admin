import { IconBell, IconMoon, IconStar, IconSun } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eduLogo from '../assets/images/android-chrome-512x512-removebg-preview.png';
import OutBoxLogo from "../assets/images/outbox-removebg-preview.png"
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Routes as routes } from '../routes';
import HeaderBottom from './HeaderBottom';

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  //handle dropdown show
  const handleDropdownShow = () => setExpand(!expand);

  //handle logout
  const handleLogout = async () => {
    await logout();
    navigate(routes.Login.path);
  };

  //toggle dark mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <header className="navbar navbar-expand-md navbar-light d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link to="/dashboard" className='logo-side'>
              <img
                src={OutBoxLogo}
                width="110"
                height="32"
                alt="OutBox EDU"
                className="navbar-brand-image"
              />
              <img
                src={eduLogo}
                width="110"
                height="32"
                alt="OutBox EDU"
                className="navbar-brand-image"
              />
            </Link>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <div className="d-none d-md-flex">
              <Link
                to="?theme=dark"
                className="nav-link px-0 hide-theme-dark"
                title="Enable dark mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                onClick={toggleDarkMode}
              >
                <IconMoon />
              </Link>
              <Link
                to="?theme=light"
                className="nav-link px-0 hide-theme-light"
                title="Enable light mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                onClick={toggleDarkMode}
              >
                <IconSun />
              </Link>
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="#"
                  className="nav-link px-0"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <IconBell />
                </Link>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Last updates</h3>
                    </div>
                    <div className="list-group list-group-flush list-group-hoverable">
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot status-dot-animated bg-red d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <Link to="#" className="text-body d-block">
                              Example 1
                            </Link>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Change deprecated html tags to text decoration classes (#29604)
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link to="#" className="list-group-item-actions">
                              <IconStar />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <Link to="#" className="text-body d-block">
                              Example 2
                            </Link>
                            <div className="d-block text-muted text-truncate mt-n1">
                              justify-content:between ⇒ justify-content:space-between (#29734)
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link to="#" className="list-group-item-actions show">
                              <IconStar />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <Link to="#" className="text-body d-block">
                              Example 3
                            </Link>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Update change-version.js (#29736)
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link to="#" className="list-group-item-actions">
                              <IconStar />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot status-dot-animated bg-green d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <Link to="#" className="text-body d-block">
                              Example 4
                            </Link>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Regenerate package-lock.json (#29730)
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link to="#" className="list-group-item-actions">
                              <IconStar />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                onClick={handleDropdownShow}
                className={`nav-link d-flex lh-1 text-reset p-0 ${expand ? 'show' : ''}`}
                data-bs-toggle="dropdown"
                aria-label="Open user menu"
                aria-expanded={expand}
              >
                <span className="avatar avatar-sm"></span>
                {/* style={{backgroundImage: url('./static/avatars/000m.jpg')}} */}
                <div className="d-none d-xl-block ps-2">
                  <div>{currentUser && currentUser.email}</div>
                  <div className="mt-1 small text-muted">Admin</div>
                </div>
              </Link>
              <div
                className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow ${expand ? 'show' : ''
                  }`}
                data-bs-popper={expand ? 'none' : ''}
              >
                <Link to="#" className="dropdown-item">
                  Set status
                </Link>
                <Link to="#" className="dropdown-item">
                  Profile &amp; account
                </Link>
                <Link to="#" className="dropdown-item">
                  Feedback
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item">
                  Settings
                </Link>
                <Link to="#" className="dropdown-item" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderBottom />
    </>
  );
};

export default NavBar;
