import React from "react";
import '../App.css';

const Navbar = () => {
    return (
        <div className='mobileNav'>
            <header className=" row">
                <nav className="row">
                    <img
                        data-tip='Applicants'
                        className='members-icon'
                        src="https://covey.io/images/communities/members.svg"
                        alt="Members/Seats-Filled" />
                </nav>
            </header>
        </div>
    );
};
export default Navbar;