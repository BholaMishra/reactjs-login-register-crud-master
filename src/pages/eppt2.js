// import React, { useState, Paper } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, button, useHistory } from 'react-router-dom';
import moment from "moment"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import { useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';



function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});


export default function StickyHeadTable() {
    const history = useHistory();
    console.log(history)

    const location = useLocation();
    console.log(location)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showone, setShowone] = useState(false);
    const handleCloseone = () => setShowone(false);
    const handleShowone = () => setShowone(true);

    // const handleChange = () => setShow(false)
    // const handleShow1 = () => setShow(true);


    // const [user_id, setuser_id] = useState('');
    const [id, setid] = useState("");
    // const id = useState(history.user_id);
    const [user_id, setuser_id] = useState("");


    const [userEPPSubscription, setuserEPPSubscription] = useState("");
    const [Admin_ID, setAdmin_ID] = useState("");
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // All Data handle for data
    const [data, setData] = useState([]);

    //    const handleDelete = this.props.onDelete(this.props.searchItem);

    React.useEffect(() => {

        // axios.get(`https://qaapi.jahernotice.com/api/EppByID/73?`).then((response) => {
        axios.get(`https://qaapi.jahernotice.com//api/EppByID/392`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);


    React.useEffect(() => {
        // axios.get(`https://qaapi.jahernotice.com/api/Epp`).then((response) => {
        axios.get(`https://qaapi.jahernotice.com//api/EppByID/392${userEPPSubscription}`).then((response) => {
            // axios.get(`https://qaapi.jahernotice.com/api/EppByID/73?${userEPPSubscription}`).then((response) => {

            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);



    const [active, setActive] = useState("");
    function saveData(userEPPSubscription) {
        // alert(userEPPSubscription)
        let data = { Admin_ID, userEPPSubscription, active }
        // console.warn(data);
        fetch('https://qaapi.jahernotice.com/api/active/' + `${userEPPSubscription}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            console.warn("resp", resp);;
            resp.json().then((result) => {
                console.warn("result", result)
                setuserEPPSubscription()
            })
        })
    }

    const [inactive, setInactive] = useState("");
    function Deleteuser(userEPPSubscription) {
        // alert(userEPPSubscription)
        let data = { userEPPSubscription, inactive }
        fetch('https://qaapi.jahernotice.com/api/inactive/' + `${userEPPSubscription}`, {
            method: 'DELETE'

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                setuserEPPSubscription()
            })
        })
    }



    return (
        <>
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">


                        <div
                            className="container-fluid">
                            {/* <ol className="breadcrumb"> */}
                            <Paper sx={{ width: "200%", mb: 0 }}>
                                <ol className="breadcrumb">
                                    <li><h6 className="EPPDite3">EPP Details By UserID</h6></li>
                                    <li className="breadcrumb-itemac">
                                        <Link className="bread" to={'/epp'} >EPP Ditel</Link>
                                    </li><h6>/</h6>
                                    <li className="breadcrumb-item active">Overview</li>
                                </ol>
                                <form className='contenar'>
                                    <>
                                        <form className="" style={{ border: '1px' }}>
                                            <div class="form-row">
                                                <div class="col">
                                                    <label className="show">
                                                        <TablePagination
                                                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                                            component="div"
                                                            count={data.length}
                                                            rowsPerPage={rowsPerPage}
                                                            page={page}
                                                            onPageChange={handleChangePage}
                                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="search">
                                                    <div className='box-table-table-bordered' style={{ backgroundcolor: 'red', border: '1px' }}>
                                                        <div id='entrybox'>
                                                            <div class="input-group-mb-3">
                                                                <div className="input-group a">
                                                                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
                                                                        aria-describedby="basic-addon2" style={{ height: '2rem', width: '-40rem', }} />
                                                                    <div className="input-group-append" >
                                                                        <Button className=" btn-primary b " type="button" style={{
                                                                            width: '2.5rem',
                                                                            height: '2rem',
                                                                            border: 'none'
                                                                        }} variant="contained" color="primary">
                                                                            <i className="fas fa-search"></i>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                    {/* <br /> */}
                                    {/* <br /> */}
                                    <TableContainer component={Paper}>
                                        <Table
                                            sx={{ minWidth: 650 }}
                                            className="table table-striped table-hover"
                                            size="small"
                                            aria-label="simple table"
                                        >
                                            <TableHead>
                                                <TableRow>

                                                    <TableCell>Sr.No</TableCell>
                                                    {/* <TableCell>Name</TableCell> */}
                                                    {/* <TableCell>LastName</TableCell> */}
                                                    {/* <TableCell>MobileNo</TableCell> */}
                                                    {/* <TableCell>EmailID</TableCell>survey_number */}
                                                    <TableCell>District</TableCell>
                                                    <TableCell>Taluka</TableCell>
                                                    <TableCell>Village</TableCell>
                                                    <TableCell>survey_number</TableCell>
                                                    <TableCell>Start Date</TableCell>
                                                    <TableCell> End Date</TableCell>
                                                    <TableCell>Status</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((data, index) => (
                                                        <TableRow
                                                            key={index}
                                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                        >

                                                            <TableCell>{index + 1}</TableCell>
                                                            {/* <TableCell>{data.FirstName} {data.LastName}</TableCell> */}
                                                            {/* <TableCell>{data.LastName}</TableCell> */}
                                                            {/* <TableCell>{data.MobileNo}</TableCell> */}
                                                            {/* <TableCell>{data.EmailID}</TableCell> */}
                                                            <TableCell>{data.district}</TableCell>
                                                            <TableCell>{data.taluka}</TableCell>
                                                            <TableCell>{data.village}</TableCell>
                                                            <TableCell>{data.survey_number}</TableCell>
                                                            <TableCell>{moment(data.start_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>{moment(data.end_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell onClick={(saveData) => Deleteuser(data.userEPPSubscription)}>{data.active}{data.inactive}</TableCell>


                                                            <TableCell>
                                                                {/* <input type="button" onclick="disable()" value="Disable list">
<input type="button" onclick="enable()" value="Enable list"> */}
                                                                <div class="container">
                                                                    <div class="row justify-content-md-center">
                                                                        {/* <div className="App"> */}
                                                                        {
                                                                            // show ? <i onClick={() => setShow(!show)} id="inactive" class="fa fa-recycle" aria-hidden="true"></i> : null
                                                                        }
                                                                        {/* <i  onClick={saveData} id="active" class="fa fa-ban" aria-hidden="true" >A</i> */}
                                                                        {/* <br/><br/><br/>
                                                                            <i  onClick={Delete} id="inactive" class="fa fa-ban" aria-hidden="true" >I</i>
                                                                        </div>

                                                                        <br/>

                                                                        <div>
                                                                        <i  onClick={Delete} id="active" class="fa fa-ban" aria-hidden="true" >I</i>
                                                                        </div> */}

                                                                        <div class="col col-lg-2">

                                                                            <i class="fa fa-recycle" onChange={handleShowone} onClick={() => Deleteuser(data.userEPPSubscription)} />
                                                                            {/* <Button className="Di-Boxa">
                                                                                <BlockSharpIcon onClick={Delete} > </BlockSharpIcon></Button> */}
                                                                            <br /> <br />
                                                                            <i class="fa fa-ban" onChange={handleShow} onClick={() => saveData(data.userEPPSubscription)} aria-hidden="true" />


                                                                        </div>
                                                                        <br />
                                                                        <br />
                                                                        <br />
                                                                        <br />

                                                                        <div class="col col-lg-2">
                                                                            <Button className="Submiticone" onClick={() => {
                                                                                history.push('/newaddepp2', {
                                                                                    district: (data.district),
                                                                                    taluka: (data.taluka),
                                                                                    village: (data.village),
                                                                                    survey_number: (data.survey_number),
                                                                                    user_id: (data.user_id),
                                                                                    userEPPSubscription: (data.userEPPSubscription)
                                                                                    // user_id: (data.user_id)
                                                                                })
                                                                            }}>
                                                                                <i class="bi bi-box-arrow-in-down-left" onclick="enable()">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                                        <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                        <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                                                                    </svg></i>
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Modal
                                                                    show={show}
                                                                    onHide={handleClose}
                                                                    backdrop="static"
                                                                    keyboard={false}
                                                                    className="cardtop"
                                                                >
                                                                    {/* <Modal.Header closeButton> */}
                                                                    {/* <Modal.Title>Modal title</Modal.Title>                                         */}
                                                                    {/* </Modal.Header> */}
                                                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                                                    <h4 className='cantentbox'>INACTIVE</h4>
                                                                    {/* <Modal.Footer> */}
                                                                    <div class="row justify-content-md-center rowend">
                                                                        <div class="col col-lg-2">
                                                                            <Button className='secondaryclose' variant="primary" color="primary">
                                                                                <Link to={'/eppt2'}>OK</Link></Button>
                                                                        </div>

                                                                        <div class="col col-lg-2">
                                                                            <Button className='secondaryclosebutton' variant="secondary" onClick={handleClose}>
                                                                                No
                                                                            </Button>
                                                                        </div>
                                                                    </div>


                                                                    {/* </Modal.Footer> */}
                                                                </Modal>

                                                                <Modal
                                                                    show={showone}
                                                                    onHide={handleCloseone}
                                                                    backdrop="static"
                                                                    keyboard={false}
                                                                    className="cardtop"
                                                                >
                                                                    {/* <Modal.Header closeButton> */}
                                                                    {/* <Modal.Title>Modal title</Modal.Title>                                         */}
                                                                    {/* </Modal.Header> */}
                                                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                                                    <h4 className='cantentbox'>ACTIVE</h4>
                                                                    {/* <Modal.Footer> */}
                                                                    <div class="row justify-content-md-center rowend">
                                                                        <div class="col col-lg-2">
                                                                            <Button className='secondaryclose' variant="primary" color="primary">
                                                                                <Link to={'/eppt2'}>OK</Link></Button>
                                                                        </div>

                                                                        <div class="col col-lg-2">
                                                                            <Button className='secondaryclosebutton' variant="secondary" onClick={handleCloseone}>
                                                                                No
                                                                            </Button>
                                                                        </div>
                                                                    </div>


                                                                    {/* </Modal.Footer> */}
                                                                </Modal>







                                                                {/* <i onclick={myFunction(this)} class="fa fa-ban"></i> */}


                                                                {/* <div class="row">
                                                                    <div class="col-1" style={{ bold: '2' }}>

                                                                        <Button className=" Submit" onClick={() => {
                                                                            history.push('/newaddepp2', {
                                                                                district: (data.district),
                                                                                taluka: (data.taluka),
                                                                                village: (data.village),
                                                                                survey_number: (data.survey_number)


                                                                            })
                                                                        }}>Button
                                                                            <i class="bi bi-box-arrow-in-down-left">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                    <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                                                                </svg></i>
                                                                        </Button>



                                                                    </div>
                                                                    <div class="col-1" style={{ bold: '2' }}>
                                                                        <Link className="Di-Boxa" to={"/newaddepp2"} style={{ border: 'none', color: 'black' }}>
                                                                            <i class="bi bi-plus" >
                                                                                <svg className="Di-Boxa" to={"/eppt2"} width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                                </svg></i></Link>

                                                                        {/* <Link className="Di-Box" to={"/eppadd1"} style={{ border: 'none', color: 'black' }}>
                                                                            <i class="bi bi-box-arrow-in-down-left">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                    <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                                                                </svg></i>
                                                                        </Link> 

                                                                    </div>
                                                                </div> */}



                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* table pagination */}
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                        component="div"
                                        count={data.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />

                                </form>
                            </Paper>
                            {/* </ol> */}
                        </div>
                    </div>
                </div>
            </div >

        </>

    );

    return (
        <div>Bhola</div>
    );
}

// export default Dashboard
