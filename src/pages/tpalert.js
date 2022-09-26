import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, button, useHistory } from 'react-router-dom';
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
import AddIcon from '@material-ui/icons/Add';



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
    const [UsersubscriptionMainID, setUsersubscriptionMainID] = useState("");
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

    const [data, setData] = useState([]);
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/tpservice/count`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);

    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/tpservice/count?_=1663608645945`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);



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
                                    <li><h6 className="EPPDite2 breadcrumb-item active" style={{ Color: 'blac' }} >TP Details</h6></li>
                                    <li className="breadcrumb-itemac">
                                        <Link className="bread breadcrumb-item active" to={'/dashboard'} >Dashboard</Link>
                                    </li><h6>/</h6>
                                    <li className="breadcrumb-item active">Overview</li>
                                </ol>
                                <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
                                    <Button className="btn btn-primary tg " id="addd3" variant="contained" color="primary" onClick={() => {
                                        history.push('/tpalertserves', {
                                            UserId: (data.UserId),
                                        })
                                    }}>
                                        {/* /auctionadd */}
                                        <Link variant="contained" color="primary" to={"/tpalertserves"} style={{ border: 'none', color: 'white' }}>Add Service</Link>
                                    </Button>
                                </div>
                                <br />
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
                                        <Table
                                            sx={{ minWidth: 650 }}
                                            className="table table-striped table-hover"
                                            size="small"
                                            aria-label="simple table"
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Sr.No</TableCell>
                                                    <TableCell>Name</TableCell>
                                                    <TableCell>Mobile Number</TableCell>
                                                    <TableCell>Email</TableCell>
                                                    <TableCell>TP Count</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((data, index) => (
                                                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{data.FirstName} {data.LastName}</TableCell>
                                                            <TableCell>{data.MobileNo}</TableCell>
                                                            <TableCell>{data.EmailID}</TableCell>
                                                            <TableCell>{data.TPCount}</TableCell>
                                                            <TableCell>
                                                                <div class="row">
                                                                    <div class="col-1" style={{ bold: '2' }}>
                                                                        <div class="col-1" style={{ bold: '2' }}>
                                                                            <Button className="Submiticone " onClick={() => {
                                                                                history.push('/tpalerttable', {
                                                                                    UserId: (data.UserId),
                                                                                    isActive: (data.isActive)
                                                                                })
                                                                            }}>
                                                                                {/* <AddIcon style={{ fontSize: 'extralarge' }}></AddIcon> */}
                                                                                <i class="bi bi-plus" >
                                                                                    <svg className="Di-Boxa" to={"/eppt2"} width="25" height="25" size='bold' fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                                    </svg></i>
                                                                            </Button>
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

