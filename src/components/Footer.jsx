import React from 'react'
import moment from "moment-timezone";
import eduLogo from '../assets/images/android-chrome-512x512-removebg-preview.png';
import OutBoxLogo from "../assets/images/outbox-removebg-preview.png"

const Footer = () => {
    const currentYear = moment().get("year");
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item logo-side">
                                <img src={OutBoxLogo} height="20" alt="OutBox EDU" className="navbar-brand-image" />
                                <img src={eduLogo} height="20" alt="OutBox EDU" className="navbar-brand-image" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0 text-muted-mod">
                            <li className="list-inline-item">
                                Copyright &copy; {currentYear} OutBox EDU
                                All rights reserved.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer