import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eduLogo from '../assets/images/android-chrome-512x512-removebg-preview.png';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expand, setExpand] = useState(false);
    const [expandEvents, setExpandEvents] = useState(false);
    const { currentUser } = useAuth();

    //handle dropdown show
    const handleDropdownShow = () => {
        setExpand(!expand);
    }

    //handle events dropdown show
    const handleEventsDropdownShow = () => {
        setExpandEvents(!expandEvents);
    }

    return (
        <>
            <header className="navbar navbar-expand-md navbar-light d-print-none">
                <div className="container-xl">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <Link to='/dashboard'>
                            <img src={eduLogo} height="50" alt="OutBox EDU" className="navbar-brand-image" />
                        </Link>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="d-none d-md-flex">
                            <Link to="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
                                {/* <!-- Download SVG icon from http://tabler-icons.io/i/moon --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                            </Link>
                            <Link to="?theme=light" className="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
                                {/* <!-- Download SVG icon from http://tabler-icons.io/i/sun --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="4" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
                            </Link>
                            <div className="nav-item dropdown d-none d-md-flex me-3">
                                <Link to='#' className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">
                                    {/* <!-- Download SVG icon from http://tabler-icons.io/i/bell --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                                    <span className="badge bg-red"></span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Last updates</h3>
                                        </div>
                                        <div className="list-group list-group-flush list-group-hoverable">
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to='#' className="text-body d-block">Example 1</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Change deprecated html tags to text decoration classes (#29604)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to='#' className="list-group-item-actions">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to='#' className="text-body d-block">Example 2</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            justify-content:between ⇒ justify-content:space-between (#29734)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to='#' className="list-group-item-actions show">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to='#' className="text-body d-block">Example 3</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Update change-version.js (#29736)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to='#' className="list-group-item-actions">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto"><span className="status-dot status-dot-animated bg-green d-block"></span></div>
                                                    <div className="col text-truncate">
                                                        <Link to='#' className="text-body d-block">Example 4</Link>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Regenerate package-lock.json (#29730)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to='#' className="list-group-item-actions">
                                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
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
                            <Link to='#' onClick={handleDropdownShow} className={`nav-link d-flex lh-1 text-reset p-0 ${expand ? 'show' : ''}`} data-bs-toggle="dropdown" aria-label="Open user menu" aria-expanded={expand}>
                                <span className="avatar avatar-sm" ></span>
                                {/* style={{backgroundImage: url('./static/avatars/000m.jpg')}} */}
                                <div className="d-none d-xl-block ps-2">
                                    <div>{currentUser.email}</div>
                                    <div className="mt-1 small text-muted">Admin</div>
                                </div>
                            </Link>
                            <div className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow ${expand ? 'show' : ''}`} data-bs-popper={expand ? 'none' : ''}>
                                <Link to='#' className="dropdown-item">Set status</Link>
                                <Link to='#' className="dropdown-item">Profile & account</Link>
                                <Link to='#' className="dropdown-item">Feedback</Link>
                                <div className="dropdown-divider"></div>
                                <Link to='#' className="dropdown-item">Settings</Link>
                                <Link to='#' className="dropdown-item">Logout</Link>
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
                                    <Link className="nav-link" to="/dashboard" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/home --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4h6v8h-6z"></path>
                                                <path d="M4 16h6v4h-6z"></path>
                                                <path d="M14 12h6v8h-6z"></path>
                                                <path d="M14 4h6v4h-6z"></path>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link dropdown-toggle ${expandEvents ? 'show' : ''}`} to="#" onClick={handleEventsDropdownShow} data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded={expand} >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/package --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                                <rect x="8" y="15" width="2" height="2"></rect>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Events
                                        </span>
                                    </Link>
                                    <div className={`dropdown-menu ${expandEvents ? 'show' : ''}`} data-bs-popper={expandEvents ? 'none' : ''}>
                                        <div className="dropdown-menu-columns">
                                            <div className="dropdown-menu-column">
                                                <Link className="dropdown-item" to="/" >
                                                    Event List
                                                </Link>
                                                <div className="dropdown-divider"></div>
                                                <Link className="dropdown-item" to="/" >
                                                    Event Calender
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/checkbox --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Users
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#navbar-extra" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                <line x1="14" y1="7" x2="20" y2="7"></line>
                                                <line x1="17" y1="4" x2="17" y2="10"></line>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Projects
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/file-text --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M13 5h8"></path>
                                                <path d="M13 9h5"></path>
                                                <path d="M13 15h8"></path>
                                                <path d="M13 19h5"></path>
                                                <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                                                <rect x="3" y="14" width="6" height="6" rx="1"></rect>
                                            </svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Enrollments
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                                <form>
                                    <div className="input-icon">
                                        <span className="input-icon-addon">
                                            {/* <!-- Download SVG icon from http://tabler-icons.io/i/search --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
                                        </span>
                                        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="form-control" placeholder="Search…" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar