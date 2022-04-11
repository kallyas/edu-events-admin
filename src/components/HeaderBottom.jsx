import React, { useState } from 'react';
import { Routes } from '../routes';
import { useLocation } from 'react-router-dom';
import {
  IconUsers,
  IconListDetails,
  IconLayoutDashboard,
  IconCalendarEvent,
  IconApps,
} from '@tabler/icons';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const HeaderBottom = ({ expandMenu }) => {
  const [expandEvents, setExpandEvents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  //handle events dropdown show
  const handleEventsDropdownShow = () => setExpandEvents(!expandEvents);
  //handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const location = useLocation();
  const { pathname } = location;
  const isDashboard = pathname === '/dashboard';
  const isUsers = pathname.includes('/dashboard/users');
  const isEnrollments = pathname.includes('/dashboard/enrollments');
  const isEvents = pathname.includes('/dashboard/events');
  const isProjects = pathname.includes('/dashboard/projects');

  //
  //const isActive = pathname === '/dashboard' ? 'active' : pathname.includes('/dashboard/users') ? 'active' : pathname.includes('/dashboard/enrollments') ? 'active' : pathname.includes('/dashboard/events') ? 'active' : pathname.includes('/dashboard/projects') ? 'active' : '';

  return (
    <div className="navbar-expand-md">
      <div className={`collapse navbar-collapse ${expandMenu ? 'show' : ''}`} id="navbar-menu">
        <div className="navbar navbar-light">
          <div className="container-xl">
            <ul className="navbar-nav">
              <li className={`nav-item ${isDashboard ? 'active' : ''}`}>
                <Link className="nav-link" to="/dashboard">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconLayoutDashboard />
                  </span>
                  <span className="nav-link-title">Dashboard</span>
                </Link>
              </li>
              <li className={`nav-item dropdown ${isEvents ? 'active' : ''}`}>
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
              <li className={`nav-item ${isUsers ? 'active' : ''}`}>
                <Link className="nav-link" to={'/dashboard/users'}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconUsers />
                  </span>
                  <span className="nav-link-title">Users</span>
                </Link>
              </li>
              <li className={`nav-item ${isProjects ? 'active' : ''}`}>
                <Link className="nav-link" to={'/dashboard/projects'}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconApps />
                  </span>
                  <span className="nav-link-title">Projects</span>
                </Link>
              </li>
              <li className={`nav-item ${isEnrollments ? 'active' : ''}`}>
                <Link className="nav-link" to={'/dashboard/enrollments'}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <IconListDetails />
                  </span>
                  <span className="nav-link-title">Enrollments</span>
                </Link>
              </li>
            </ul>
            <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last logo-side">
              <SearchBar
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                name="searchQuery"
                label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
