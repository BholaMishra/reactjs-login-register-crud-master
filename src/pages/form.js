// import React, { useState } from 'react';
// import Header from '../elements/header';
// import Sidebar from '../elements/sidebar'

// function Eppform() {

//     // document.getElementById("submit").addEventListener("click", function (event) {
//     //     event.preventDefault();

//     //     checkData();
//     // });
//     // const [checkData, setcheckData] = useState("")

//     var username = document.getElementById("username");
//     var email = document.getElementById("email");
//     var pass1 = document.getElementById("pass1");
//     var pass2 = document.getElementById("pass2");

//     function checkData() {
//         var usernameValue = username.value.trim();
//         var emailValue = email.value.trim();
//         var pass1Value = pass1.value.trim();
//         var pass2Value = pass2.value.trim();

//         if (usernameValue == "") {
//             setError(username, "Username can't be blank");
//         } else {
//             setSuccess(username);
//         }

//         if (emailValue == "") {
//             setError(email, "Email can't be blank");
//         }
//         else if (!isEmail(emailValue)) {
//             setError(email, "Email is not Valid");
//         }
//         else {
//             setSuccess(email);
//         }


//         if (pass1Value == "") {
//             setError(pass1, "Password can't be blank");
//         } else {
//             setSuccess(pass1);
//         }


//         if (pass2Value == "") {
//             setError(pass2, "Password can't be blank");
//         }
//         else if (pass1Value !== pass2Value) {
//             setError(pass2, "Password does not match");
//         }
//         else {
//             setSuccess(pass2);
//         }


//     }


//     function setError(u, msg) {
//         var parentBox = u.parentElement;
//         parentBox.className = "input-field error";
//         var span = parentBox.querySelector("span");
//         var fa = parentBox.querySelector(".fa");
//         span.innerText = msg;
//         fa.className = "fa fa-exclamation-circle";
//     }

//     function setSuccess(u) {
//         var parentBox = u.parentElement;
//         parentBox.className = "input-field success";
//         var fa = parentBox.querySelector(".fa");
//         fa.className = "fa fa-check-circle";
//     }

//     function isEmail(e) {
//         var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return reg.test(e);
//     }

//     return (
//         <>
//             <div>
//                 <Header />
//                 <div id="wrapper">
//                     <Sidebar></Sidebar>
//                     <div id="content-wrapper">
//                         <div className="container-fluid">
//                             <ol className="breadcrumb">
//                                 <form onChange={checkData}>
//                                     <div class="container">
//                                         <div class="form-box">
//                                             <h2>Create Your Account</h2>

//                                             <div class="input-field">
//                                                 <label for="">Username</label>
//                                                 <input type="text" id="username" placeholder="username" />
//                                                 <i class="fa " aria-hidden="true"></i>
//                                                 <span></span>
//                                             </div>

//                                             <div class="input-field">
//                                                 <label for="">Email</label>
//                                                 <input type="text" id="email" placeholder="email address" />

//                                                 <i class="fa " aria-hidden="true"></i>
//                                                 <span></span>
//                                             </div>

//                                             <div class="input-field">
//                                                 <label for="">Password</label>
//                                                 <input type="text" id="pass1" placeholder="password" />
//                                                 <i class="fa " aria-hidden="true"></i>
//                                                 <span></span>
//                                             </div>

//                                             <div class="input-field">
//                                                 <label for="">Confirm Password</label>
//                                                 <input type="text" id="pass2" placeholder="confirm password" />
//                                                 <i class="fa " aria-hidden="true"></i>
//                                                 <span></span>
//                                             </div>

//                                             <input type="submit" id="submit" value="Submit" />
//                                         </div>
//                                     </div>
//                                 </form>
//                             </ol>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Eppform;
