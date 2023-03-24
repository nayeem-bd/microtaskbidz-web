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
        <nav className='navbar navbar-expand-lg bg-body-tertiary rounded mt-3'>
            <div className='container-fluid'>
                <Link className='navbar-brand fw-bold' to='/'>
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
                    <div className='navbar-nav mx-4'>
                        <NavLink
                            className='nav-link'
                            aria-current='page'
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink className='nav-link mx-3' to='/tasks'>
                            Tasks
                        </NavLink>
                        {jwt ? (
                            <NavLink className='nav-link mx-3 ms-1' to='/profile'>
                                Profile
                            </NavLink>
                        ) : (
                            <NavLink className='nav-link mx-3 px-4 border rounded border-primary border-opacity-50' to='/login'>
                                Login
                            </NavLink>
                        )}
                        {jwt ? (
                            <NavLink className='nav-link mx-3 px-4 border rounded border-primary border-opacity-50' onClick={logOut}>
                                Log Out
                            </NavLink>
                        ) : (
                            <NavLink className='nav-link bg-primary px-4 rounded ms-2' to='/signup' style={{color:'white'}}>
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
