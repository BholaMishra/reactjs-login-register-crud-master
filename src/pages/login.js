import React, { useState, useEffect } from "react";
import { Button, Link, } from '@material-ui/core'
import axios from "axios";
import { useNavigate, useHistory } from 'react-router-dom'
import { NavLink } from "react-router-dom";


const Login = ({ setUserState }) => {
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "Please enter a valid email address";
        }
        if (!values.password) {
            error.password = "Password is required";
        }
        return error;
    };

    const loginHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);

    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            axios.post(" ", user).then((res) => {
                alert(res.data.message);
                setUserState(res.data.user);
                history("/", { replace: true });
            });
        }
    }, [formErrors]);
    return (
        <div
            className='login'
        >
            <form>
                <h1>Login</h1>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    value={user.email}
                />
                <p className='FormErrorss' 
                // className={basestyle.error}
                >{formErrors.email}</p>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={changeHandler}
                    value={user.password}
                />
                <p className='FormErrorss'
                // className={basestyle.error}
                >{formErrors.password}</p>
                <Button type='submit' color='primary' variant="contained" onClick={loginHandler} fullWidth>
                    {/* <NavLink to="/epp" color="white" > */}
                        Signin
                        {/* </NavLink> */}
                </Button>
            </form>
            <NavLink to="/register">Not yet registered?  Register Now</NavLink>
        </div>
    );
};
export default Login;