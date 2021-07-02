import React, { useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import './TermsAndService.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useLocation } from 'react-router-dom';

const TermsAndService = () => {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    const { pathname, } = useLocation();
    let path = null;
    if (pathname === '/terms') {
        path = 'Terms of Service'
    }
    if (pathname === '/privacy') {
        path = 'Privacy Policy'
    }
    return (
        <section style={{ background: '#f7f7f7' }}>
            <Navbar color='white' sticky={isSticky} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="terms-header-title">
                            <h2>{path}</h2>
                            <p>Last updated: 1/07/2021</p>
                        </div>
                        <div className="terms-sidebar-bar sticky-top">
                            <ul>
                                <li>
                                    <AnchorLink offset='200' href='#purpose'>Purpose</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset='100' href='#personal-data'>What is Personal Data?</AnchorLink>

                                </li>
                                <li>
                                    <AnchorLink offset='100' href='#data-collected'>Personal Data Collected</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset='100' href='#data-accessing'>Accessing Your Data</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset='100' href='#complaint'>Complaint</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset='100' href='#Owner'>Owner and Data Controller</AnchorLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-9">
                        <div className="privacy-data">
                            <div className="Purpose mb-5" id="purpose">
                                <h3>Purpose</h3>
                                <p>
                                    Little & Big is committed to protecting your privacy because we are committed to valuing people. Our Privacy Policy below sets out how your personal information is collected, used and protected. The Demo Country Privacy Principles also apply to us.</p>
                                <p>
                                    This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy.
                                </p>
                            </div>
                            <div className="Personal-Data mb-3" id="personal-data">
                                <h3>What is Personal Data?</h3>
                                <p>
                                    When used in this Policy, "personal information" has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you.
                                </p>
                            </div>
                            <div className="Personal-Data-Collected mb-5" id="data-collected">
                                <h3>Personal Data Collected</h3>
                                <p>
                                    Personal Data collected for the following purposes and using the following services:
                                </p>
                                <div className="ps-4">
                                    <p>
                                        Google Analytics: Cookies; Usage Data
                                    </p>
                                    <p>
                                        Contact form: email address; first name; phone number
                                    </p>
                                    <p>
                                        Mailing list or newsletter: email address; first name
                                    </p>
                                </div>
                            </div>
                            <div className="Accessing-Personal-Data mb-5" id="data-accessing">
                                <h3>Accessing your Personal Data</h3>
                                <p>
                                    You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.
                                </p>
                            </div>
                            <div className="Complaints mb-5" id="complaint">
                                <h3>Complaints</h3>
                                <p>
                                    If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing. We will respond within a reasonable period (usually within 30 days).
                                </p>
                            </div>
                            <div className="Owner-and-Data-Controller mb-5" id="Owner">
                                <h3>Owner and Data Controller</h3>
                                <p>
                                    Shihab Milky
                                    <br />
                                    Netrakona,
                                    <br />
                                    Bangladesh
                                </p>
                                <br />
                                <p>
                                    Email: shihabmilky1gmail.com
                                </p>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default TermsAndService;