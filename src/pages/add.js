// // import React, {Component} from 'react';
// // import Header from "../elements/header";
// // import Sidebar from "../elements/sidebar";
// // import {Link, Redirect} from "react-router-dom";
// // import axios from 'axios';

// // export default class AddPage extends Component {

// //     state = {
// //         redirect: false,
// //         toDashboard: false,
// //         isLoading: false
// //     };

// //     handleSubmit = event => {
// //         event.preventDefault();
// //         this.setState({isLoading: true});
// //         const token = localStorage.getItem('token');
// //         const url = 'https://gowtham-rest-api-crud.herokuapp.com/employees';
// //                     //  https://gowtham-rest-api-crud.herokuapp.com/employees
// //         const name = document.getElementById('inputName').value;
// //         const phone = document.getElementById('inputPhone').value;
// //         const email = document.getElementById('inputEmail').value;
// //         const location = document.getElementById('inputLoca').value;
// //         const empid = document.getElementById('inputEmpId').value;
// //         const company = document.getElementById('inputComp').value;

// //         let bodyFormData = new FormData();
// //         bodyFormData.set('name', name);
// //         bodyFormData.set('phone', phone);
// //         bodyFormData.set('email', email);
// //         bodyFormData.set('location', location);
// //         bodyFormData.set('emp_id', empid);
// //         bodyFormData.set('company', company);
// //         bodyFormData.set('token', token);
// //         axios.post(url, bodyFormData)
// //             .then(result => {
// //                 if (result.data.status) {
// //                     this.setState({redirect: true, isLoading: false})
// //                 }
// //             })
// //             .catch(error => {
// //                 this.setState({ toDashboard: true });
// //                 console.log(error);
// //             });
// //     };

// //     renderRedirect = () => {
// //         if (this.state.redirect) {
// //             return <Redirect to='/dashboard' />
// //         }
// //     };

// //     render() {
// //         const isLoading = this.state.isLoading;
// //         if (this.state.toDashboard === true) {
// //             return <Redirect to='/' />
// //         }
// //         return (
// //             <div>
// //                 <Header/>
// //                 <div id="wrapper">
// //                     <Sidebar></Sidebar>
// //                     <div id="content-wrapper">
// //                         <div className="container-fluid">
// //                             <ol className="breadcrumb">
// //                                 <li className="breadcrumb-item">
// //                                     <Link to={'/dashboard'} >Dashboard</Link>
// //                                 </li>
// //                                 <li className="breadcrumb-item active">Add</li>
// //                             </ol>
// //                         </div>
// //                         <div className="container-fluid">
// //                             <div className="card mx-auto">
// //                                 <div className="card-header">Employee Add</div>
// //                                 <div className="card-body">
// //                                     <form onSubmit={this.handleSubmit}>
// //                                         <div className="form-group">
// //                                             <div className="form-row">
// //                                                 <div className="col-md-6">
// //                                                     <div className="form-label-group">
// //                                                         <input type="text" id="inputName" className="form-control" placeholder="Enter name" required="required" autoFocus="autofocus" />
// //                                                         <label htmlFor="inputName">Enter name</label>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div className="col-md-6">
// //                                                     <div className="form-label-group">
// //                                                         <input type="number" id="inputPhone" className="form-control" placeholder="Enter Phone" required="required" />
// //                                                         <label htmlFor="inputPhone">Enter Phone</label>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                         <div className="form-group">
// //                                             <div className="form-row">
// //                                                 <div className="col-md-6">
// //                                                     <div className="form-label-group">
// //                                                         <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" />
// //                                                         <label htmlFor="inputEmail">Email address</label>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div className="col-md-6">
// //                                                     <div className="form-label-group">
// //                                                         <input type="text" id="inputComp" className="form-control" placeholder="Enter Company" required="required"/>
// //                                                         <label htmlFor="inputComp">Enter Company</label>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                         <div className="form-group">
// //                                             <div className="form-row">
// //                                                 <div className="col-md-6">
// //                                                     <div className="form-label-group">
// //                                                         <input type="number" id="inputEmpId" className="form-control" placeholder="Enter Emp ID" required="required" />
// //                                                         <label htmlFor="inputEmpId">Enter Emp ID</label>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div className="col-md-6">
// //                                                     <div className="form-label-group">
// //                                                         <input type="text" id="inputLoca" className="form-control" placeholder="Enter Location" required="required"/>
// //                                                         <label htmlFor="inputLoca">Enter Location</label>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                         <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Add Employee &nbsp;&nbsp;&nbsp;
// //                                             {isLoading ? (
// //                                                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
// //                                              ) : (
// //                                                  <span></span>
// //                                              )}
// //                                         </button>
// //                                     </form>
// //                                     {this.renderRedirect()}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <footer className="sticky-footer">
// //                             <div className="container my-auto">
// //                                 <div className="copyright text-center my-auto">
// //                                     <span>Copyright © Your Website 2022<div>{(new Date().getFullYear())}</div></span>
// //                                 </div>
// //                             </div>
// //                         </footer>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
// // import React, { useState, Paper } from 'react';
// // import Header from "../elements/header";
// // import Suseridebar from "../elements/suseridebar";
// // import { Link } from 'react-router-dom';
// // import moment from "moment"
// // import axios from "axios";


