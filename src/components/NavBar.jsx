import React from "react";
import { NavLink, Link,useNavigate  } from "react-router-dom";

const NavBar = (props) => {
    const { jwt, updateJwt } = props;
    const navigate = useNavigate();

    const logOut = () => {
        updateJwt('');
        navigate('/');
        alert('Logged Out Successfully');
    };

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary rounded' style={{backgroundColor: "#e3f2fd"}}>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    MicroTaskBidz
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarNavAltMarkup'
                >
                    <div className='navbar-nav'>
                        <NavLink
                            className='nav-link active'
                            aria-current='page'
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink className='nav-link' to='/tasks'>
                            Tasks
                        </NavLink>
                        {jwt ? (
                            <NavLink className='nav-link' to='/profile'>
                                Profile
                            </NavLink>
                        ) : (
                            <NavLink className='nav-link' to='/login'>
                                Login
                            </NavLink>
                        )}
                        {jwt ? (
                            <NavLink className='nav-link' onClick={logOut}>
                                Log Out
                            </NavLink>
                        ) : (
                            <NavLink className='nav-link' to='/signup'>
                                Sign Up
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
