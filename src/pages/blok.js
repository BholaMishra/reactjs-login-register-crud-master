// // import React, { useState, Paper } from 'react';
// // import Header from "../elements/header";
// // import Sidebar from "../elements/sidebar";
// // import { Link , button } from 'react-router-dom';
// // import moment from "moment"
// // import axios from "axios";


// // const Dashboard = () => {

// //     // All Data handle for data
// //     const [data, setData] = useState([]);

// //     //    const handleDelete = this.props.onDelete(this.props.searchItem);


// //     // handle for pagination data
// //     const [page, setPage] = useState(0);

// //     // handle for tables rows
// //     const [rowsPerPage, setRowsPerPage] = useState(5);

// //     // pagination set new Page
// //     const handleChangePage = (event, newPage) => {
// //         setPage(newPage);
// //     };

// //     // handle Change Rows PerPage
// //     const handleChangeRowsPerPage = (event) => {
// //         setRowsPerPage(parseInt(event.target.value, 10));
// //         setPage(0);
// //     };


// //     React.useEffect(() => {


// //         //    https://qaapi.jahernotice.com/api/Epp?
// //         axios.get(`https://qaapi.jahernotice.com/api/Epp`).then((response) => {
// //             setData(response.data.data);
// //             console.log("Bhola", response.data.data)
// //         });
// //     }, []);

// //     const someComponent = (e) => {
// //         axios.get('https://qaapi.jahernotice.com/api/EditByUserID/' + e.target.value).then((response) => {
// //             setData(response.data.data);
// //             console.log("Village", response.data.data)

// //         });

// //     }


// //     return (
// //         <>
// //             <div>
// //                 <Header />
// //                 <div id="wrapper">
// //                     <Sidebar></Sidebar>
// //                     <div id="content-wrapper">
// //                         <div className="container-fluid">
// //                             <ol className="breadcrumb">
// //                                 <li className="breadcrumb-item">
// //                                     <Link to={'/dashboard'} >Dashboard</Link>
// //                                 </li>
// //                                 <li className="breadcrumb-item active">Overview</li>
// //                             </ol>
// //                         </div>

// //                         <div className="container-fluid">
// //                             <ol className="breadcrumb">
// //                             <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
// //                                     {/* <ul className="nav nav-tabs nav-justified"> */}
// //                                     <button className="btn btn-primary tg  "><Link to={"/addnew"} style={{ border: 'none', color: 'white' }}>Add New APP</Link></button>
// //                                     <button className="btn btn-primary ta "><Link to={"/addex" }style={{ border: 'none', color: 'white' }}>Add Exiting EPP</Link></button>
// //                                     {/* </ul> */}
// //                                 </div>
// //                                 {/* <div>Hello</div> */}
// //                                 <br /> <br /> <br />
// //                                 <form>
// //                                     <div className="tb-table-table" style={{ color: '', border: '1px' }}>
// //                                         {/* <ul class="nav nav-tabs nav-justified"> */}
// //                                         <button className="btn btn-primary btn-lg" Active>ALL</button>
// //                                         <button className="btn1 btn-lg " style={{ border: 'none' }}><Link to={"/previaus"} style={{ border: 'none' }}>Previous-Month</Link></button>
// //                                         <button className="btn2 btn-lg" style={{ border: 'none' }}><Link to={"/demonew"} style={{ border: 'none' }}>This-Month</Link></button>
// //                                         <button className="btn3 btn-lg" style={{ border: 'none', text: 'bold' }}><Link to={"/next"} style={{ border: 'none' }}>Next-Month</Link></button>
// //                                         {/* </ul> */}
// //                                     </div>
// //                                 </form>
// //                                 <>
// //                                     {/* <div id="content-wrapper"> */}

// //                                     <form className="" style={{ border: '1px' }}>
// //                                         <div class="form-row">
// //                                             <div class="col">
// //                                                 <label className="show">Show:
// //                                                     <select>
// //                                                         <option>10</option>
// //                                                         <option>25</option>
// //                                                         <option>50</option>
// //                                                         <option>100</option>
// //                                                     </select> entries
// //                                                 </label>
// //                                             </div>
// //                                             <div className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0'>
// //                                                 <div className="input-group">
// //                                                     <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
// //                                                         aria-describedby="basic-addon2" />
// //                                                     <div className="input-group-append">
// //                                                         <button className="btn btn-primary" type="button">
// //                                                             <i className="fas fa-search"></i>
// //                                                         </button>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </form>



