import { IconBell, IconCheckbox, IconFileText, IconHome, IconMoon, IconPackage, IconSearch, IconStar, IconSun } from '@tabler/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eduLogo from '../assets/images/android-chrome-192x192.png';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expand, setExpand] = useState(false);
  const [expandEvents, setExpandEvents] = useState(false);
  const { currentUser } = useAuth();

  //handle dropdown show
  const handleDropdownShow = () => setExpand(!expand);
  

  //handle events dropdown show
  const handleEventsDropdownShow = () => setExpandEvents(!expandEvents);


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
            <Link to="/dashboard">
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
              >
                <IconMoon />
              </Link>
              <Link
                to="?theme=light"
                className="nav-link px-0 hide-theme-light"
                title="Enable light mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
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
                className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow ${
                  expand ? 'show' : ''
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
                <Link to="#" className="dropdown-item">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar navbar-light">
            <div className="container-xl">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/dashboard">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <IconHome />
                    </span>
                    <span className="nav-link-title">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle ${expandEvents ? 'show' : ''}`}
                    to="#"
                    onClick={handleEventsDropdownShow}
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded={expand}
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <IconPackage />
                    </span>
                    <span className="nav-link-title">Events</span>
                  </Link>
                  <div
                    className={`dropdown-menu ${expandEvents ? 'show' : ''}`}
                    data-bs-popper={expandEvents ? 'none' : ''}
                  >
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <Link className="dropdown-item" to="/">
                          Event List
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">
                          Event Calender
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <IconCheckbox />
                    </span>
                    <span className="nav-link-title">Users</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#navbar-extra">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <IconStar />
                    </span>
                    <span className="nav-link-title">Projects</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <IconFileText />
                    </span>
                    <span className="nav-link-title">Enrollments</span>
                  </Link>
                </li>
              </ul>
              <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                <form>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <IconSearch />
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control"
                      placeholder="Search…"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
