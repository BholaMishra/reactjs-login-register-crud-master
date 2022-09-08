// // import React from 'react'


// // const LoginForm=()=>{

// //     const{useState}=React;

// //     const[tick,settick]=useState(false);
// //     const[inputtext,setinputtext]=useState({
// //         name:"",
// //         email:"",
// //         password:"",

// //     });
// //     const[warnemail,setwarnemail]=useState(false);
// //     const[warnname,setwarnname]=useState(false);
// //     const[warnpassword,setwarnpassword]=useState(false);

// //     const[eye,seteye]=useState(true);
// //     const[passtype,setpasstype]=useState("password");
// //     const[passred,setpassred]=useState(false); 


// //     const [none,setnone]=useState(true);


// //     const inputEvent=(event)=>{
// //         const name=event.target.name;
// //         const value=event.target.value;
// //         if(name=="password"){
// //             if(value.length>0){
// //                 setnone(false);
// //             }
// //             else{
// //                 setnone(true);
// //             }
// //         }
// //         setinputtext((lastValue)=>{
// //             return{ 
// //                 ...lastValue,
// //                 [name]:value
// //             }

// //         });
// //     }

// //     const submitForm=(e)=>{ 
// //         e.preventDefault();
// //         setwarnname(false);
// //         setwarnemail(false);
// //         setwarnpassword(false);
// //         if(inputtext.name==""){
// //             setwarnname(true);
// //         }
// //         else if(inputtext.email==""){
// //             setwarnemail(true);
// //         }
// //         else if(inputtext.password==""){
// //             setwarnpassword(true);
// //         }
// //         else{
// //             alert("form has been successfully submitted");
// //         }
// //     }


// //     const Tick=()=>{
// //     if(tick==true){
// //     settick(false);
// //     }
// //     else{ 
// //     settick(true);
// //     }
// //     }



// //     const Eye=()=>{
// //         if(passtype=="password"){
// //             setpasstype("text"); 
// //             seteye(false);
// //             setpassred(true);
// //         }
// //         else{
// //             setpasstype("password");
// //             seteye(true);
// //             setpassred(false);
// //         }
// //     }


// //     return(
// //     <>
// //         <div className="container">
// //             <div className="card"> 
// //                 <div className="top_part">
// //                     <h3><i>Start a 7-Day Free Trial</i> </h3> 
// //                     <h5>No credit card required.Access all our features! Already ahve an account? <a href="#">Signin</a> </h5>
// //                 </div>

// //                 <form onSubmit={submitForm}>   

// //                 <div className="input_text">
// //                     <input type="text" className={` ${warnname ? "warning" : " " }`} name="name" value={inputtext.name} onChange={inputEvent}  /> 
// //                     <label>Your Name</label>
// //                 </div>
// //                 <div className="input_text">
// //                     <input type="text"  className={` ${warnemail ? "warning" : " " }`}  name="email" value={inputtext.email} onChange={inputEvent}   />
// //                     <label>Email address</label>
// //                 </div> 
// //                 <div className="input_text">
// //                     <input type={passtype}  className={` ${warnpassword ? "warning" : " " } ${passred ? "passwarning" : ""}`}   name="password" value={inputtext.password} onChange={inputEvent}   />
// //                     <label>Password</label>
// //                     <i  onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" } ${none ? "d-none" : ""}`}></i>
// //                 </div>
// //                 <div className="tandc">
// //                     <div className="terms">
// //                         <span onClick={Tick} className={` ${tick ? "tick" : "" }`}><i className="fa fa-check"></i></span> 
// //                         <h5>Accept our terms<br /> and conditions</h5>
// //                     </div>
// //                     <button type="submit">Sign Up</button>
// //                 </div>

// //                 </form>

// //                 <div className="copyright">
// //                     <i className="fa fa-copyright"></i>
// //                     <h5>Copyright 2003-2019</h5>
// //                 </div>
// //             </div>

// //         </div>

// //     </>

// //     );
// //     }
// //     export default LoginForm
// //     // ReactDOM.render(
// //     // <LoginForm />,document.getElementById("root"));



// import React from 'react'
// import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// const Login = ({ handleChange }) => {

//     const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
//     const avatarStyle = { backgroundColor: '#1bbd7e' }
//     const btnstyle = { margin: '8px 0' }
//     return (
//         <Grid className="loginedit">
//             <Paper style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}>
//                         {/* <LockOutlinedIcon/> */}
//                     </Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label='Username' placeholder='Enter username' fullWidth required />
//                 <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             name="checkedB"
//                             color="primary"
//                         />
//                     }
//                     label="Remember me"
//                 />

// <Button  type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
//     <Link to={'/epp'} >
//         Sign in
//     </Link>
//                 </Button>
//                 <Typography >
//                     <Link href="#" >
//                         Forgot password ?
//                     </Link>
//                 </Typography>
//                 <Typography > Do you have an account ?
//                     <Link to={"register"} onClick={() => handleChange("event", 1)} >
//                         Sign Up
//                     </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default Login

import React, { useState, useEffect } from "react";
import {Button , Link, } from '@material-ui/core'
// import basestyle from "../Base.module.css";
// import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, useHistory } from 'react-router-dom'
import { NavLink } from "react-router-dom";
const Login = ({ setUserState }) => {
    //   const navigate = useNavigate();
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
        // if (!formErrors) {

        // }
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
                <p
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
                <p
                // className={basestyle.error}
                >{formErrors.password}</p>


                <Button type='submit' color='primary' variant="contained" onClick={loginHandler} fullWidth>
                    {/* <Link to='/epp' >
                        Sign in
                    </Link> */}
                    <NavLink to="/epp" color="white" >Signin</NavLink>
                    </Button>
                    {/* <button
                         className={basestyle.button_common}
                        onClick={loginHandler}>
                        Login
                    </button> */}
            </form>
            <NavLink to="/register">Not yet registered?  Register Now</NavLink>
        </div>
    );
};
export default Login;