// //                                 </>
// //                                 <br />
// //                                 {/* <br /> */}

// //                                 <paper sx={{ width: "100%", mb: 0 }}>
// //                                     <tablecontainer component={Paper}>
// //                                         <table
// //                                             sx={{ minWidth: 650 }}
// //                                             className="table  table-hover "
// //                                             size="small"
// //                                             aria-label="simple table"
// //                                         >
// //                                             <tablehead style={{ textalign: 'center' }}>
// //                                                 <tablerow style={{ textalign: 'center' }}>

// //                                                     {/* <table class="table table-bordered"> */}
// //                                                     <table className="table table-hover" style={{ border: 'none' }}>
// //                                                         <thead>
// //                                                             <tr>
// //                                                                 <th scope="col">Sr.No</th>
// //                                                                 <th scope="col">Name</th>
// //                                                                 <th scope="col">Phone No</th>
// //                                                                 <th scope="col">Email ID</th>
// //                                                                 <th scope="col">Epp Count</th>
// //                                                                 <th scope="col">UserID</th>
// //                                                                 <th scope="col">Start Date</th>
// //                                                                 <th scope="col">End Date</th>
// //                                                                 <th scope="col">Auction</th>
// //                                                             </tr>
// //                                                         </thead>
// //                                                         {data.slice(page)
// //                                                             .map((data, index) => (
// //                                                                 <tbody key={index} className="table table-hover" style={{ border: 'none' }}
// //                                                                     sx={{ "&:last-child td, &:last-child th": { border: 'none' } }}>
// //                                                                     <tr key={data.id} onChange={someComponent}>

// //                                                                         <td scope="row">{index + 1}</td>
// //                                                                         <td scope="row">{data.FirstName} {data.LastName} </td>

// //                                                                         <td scope="row">{data.MobileNo}</td>
// //                                                                         <td scope="row">{data.EmailID}</td>
// //                                                                         <td scope="row">{data.EPPCount}</td>
// //                                                                         <td scope="row">{data.UserID}</td>

// //                                                                         <td scope="row">{moment(data.start_date).format("DD/MMM/YYYY")}</td>
// //                                                                         <td scope="row">{moment(data.end_date).format("DD/MMM/YYYY")}</td>

// //                                                                         <td>
// //                                                                             <div class="row">
// //                                                                                 <div class="col-1" style={{ bold: '2' }}>

// //                                                                                     <Link className="Di-Boxa" to={"/eppt2"} style={{ border: 'none', color: 'black' }}>
// //                                                                                         <i class="bi bi-plus" >
// //                                                                                             <svg className="Di-Boxa" to={"/eppt2"} width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
// //                                                                                                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
// //                                                                                             </svg></i></Link>

// //                                                                                 </div>
// //                                                                                 <div class="col-1" style={{ bold: '2' }}>

// //                                                                                     <Link className="Di-Box" to={"/eppadd1"} style={{ border: 'none', color: 'black' }}>
// //                                                                                         <i class="bi bi-box-arrow-in-down-left">
// //                                                                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
// //                                                                                                 <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
// //                                                                                                 <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
// //                                                                                             </svg></i>
// //                                                                                     </Link>