// // const Auctiont2 = () => {

// //     const [user_startDate, setUser_Name] = useState("");
// //     const [district, setDistrict] = useState("");
// //     const [taluka, setTaluka] = useState("");
// //     const [village, setVillage] = useState("");
// //     const [endDate, setendDate] = useState("");

// //     const [startDate, setstartDate] = useState("");

// //     const [user_userid, setUser_userid] = useState("");
// //     const [group_userid, setGroup_userid] = useState("");
// //     const [survey_number, setSurvey_number] = useState("");

// //     const [user_ID, setUserID] = useState("");
// //     const [UserName, setUserName] = useState("");
// //     function saveData() {

// //         let data =
// //             { startDate, endDate }

// //         var myHeaders = new Headers();
// //         myHeaders.append("Content-Type", "application/json");

// //         var raw = JSON.stringify({
// //             startDate, endDate,
// //             "user": null
// //         });

// //         var requestOptions = {
// //             method: 'PUT',
// //             headers: myHeaders,
// //             body: raw,
// //             redirect: 'follow'
// //         };

// //         fetch("https://qaapi.jahernotice.com/api/auction/update/71", requestOptions)
// //             .then(response => response.text())
// //             .then(result => console.log("Add", result))
// //         // .catch(error => console.log('error', error));
// //     }



// //     return (
// //         <>
// //             <div>
// //                 <Header />
// //                 <div userid="wrapper">
// //                     <Suseridebar></Suseridebar>
// //                     <div userid="content-wrapper">
// //                         <div className="container-fluuserid">
// //                             <ol className="breadcrumb">
// //                                 <li className="breadcrumb-item">
// //                                     <Link to={'/dashboard'} >Dashboard</Link>
// //                                 </li>
// //                                 <li className="breadcrumb-item active">Overview</li>
// //                             </ol>
// //                         </div>

// //                         <div className="container-fluuserid">
// //                             <ol className="breadcrumb">
// //                                 <form>
// //                                     {/* <div className='Box' style={{ height: '100%', weight: '100%', pading: '5%' }}> */}
// //                                     {/* <div className="App"> */}

// //                                     <div className="form-group">
// //                                         <label for="usr">Start_Date</label>
// //                                         <input type="date" startDate="startDate" value={startDate} onChange={(e) => { setstartDate(e.target.value) }} class="form-control" userid="usr" placeholder="Start_Date" required />
// //                                     </div>
// //                                     <div className="form-group" >
// //                                         <label for="usr">End_Date</label>
// //                                         <input type="date" startDate="end_date" value={endDate} onChange={(e) => { setendDate(e.target.value) }} class="form-control" userid="usr" placeholder="End_Date" required />
// //                                     </div>
// //                                     <div className="form-group" >
// //                                         {/* <input type="text" startDate="user_userid"  value={user_userid} onChange={(e)=>{setUser_userid(e.target.value)}} /> <br /> <br /> */}
// //                                         <button type="button" onClick={saveData} class="btn btn-primary btn-block" style={{ margin: '1px' }} >
// //                                             {/* <a href='/epp1'> */}
// //                                             Add
// //                                             {/* </a> */}
// //                                         </button></div>
// //                                     {/* </div> */}

// //                                     {/* </div> */}
// //                                 </form>

