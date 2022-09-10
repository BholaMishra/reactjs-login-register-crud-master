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

    const [showone, setShowone] = useState(false);
    const handleCloseone = () => setShowone(false);
    const handleShowone = () => setShowone(true);
    const [id, setid] = useState("");

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
    const [UserID, setUserID] = useState("")
    const [user_id, setuser_id] = useState("");
    const [data, setData] = useState([]);
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com//api/EppByID/` + ` ${UserID}?`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
            // setUserID()
        });
    }, []);

    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com//api/EppByID/` + ` ${UserID}?`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
            // setUserID()
        });
    }, []);

    const [active, setActive] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShowone(false);
    const handleShow = () => setShow(true);
    // User Active
    function saveData(userEPPSubscription) {
        let data = { Admin_ID, userEPPSubscription, active, }
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
                axios.get(`https://qaapi.jahernotice.com//api/EppByID/${user_id} ` + ` ${UserID}?_=1662787955655`).then((response) => {
                    setData(response.data.data);
                    console.log("Bhola", response.data.data)
                });
            })
        })

    }
    // User Inactive
    const [inactive, setInactive] = useState("");
    function Deleteuser(userEPPSubscription) {
        let data = { userEPPSubscription, inactive }
        fetch('https://qaapi.jahernotice.com/api/inactive/' + `${userEPPSubscription}`, {
            method: 'DELETE'

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                setuserEPPSubscription()
                axios.get(`https://qaapi.jahernotice.com//api/EppByID/${user_id} ` + ` ${UserID}?_=1662787955655`).then((response) => {
                    setData(response.data.data);
                    console.log("Bhola", response.data.data)
                });
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
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} className="table table-striped table-hover" size="small" aria-label="simple table"                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Sr.No</TableCell>
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
                                                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}                                                     >
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{data.district ? data.district : "Null"}</TableCell>
                                                            <TableCell>{data.taluka ? data.taluka : "Null"}</TableCell>
                                                            <TableCell>{data.village ? data.village : "Null"}</TableCell>
                                                            <TableCell>{data.survey_number ? data.survey_number : "Null"}</TableCell>
                                                            <TableCell>{moment(data.start_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>{moment(data.end_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell >{data.active == 1 ? "Active" : "Inactive"}</TableCell>
                                                            <TableCell>
                                                                <div class="container">
                                                                    <div class="row justify-content-md-center">
                                                                        <div class="col col-lg-2">
                                                                            {data.active == 0 && <i value={data.iconname} id='iconname' name='iconname' className="fa fa-recycle" onclick={saveData} onClick={() => saveData(data.userEPPSubscription)} />}
                                                                            {data.active == 1 && <i value={data.icon} id='icon' name='icon' className="fa fa-ban" onclick={Deleteuser} onClick={() => Deleteuser(data.userEPPSubscription)} aria-hidden="true" />}
                                                                        </div>
                                                                        <div className="col col-lg-2">
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
                                                                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="cardtop">
                                                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                                                    <h4 className='cantentbox'>INACTIVE</h4>
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
                                                                </Modal>

                                                                <Modal
                                                                    show={showone}
                                                                    onHide={handleCloseone}
                                                                    backdrop="static"
                                                                    keyboard={false}
                                                                    className="cardtop"
                                                                >
                                                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                                                    <h4 className='cantentbox'>ACTIVE</h4>
                                                                    {/* <Modal.Footer> */}
                                                                    <div class="row justify-content-md-center rowend">
                                                                        <div class="col col-lg-2">
                                                                            <Button className='secondaryclose' variant="primary" color="primary"><Link to={'/eppt2'}>OK</Link></Button>
                                                                        </div>
                                                                        <div class="col col-lg-2"><Button className='secondaryclosebutton' variant="secondary" onClick={handleCloseone}>No</Button>
                                                                        </div>
                                                                    </div>
                                                                </Modal>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
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
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}