// //                                                                                 </div>
// //                                                                             </div>
// //                                                                         </td>
// //                                                                     </tr>
// //                                                                 </tbody>
// //                                                             ))}
// //                                                     </table>
// //                                                     <nav aria-label="Page navigation example">
// //                                                         <ul className="pagination justify-content-end">
// //                                                             <li className="page-item disabled"
// //                                                                 rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
// //                                                                 component="div"
// //                                                                 count={data.length}
// //                                                                 rowsPerPage={rowsPerPage}
// //                                                                 page={page}
// //                                                                 onPageChange={handleChangePage}
// //                                                                 onRowsPerPageChange={handleChangeRowsPerPage}
// //                                                             >
// //                                                                 <a className="page-link" href="/datatable" tabindex="-1">Previous</a>
// //                                                             </li>
// //                                                             <li className="page-item"><a class="page-link" href="/datatable">1</a></li>
// //                                                             <li className="page-item"><a class="page-link" href="/datatable">2</a></li>
// //                                                             <li className="page-item"><a class="page-link" href="datatable">3</a></li>
// //                                                             <li className="page-item">
// //                                                                 <a className="page-link" href="/datatable">Next</a>
// //                                                             </li>
// //                                                         </ul>
// //                                                     </nav>
// //                                                     <table
// //                                                         rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
// //                                                         component="div"
// //                                                         count={data.length}
// //                                                         rowsPerPage={rowsPerPage}
// //                                                         page={page}
// //                                                         onPageChange={handleChangePage}
// //                                                         onRowsPerPageChange={handleChangeRowsPerPage}
// //                                                     />
// //                                                 </tablerow>
// //                                             </tablehead>
// //                                             <tablebody>
// //                                                 {data
// //                                                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //                                                     .map((data, index) => (
// //                                                         <table
// //                                                             key={index}
// //                                                             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// //                                                         >

// //                                                         </table>
// //                                                         // </tablerow>
// //                                                     ))}
// //                                             </tablebody>
// //                                         </table>
// //                                     </tablecontainer>
// //                                     {/* table pagination */}

// //                                     <tablepagination
// //                                         rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
// //                                         component="div"
// //                                         count={data.length}
// //                                         rowsPerPage={rowsPerPage}
// //                                         page={page}
// //                                         onPageChange={handleChangePage}
// //                                         onRowsPerPageChange={handleChangeRowsPerPage}
// //                                     />

// //                                 </paper>
// //                             </ol>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //         </>
// //     );
// // }
// // export default Dashboard




// import React, { useEffect, useState, Paper,  } from 'react';
// // import '../assets/css/all.css'
// import Header from "../elements/header";
// import Sidebar from "../elements/sidebar";
// import { Link } from 'react-router-dom';
// import moment from "moment"
// import axios from "axios";


// const Dashboard = () => {

//     // All Data handle for data
//     const [data, setData] = useState([]);
//     //    const handleDelete = this.props.onDelete(this.props.searchItem);
//     // handle for pagination data
//     const [page, setPage] = useState(0);

//     // handle for tables rows
//     const [rowsPerPage, setRowsPerPage] = useState(5);

//     // pagination set new Page
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     // handle Change Rows PerPage
//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     React.useEffect(() => {
//         // axios.get(`https://qaapi.jahernotice.com/api/EPP`).then((response) => {
//         axios.get(`https://qaapi.jahernotice.com/api/auction/subscriber/view`).then((response) => {
//             setData(response.data.data);
//             console.log("Bhola", response.data.data)
//             // console.log("date"+response.startDate)
//         });
//     }, []);

//     const editrow = (e) => {
//         console.log(e)
//     }


//     return (
//         <>
//             <div>
//                 <Header />
//                 <div id="wrapper">
//                     <Sidebar></Sidebar>
//                     <div id="content-wrapper">
//                         {/* <div className="container-fluid">
//                             <ol className="breadcrumb">

//                             </ol>
//                         </div> */}