// //                             </ol>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //         </>
// //     );
// // }
// // export default Auctiont2;

// import React, { Component } from 'react';
// import axios from 'axios';
// import {Link, Redirect} from 'react-router-dom';
// import Header from "../elements/header";
// import Sidebar from "../elements/sidebar";

// export default class EditPage extends Component {

//     constructor(props) {
//         super(props);
//         this.url = 'https://qaapi.jahernotice.com/api/auction/subscriber/view';
        
//         this.token = localStorage.getItem('token');
//     }

//     state = {
//         userid: '',
//         redirect: false,
//         isLoading: false
//     };

//     componentDuseridMount() {
//         const userid = this.props.location.search[4];
//         axios.get(this.url + '/'  + userid, { params: { token: this.token}})
//             .then(response => {
//                 const emp = response.data.employee;
//                 this.setState({userid: emp.userid });
//                 document.getElementById('inputName').value = emp.startDate;
//                 document.getElementById('inputPhone').value = emp.endDate;
//                 // document.getElementById('inputEmail').value = emp.email;
//                 // document.getElementById('inputLoca').value = emp.location;
//                 // document.getElementById('inputEmpId').value = emp.emp_userid;
//                 // document.getElementById('inputComp').value = emp.company;
//             })
//             .catch(error => {
//                 this.setState({ toDashboard: true });
//                 console.log(error);
//             });
        
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         this.setState({isLoading: true});
//         const token = localStorage.getItem('token');
//         const url = 'https://qaapi.jahernotice.com/api/auction/update/71'+ this.state.userid;
//         const startDate = document.getElementById('inputName').value;
//         const endDate = document.getElementById('inputPhone').value;
//         // const email = document.getElementById('inputEmail').value;
//         // const location = document.getElementById('inputLoca').value;
//         // const empuserid = document.getElementById('inputEmpId').value;
//         // const company = document.getElementById('inputComp').value;
//         axios.put(url, { startDate: startDate, endDate: endDate, 
//             // email:email, location:location, emp_userid:empuserid, company:company, 
//             token:token })
//             .then(result => {
//                 if (result.data.status) {
//                     this.setState({redirect: true, isLoading: false})
//                 }
//             })
//             .catch(error => {
//                 this.setState({ toDashboard: true });
//                 console.log(error);
//             });
//     };

//     renderRedirect = () => {
//         if (this.state.redirect) {
//             return <Redirect to='/dashboard' />
//         }
//     };

//     render() {
//         const isLoading = this.state.isLoading;
//         if (this.state.toDashboard === true) {
//             return <Redirect to='/' />
//         }
//         return (
//             <div>
//                 <Header/>
//                 <div userid="wrapper">
//                 <Sidebar></Sidebar>
//                     <div userid="content-wrapper">
//                         <div className="container-fluuserid">
//                             <ol className="breadcrumb">
//                                 <li className="breadcrumb-item">
//                                     <Link to={'/dashboard'} >Dashboard</Link>
//                                 </li>
//                                 <li className="breadcrumb-item active">Edit</li>
//                             </ol>
//                         </div>
//                         <div className="container-fluuserid">
//                             <div className="card mx-auto">
//                                 <div className="card-header">Employee Edit</div>
//                                 <div className="card-body">
//                                     <form onSubmit={this.handleSubmit}>
//                                         <div className="form">
//                                             <div className="form-row">
//                                                 <div className="col-md-6">
//                                                     <div className="form-label-group">
//                                                         <input type="date" userid="inputName" className="form-control" placeholder="Enter startDate" required="required" autoFocus="autofocus" />
//                                                         <label htmlFor="inputName">Start Date</label>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <div className="form-label-group">
//                                                         <input type="date" userid="inputPhone" className="form-control" placeholder="Enter endDate" required="required" />
//                                                         <label htmlFor="inputPhone">End Dtae</label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
                                       
//                                         <button className="btn btn-primary btn-block" type="submit"  disabled={this.state.isLoading ? true : false}>Update Employee &nbsp;&nbsp;&nbsp;
//                                             {isLoading ? (
//                                                 <span className="spinner-border spinner-border-sm" role="status" aria-huseridden="true"></span>
//                                             ) : (
//                                                 <span></span>
//                                             )}
//                                         </button>
//                                     </form>
//                                     {this.renderRedirect()}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }




