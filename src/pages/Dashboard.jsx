import React from 'react';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconCurrencyDollar,
  IconMinus,
  IconPlus,
  IconShoppingCart,
  IconTrendingUp,
} from '@tabler/icons';
import { Footer, NavBar } from '../components';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="page-wrapper">
        <div className="container-xl">
          {/* <!-- Page title --> */}
          <div className="page-header d-print-none">
            <div className="row align-items-center">
              <div className="col">
                {/* <!-- Page pre-title --> */}
                <div className="page-pretitle">Overview</div>
                <h2 className="page-title">Dashboard</h2>
              </div>
              {/* <!-- Page title actions --> */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <a
                    href="/#"
                    className="btn btn-primary d-none d-sm-inline-block"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-report"
                  >
                    <IconPlus />
                    Create new Event
                  </a>
                  <a
                    href="/#"
                    className="btn btn-primary d-sm-none btn-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-report"
                    aria-label="Create new report"
                  >
                    <IconPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Events</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="/#"
                            data-bs-toggle="dropdown"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="/#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h1 mb-3">75%</div>
                    <div className="d-flex mb-2">
                      <div>Conversion rate</div>
                      <div className="ms-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          <IconTrendingUp />
                        </span>
                      </div>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-blue"
                        style={{ width: 75 }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="visually-hidden">75% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Projects</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="/#"
                            data-bs-toggle="dropdown"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="/#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 me-2">$4,300</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          <IconTrendingUp />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="chart-revenue-bg" className="chart-sm"></div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Enrollments</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="/#"
                            data-bs-toggle="dropdown"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="/#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">6,782</div>
                      <div className="me-auto">
                        <span className="text-yellow d-inline-flex align-items-center lh-1">
                          <IconMinus />
                        </span>
                      </div>
                    </div>
                    <div id="chart-new-clients" className="chart-sm"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">users</div>
                      <div className="ms-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="/#"
                            data-bs-toggle="dropdown"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item active" href="/#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="/#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 me-2">2,986</div>
                      <div className="me-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          <IconTrendingUp />
                        </span>
                      </div>
                    </div>
                    <div id="chart-active-users" className="chart-sm"></div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row row-cards">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-blue text-white avatar">
                              <IconCurrencyDollar />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">132 Sales</div>
                            <div className="text-muted">12 waiting payments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-green text-white avatar">
                              <IconShoppingCart />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">78 Orders</div>
                            <div className="text-muted">32 shipped</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-twitter text-white avatar">
                              <IconBrandTwitter />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">623 Shares</div>
                            <div className="text-muted">16 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="bg-facebook text-white avatar">
                              <IconBrandFacebook />
                            </span>
                          </div>
                          <div className="col">
                            <div className="font-weight-medium">132 Likes</div>
                            <div className="text-muted">21 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