//                         <div className="container-fluid">
//                             <ol className="breadcrumb">
//                             <li className="breadcrumb-item">
//                                     <Link to={'/dashboard'} >Dashboard</Link>
//                                 </li>
//                                 <li className="breadcrumb-item active">Overview</li>
//                             <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
//                                     {/* <ul className="nav nav-tabs nav-justified"> */}
//                                     {/* <button className="btn btn-primary tg  "><Link to={"/addnew"} style={{ border: 'none', color: 'white' }}>Add New APP</Link></button> */}
//                                     <button className="btn btn-primary ta "><Link to={"/auctionadd" }style={{ border: 'none', color: 'white' }}>Add Exiting EPP</Link></button>
//                                     {/* </ul> */}
//                                 </div>
//                                 {/* <div>Hello</div> */}
//                                 <br /> <br /> <br />
//                                 <form>
//                                     <div className="tb-table-table" style={{ color: '', border: '1px' }}>
//                                         {/* <ul class="nav nav-tabs nav-justified"> */}
//                                         <button className="btn btn-primary btn-lg" Active>ALL</button>
//                                         <button className="btn1 btn-lg " style={{ border: 'none' }}><Link to={"/previaus"} style={{ border: 'none' }}>Previous-Month</Link></button>
//                                         <button className="btn2 btn-lg" style={{ border: 'none' }}><Link to={"/this"} style={{ border: 'none' }}>This-Month</Link></button>
//                                         <button className="btn3 btn-lg" style={{ border: 'none', text: 'bold' }}><Link to={"/next"} style={{ border: 'none' }}>Next-Month</Link></button>
//                                         {/* </ul> */}
//                                     </div>
//                                 </form>
//                                 <form className='contenar'>
//                                     {/* <div className='form-group'> */}
//                                         {/* <div className=" table-bordered"> */}

//                                             <>
//                                                 <form className="" style={{ border: '1px' }}>
//                                                     <div class="form-row">
//                                                         <div class="col">
//                                                             <label className="show">Show:
//                                                                 <select>
//                                                                     <option>10</option>
//                                                                     <option>25</option>
//                                                                     <option>50</option>
//                                                                     <option>100</option>
//                                                                 </select> entries
//                                                             </label>
//                                                         </div>
//                                                         <div className="search">
//                                                             <div className='box-table-table-bordered' style={{ backgroundcolor: 'red', border: '1px' }}>
//                                                                 <div id='entrybox'>
//                                                                     <div class="input-group-mb-3">
//                                                                         <div className="input-group a">
//                                                                             <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
//                                                                                 aria-describedby="basic-addon2" style={{ height: '2rem', width: '-40rem', }} />
//                                                                             <div className="input-group-append" >
//                                                                                 <button className=" btn-primary b " type="button" style={{
//                                                                                     width: '2.5rem',
//                                                                                     height: '2rem'
//                                                                                 }}>
//                                                                                     <i className="fas fa-search"></i>
//                                                                                 </button>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                             </>
//                                             <br />
//                                             {/* <br /> */}

//                                             <paper sx={{ width: "100%", mb: 0 }}>
//                                                 <tablecontainer component={Paper}>
//                                                     <table
//                                                         sx={{ minWidth: 650 }}
//                                                         className="table  table-hover "
//                                                         size="small"
//                                                         aria-label="simple table"
//                                                     >
//                                                         <tablehead style={{ textalign: 'center' }}>
//                                                             <tablerow style={{ textalign: 'center' }}>
//                                                                 {/* < tablecell>Sr.No</tablecell>

//                                                                 {/* <table class="table table-bordered"> */}
//                                                                 <table className="table table-hover" style={{ border: 'none' }}>
//                                                                     <thead>
//                                                                         <tr>
//                                                                             <th scope="col">Sr.No</th>
//                                                                             <th scope="col">UserName</th>
//                                                                             <th scope="col">MobileNo</th>
//                                                                             <th scope="col">Email ID</th>
//                                                                             {/* <th scope="col">UserID</th> */}
//                                                                             <th scope="col">ActionFor</th>
//                                                                             <th scope="col">Start Date</th>
//                                                                             <th scope="col">End Date</th>
//                                                                             <th scope="col">Auction</th>
//                                                                         </tr>
//                                                                     </thead>
//                                                                     {data.slice(page)
//                                                                         .map((data, index) => (
//                                                                             <tbody key={index} className="table table-hover" style={{ border: 'none' }}
//                                                                                 sx={{ "&:last-child td, &:last-child th": { border: 'none' } }}>
//                                                                                 <tr key={data.id}>
//                                                                                     <td scope="row">{index + 1}</td>
//                                                                                     <td scope="row">{data.UserName}</td>
//                                                                                     <td scope="row">{data.MobileNo}</td>
//                                                                                     <td scope="row">{data.EmailID}</td>
//                                                                                     <td scope="row">{data.ActionFor}</td>
//                                                                                     <td scope="row">{moment(data.start_date).format("DD/MMM/YYYY")}</td>
//                                                                                     <td scope="row">{moment(data.end_date).format("DD/MMM/YYYY")}</td>

