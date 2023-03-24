import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(email.current.value, password.current.value);
        axios
            .post("https://microtaskbidz.cyclic.app/user/", {
                name: `${name.current.value}`,
                email: `${email.current.value}`,
                password: `${password.current.value}`,
            })
            .then((res) => {
                //console.log(res);
                if (res.status === 200) {
                    navigate("/");
                    axios
                        .post("https://microtaskbidz.cyclic.app/user/signin", {
                            email: `${email.current.value}`,
                            password: `${password.current.value}`,
                        })
                        .then((res) => {
                            console.log(res);
                            if (res.status === 200) {
                                props.setCookie("jwt", res.data.token);
                                props.updateJwt(res.data.token);
                                alert('Signed Up Successfully');
                            }
                        })
                        .catch((e) => {
                            console.log("error", e);
                        });
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
        <div className='row mt-2' style={{ justifyContent: "center" }}>
            <form className='col-3' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        ref={name}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Email address
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        ref={email}
                    />
                    <div id='emailHelp' className='form-text'>
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='exampleInputPassword1'
                        className='form-label'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        ref={password}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUp;
