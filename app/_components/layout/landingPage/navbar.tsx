"use client";
import Link from "next/link";
import React, { useState } from "react";

const LandingPageNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            id="header"
            className="bg-transparent header-text-light"
            style={{
                marginBottom: '30px',
                // position: 'fixed',
                // top: 0,
                // left: 0,
                // right: 0,
                zIndex: 1000,
                width: '100vw',
                border: 'none',
                borderBottom: 'none',
                boxShadow: 'none',
                background: 'transparent'
            }}
        >
            <div
                className="container"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 15px',
                    width: '100%'
                }}
            >
                <div
                    className="header-row"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 0',
                        border: 'none',
                        borderBottom: 'none'
                    }}
                >
                    <div className="header-column justify-content-start" style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Logo */}
                        <div className="logo me-3">
                            <Link href="/" className="d-flex" title="Finasddee - HTML Template">
                                <img
                                    src="/assets/images/pic/logoRed.png"
                                    alt="finasddee"
                                    style={{ width: '180px' }}
                                />
                            </Link>
                        </div>

                        {/* Collapse Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Primary Navigation */}
                        <nav
                            className="primary-menu navbar navbar-expand-lg"
                            style={{
                                display: 'block',
                                marginLeft: '2rem',
                                visibility: 'visible'
                            }}
                        >
                            <div
                                id="header-nav"
                                className="collapse navbar-collapse"
                                style={{ display: 'block' }}
                            >
                                <ul
                                    className="navbar-nav me-auto"
                                    style={{
                                        display: 'flex',
                                        listStyle: 'none',
                                        margin: 0,
                                        padding: 0,
                                        alignItems: 'center'
                                    }}
                                >
                                    <li style={{ marginRight: '1.5rem' }}>
                                        <a
                                            href="#landing-page-send"
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '16px'
                                            }}
                                        >
                                            How it works
                                        </a>
                                    </li>
                                    <li style={{ marginRight: '1.5rem' }}>
                                        <a
                                            href="/faq"
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '16px'
                                            }}
                                        >
                                            Help
                                        </a>
                                    </li>
                                    <li style={{ marginRight: '1.5rem' }}>
                                        <a
                                            href="#network-section"
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                fontSize: '16px'
                                            }}
                                        >
                                            Our Network
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div
                        className="header-column justify-content-end"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            visibility: 'visible'
                        }}
                    >
                        {/* Login & Signup Link */}
                        <nav
                            className="login-signup navbar navbar-expand"
                            style={{ display: 'flex', visibility: 'visible' }}
                        >
                            <ul
                                className="navbar-nav"
                                style={{
                                    display: 'flex',
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: 0,
                                    alignItems: 'center'
                                }}
                            >
                                <li
                                    className="d-none d-lg-block"
                                    style={{
                                        display: 'block',
                                        marginRight: '1rem'
                                    }}
                                >
                                    <a
                                        href="/login"
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: '16px'
                                        }}
                                    >
                                        Login
                                    </a>
                                </li>
                                <li
                                    className="d-none d-lg-block align-items-center h-auto mt-3"
                                    style={{
                                        display: 'block',
                                        marginTop: '0.75rem'
                                    }}
                                >
                                    <a
                                        className="btn btn-primary"
                                        href="/signup"
                                        style={{
                                            backgroundColor: '#b8860b',
                                            color: 'white',
                                            textDecoration: 'none',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '4px',
                                            fontWeight: '500',
                                            border: '1px solid #b8860b'
                                        }}
                                    >
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black bg-opacity-90 backdrop-blur-sm">
                    <nav className="px-4 py-6 space-y-4">
                        <a
                            href="#landing-page-send"
                            className="block text-white hover:text-yellow-400 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            How it works
                        </a>
                        <a
                            href="/faq"
                            className="block text-white hover:text-yellow-400 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Help
                        </a>
                        <a
                            href="#network-section"
                            className="block text-white hover:text-yellow-400 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Network
                        </a>
                        <div className="pt-4 space-y-2">
                            <a
                                href="/login"
                                className="block text-center text-white transition-colors px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </a>
                            <a
                                href="/signup"
                                className="block text-center px-6 py-2 rounded text-white font-medium transition-colors"
                                style={{ backgroundColor: '#b8860b' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Register
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default LandingPageNavBar;
