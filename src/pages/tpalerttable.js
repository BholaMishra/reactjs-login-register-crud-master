import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, button, useHistory, useLocation } from 'react-router-dom';
import moment from "moment"
import React, { useState, useEffect, } from "react";
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
import BlockIcon from '@material-ui/icons/Block';



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});
export default function StickyHeadTable() {

    const location = useLocation();
    console.log(location)

    const history = useHistory();
    const [UserSubscriptionMainID, setUserSubscriptionMainID] = useState("");
    const [UserId, setUserId] = useState(location.state.UserId);
    const [TPCount, setTPCount] = useState("");
    const [UserID, setUserID] = useState("");
    const [Userid, setUserid] = useState("");
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
    const id = useState(location.state.UserId);
    const [data, setData] = useState([]);
    React.useEffect(() => {
        axios.get(` https://qaapi.jahernotice.com/api/gettpuserdata/` + `${UserId}`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        }); 
    }, []);



    const [isActive, setisActive] = useState("");
    function saveData(UserSubscriptionMainID, isActive) {
        let data = { UserSubscriptionMainID, isActive }
        fetch(`https://qaapi.jahernotice.com/api/tp/isactive`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            console.warn("resp", resp);
            resp.json().then((result) => {
                console.warn("result", result)
                setUserSubscriptionMainID();
                axios.get(` https://qaapi.jahernotice.com/api/gettpuserdata/` + `${UserId}`).then((response) => {
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
                        <div className="container-fluid">
                            <Paper sx={{ width: "200%", mb: 0 }}>
                                <ol className="breadcrumb">
                                    <li><h6 className="EPPDitetpta breadcrumb-item active">TP Services By UserID</h6></li>
                                    <li className="breadcrumb-itemac breadcrumb-item active">
                                        <Link className="bread breadcrumb-item active" to={'/tpalert'} >TP Details</Link>
                                    </li><h6>/</h6>
                                    <li className="breadcrumb-item active">Overview</li>
                                </ol>
                                <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
                                </div>
                                {/* <br /> */}
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
                                        <Table sx={{ minWidth: 650 }} className="table table-striped table-hover" size="small" aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Sr.No</TableCell>
                                                    <TableCell>District</TableCell>
                                                    <TableCell>Taluka</TableCell>
                                                    <TableCell>Village</TableCell>
                                                    <TableCell>TP Number</TableCell>
                                                    <TableCell>start_date</TableCell>
                                                    <TableCell>end_date</TableCell>
                                                    <TableCell>Status</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((data, index) => (
                                                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{data.DistrictName}</TableCell>
                                                            <TableCell>{data.TalukaName}</TableCell>
                                                            <TableCell>{data.VillageName}</TableCell>
                                                            <TableCell>{data.TPNo}</TableCell>
                                                            <TableCell>{moment(data.startDate).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>{moment(data.endDate).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>{data.isActive == 1 ? "Active" : "Inactive"}</TableCell>
                                                            <TableCell>
                                                                <div className="container">
                                                                    <div class="row">
                                                                        <div className="col col-lg-3" style={{ marginRight: '20px' }}>
                                                                            <Button className="Submiticon" onClick={() => {
                                                                                history.push('/tpalertedit', {
                                                                                    UserID: (data.UserID),
                                                                                    UserName: (data.UserId),
                                                                                    ServiceID: (data.ServiceID),
                                                                                    Service_Sub_Type_ID: (data.Service_Sub_Type_ID),
                                                                                    DistrictID: (data.DistrictID),
                                                                                    TalukaID: (data.TalukaID),
                                                                                    VillageID: (data.VillageID),
                                                                                    TPNo: (data.TPNo),
                                                                                    UserSubscriptionMainID: (data.UserSubscriptionMainID),
                                                                                    startDate: moment(data.startDate).format("YYYY-MM-DD"),
                                                                                    endDate: moment(data.endDate).format("YYYY-MM-DD"),
                                                                                })
                                                                            }}>
                                                                                <i class="bi bi-box-arrow-in-down-left font-weight-bold">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                                        <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                        <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                                                                    </svg></i>
                                                                            </Button>
                                                                        </div>
                                                                        <div className="col col-lg-3" style={{ marginRight: '-121px', width: "30px", height: "30px" }}>
                                                                            {(data.isActive == 0 || data.isActive == null) && <i value={data.isActive} id='iconname' name='iconname' className="fa fa-recycle" onClick={() => saveData(data.UserSubscriptionMainID, 1)} />}
                                                                            {data.isActive == 1 && <i value={data.isActive} id='iconname' name='iconname' className="fa fa-ban" onClick={() => saveData(data.UserSubscriptionMainID, 0)} />}
                                                                        </div>
                                                                    </div>
                                                                </div>
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
            </div>
        </>
    );
};



