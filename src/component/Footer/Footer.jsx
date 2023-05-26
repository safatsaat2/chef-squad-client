import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <Link><a className="btn btn-ghost normal-case text-2xl">Chef Squad</a></Link>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                       <Link to={'/'}>Home</Link>
                       <Link to={'/blog'}>Blog</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;