//                                                                                     <td scope="row">
//                                                                                         <Link onClick={editrow(data)} to={'/auctiont2'} style={{ border: 'none', color: 'black' }}>
//                                                                                             <i class="bi bi-box-arrow-in-down-left">
//                                                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
//                                                                                                     <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
//                                                                                                     <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
//                                                                                                 </svg></i>
//                                                                                         </Link>

//                                                                                     </td>
//                                                                                 </tr>
//                                                                             </tbody>
//                                                                         ))}
//                                                                 </table>

//                                                                 <nav aria-label="Page navigation example">
//                                                                     <ul className="pagination justify-content-end">
//                                                                         <li className="page-item disabled"
//                                                                             rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
//                                                                             component="div"
//                                                                             count={data.length}
//                                                                             rowsPerPage={rowsPerPage}
//                                                                             page={page}
//                                                                             onPageChange={handleChangePage}
//                                                                             onRowsPerPageChange={handleChangeRowsPerPage}
//                                                                         >
//                                                                             <a className="page-link" href="/datatable" tabindex="-1">Previous</a>
//                                                                         </li>
//                                                                         <li className="page-item"><a class="page-link" href="/datatable">1</a></li>
//                                                                         <li className="page-item"><a class="page-link" href="/datatable">2</a></li>
//                                                                         <li className="page-item"><a class="page-link" href="datatable">3</a></li>
//                                                                         <li className="page-item">
//                                                                             <a className="page-link" href="/datatable">Next</a>
//                                                                         </li>
//                                                                     </ul>
//                                                                 </nav>
//                                                                 <table
//                                                                     rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
//                                                                     component="div"
//                                                                     count={data.length}
//                                                                     rowsPerPage={rowsPerPage}
//                                                                     page={page}
//                                                                     onPageChange={handleChangePage}
//                                                                     onRowsPerPageChange={handleChangeRowsPerPage}
//                                                                 />
//                                                             </tablerow>
//                                                         </tablehead>
//                                                         <tablebody>
//                                                             {data
//                                                                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                                                 .map((data, index) => (
//                                                                     <table
//                                                                         key={index}
//                                                                         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                                                                     >
//                                                                         {/* <tablecell>{index + 1}</tablecell>
//                                     <tablecell>{data.FirstName} {data.LastName}</tablecell> */}
//                                                                         {/* <TableCell>{data.LastName}</TableCell> */}
//                                                                         {/* <tablecell>{data.EmailID}</tablecell>
//                                     <tablecell>{data.MobileNo}</tablecell>
//                                     <tablecell>{data.EPPCount}</tablecell>
//                                     <tablecell>{data.UserID}</tablecell>
//                                     <tablecell>{data.group_id}</tablecell>
//                                     <tablecell>{data.start_date}</tablecell>
//                                     <tablecell>{data.end_date}</tablecell>
//                                     <tablecell>Edit  -  Delet<button></button></tablecell> */}
//                                                                         {/* <thead>
//                                     <tr key={data.id}>
//                                         <td>{index + 1}</td>
//                                         <td>{data.FirstName} </td>
//                                         <td>{data.LastName}</td>
//                                         <td>{data.MobilNo}</td>
//                                         <td>{data.EmailID}</td>
//                                         <td>{data.start_date}</td>
//                                         <td>{data.end_date}</td>
//                                         <td>{data.EppCount}</td>
//                                     </tr>

