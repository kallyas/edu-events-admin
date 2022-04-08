import React, { useState } from 'react';
import {
  IconUsers,
  IconListDetails,
  IconLayoutDashboard,
  IconCalendarEvent,
  IconSearch,
  IconApps,
} from '@tabler/icons';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandEvents, setExpandEvents] = useState(false);

  //handle events dropdown show
  const handleEventsDropdownShow = () => setExpandEvents(!expandEvents);

  return (
    <div className="navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="navbar navbar-light">
          <div className="container-xl">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconLayoutDashboard />
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
                  aria-expanded={expandEvents}
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconCalendarEvent />
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
                    <IconUsers />
                  </span>
                  <span className="nav-link-title">Users</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/dashboard/projects'}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconApps />
                  </span>
                  <span className="nav-link-title">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconListDetails />
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
  );
};

export default HeaderBottom;
