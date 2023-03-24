import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email.current.value, password.current.value);
        axios
            .post("https://microtaskbidz.cyclic.app/user/signin", {
                email: `${email.current.value}`,
                password: `${password.current.value}`,
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    props.setCookie("jwt", res.data.token);
                    props.updateJwt(res.data.token);
                    navigate("/");
                    alert("Logged In Successfully");
                }
            })
            .catch((e) => {
                console.log("error", e);
            });
    };

    useEffect(() => {
        if (props.getCookie("jwt")) {
            navigate("/");
        }
    });

    return (
        <section className='mt-5'>
            <div className='container-fluid h-custom'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-md-9 col-lg-6 col-xl-5'>
                        <img
                            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
                            className='img-fluid'
                            alt='MicroTask Login'
                        />
                    </div>
                    <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 '>
                        <form className='mt-5' onSubmit={handleSubmit}>
                            <div className='d-flex flex-row align-items-center justify-content-center justify-content-lg-start'>
                                <p className='lead fw-normal mb-0 me-3'>
                                    Sign in with
                                </p>
                                <i className='fa fa-facebook-square fa-2x mx-1'></i>
                                <i className='fa fa-twitter-square fa-2x mx-1'></i>
                                <i className='fa fa-google fa-2x mx-1'></i>
                            </div>

                            <div className='divider d-flex align-items-center my-4'>
                                <p className='text-center fw-bold mx-3 mb-0'>
                                    Or
                                </p>
                            </div>

                            <div className='form-outline mb-4'>
                                <input
                                    type='email'
                                    id='emailInput'
                                    className='form-control form-control-lg'
                                    placeholder='Enter a valid email address'
                                    ref={email}
                                />
                                <label
                                    className='form-label mt-1'
                                    htmlFor='emailInput'
                                >
                                    Email address
                                </label>
                            </div>

                            <div className='form-outline mb-3'>
                                <input
                                    type='password'
                                    id='emailPassword'
                                    className='form-control form-control-lg'
                                    placeholder='Enter password'
                                    ref={password}
                                />
                                <label
                                    className='form-label mt-1'
                                    htmlFor='emailPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='form-check mb-0'>
                                    <input
                                        className='form-check-input me-2'
                                        type='checkbox'
                                        value=''
                                        id='form2Example3'
                                    />
                                    <label
                                        className='form-check-label'
                                        htmlFor='form2Example3'
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    href='#!'
                                    className='text-body text-decoration-none '
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <div className='text-center text-lg-start mt-4 pt-2'>
                                <button
                                    type='button'
                                    className='btn btn-primary btn-lg text-center'
                                    style={{
                                        paddingLeft: "2.5rem",
                                        paddingRight: "2.5rem",
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                                <p className='small fw-bold mt-2 pt-1 mb-0'>
                                    Don't have an account?{" "}
                                    <Link
                                        to='/signup'
                                        className='link-danger'
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