//                                 </thead> */}
//                                                                         {/* <tbody>
//                                         <tr key={data.id}>
//                                             {/* <th scope="row">1</th>
//                                             <td scope="row">{index + 1}</td>
//                                             <td scope="row">{data.FirstName} {data.LastName} </td>
//                                          <td scope="row">{data.LastName}</td> 
//                                             <td scope="row">{data.MobileNo}</td>
//                                             <td scope="row">{data.EPPCount}</td>
//                                             <td scope="row">{data.UserID}</td>
//                                             <td scope="row">{data.EmailID}</td>
//                                             <td scope="row">{data.start_date}</td>
//                                             <td scope="row">{data.end_date}</td>
//                                             <td scope="row">Edit - Delet</td>
//                                         </tr>
//                                     </tbody> */}
//                                                                     </table>
//                                                                     // </tablerow>
//                                                                 ))}
//                                                         </tablebody>
//                                                     </table>
//                                                 </tablecontainer>
//                                                 {/* table pagination */}

//                                                 <tablepagination
//                                                     rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
//                                                     component="div"
//                                                     count={data.length}
//                                                     rowsPerPage={rowsPerPage}
//                                                     page={page}
//                                                     onPageChange={handleChangePage}
//                                                     onRowsPerPageChange={handleChangeRowsPerPage}
//                                                 />
//                                             </paper>

//                                         {/* </div>
//                                     </div> */}
//                                 </form>

//                             </ol>
//                         </div>
//                     </div>
//                     </div>
//                 </div>

//         </>
//     );
// }
// export default Dashboard




<paper sx={{ width: "100%", mb: 0 }}>
    <tablecontainer component={Paper}>
        <table
            sx={{ minWidth: 650 }}
            className="table  table-hover "
            size="small"
            aria-label="simple table"
        >
            <tablehead style={{ textalign: 'center' }}>
                <tablerow style={{ textalign: 'center' }}>

                    <table className="table table-hover" style={{ border: 'none' }}>
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Email ID</th>
                                {/* <th scope="col">UserID</th> */}
                                <th scope="col">District</th>
                                <th scope="col">Taluka</th>
                                <th scope="col">Village</th>
                                {/* <th scope="col">Sur_Num</th> */}
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                {/* <th scope="col">Status</th> */}
                                <th scope="col">Auction</th>
                            </tr>
                        </thead>
                        {data
                            .slice(page)
                            .map((data, index) => (
                                <tbody key={index} className="table table-hover" style={{ border: 'none' }}
                                    sx={{ "&:last-child td, &:last-child th": { border: 'none' } }}>
                                    <tr key={data.id}>
                                        <td scope="row">{index + 1}</td>
                                        <td scope="row">{data.FirstName} {data.LastName} </td>
                                        <td scope="row">{data.MobileNo}</td>
                                        <td scope="row">{data.EmailID}</td>
                                        <td scope="row">{data.district}</td>
                                        <td scope="row">{data.taluka}</td>
                                        <td scope="row">{data.village}</td>
                                        <td scope="row">{moment(data.start_date).format("DD/MMM/YYYY")}</td>
                                        <td scope="row">{moment(data.end_date).format("DD/MMM/YYYY")}</td>
                                        <td>
                                            <div class="row">
                                                <div class="col col-lg-1">
                                                    <Link className="Di-Boxa" to={"/newaddepp2"} style={{ border: 'none', color: 'black' }}>
                                                        <i class="bi bi-plus" >
                                                            <svg className="Di-Boxa" href="/epp1" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                            </svg></i></Link>
                                                </div>
                                                <div class="col col-lg-1">
                                                    <Link className="Di-Box" to={"/#"} style={{ border: 'none', color: 'black' }}>
                                                        <i class="bi bi-box-arrow-in-down-left">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                                            </svg></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            ))}
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled"
                                rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            >
                                <a className="page-link" href="/datatable" tabindex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a class="page-link" href="/datatable">1</a></li>
                            <li className="page-item"><a class="page-link" href="/datatable">2</a></li>
                            <li className="page-item"><a class="page-link" href="datatable">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="/datatable">Next</a>
                            </li>
                        </ul>
                    </nav>
                    <table
                        rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </tablerow>
            </tablehead>
            <tablebody>
                {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data, index) => (
                        <table
                            key={index}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >

                        </table>
                        // </tablerow>
                    ))}
            </tablebody>
        </table>
    </tablecontainer>
    {/* table pagination */}

    <tablepagination
        rowsPerPageOptions={[5, 10, 15, 25, 50, 75, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
</paper>