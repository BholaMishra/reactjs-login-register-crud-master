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
        axios.get(`https://qaapi.jahernotice.com/api/auction/subscriber/view?`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);

    const onddlChange = (e) => {
        axios.put('https://qaapi.jahernotice.com/api/auction/update/71' + e.target.value).then((response) => {
            setData(response.data.data);
            console.log("Taluka", response.data.data)

        });
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
                                    <li><h6 className="EPPDite2">Auction Ditel</h6></li>
                                    <li className="breadcrumb-itemac">
                                        <Link className="bread" to={'/dashboard'} >Dashboard</Link>
                                    </li><h6>/</h6>
                                    <li className="breadcrumb-item active">Overview</li>
                                </ol>
                                <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
                                    <Button className="btn btn-primary tg " id="addd3" variant="contained" color="primary">
                                        <Link variant="contained" color="primary" to={"/auctionadd"} style={{ border: 'none', color: 'white' }}>Add New Auction</Link>
                                    </Button>
                                </div>
                                <br />
                                <form>
                                    <div className="tb-table-table" style={{ color: '', border: '1px' }}>
                                        <Button className="btn btn-primary btn-lg " variant="contained" color="primary">
                                            ALL
                                        </Button>
                                        {/* className='NAV font-weight-bold' */}
                                        <Button className="btn1 btn-lg  " style={{ border: 'none' }} variant="contained" color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/previaus"} style={{ border: 'none', color: 'blac' }}>Previous-Month</Link>
                                        </Button>
                                        <Button className="btn2 btn-lg  " style={{ border: 'none' }} variant="contained" color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/this"} style={{ border: 'none', color: 'blac' }}>This-Month</Link>
                                        </Button>
                                        <Button className="btn3 btn-lg  " style={{ border: 'none' }} variant="contained" color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/next"} style={{ border: 'none', color: 'blac' }}>Next-Month</Link>
                                        </Button>
                                    </div>
                                </form>
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
                                                    <TableCell>UserName</TableCell>
                                                    <TableCell>MobileNo</TableCell>
                                                    <TableCell>EmailID</TableCell>
                                                    <TableCell>ActionFor</TableCell>
                                                    <TableCell>start_date</TableCell>
                                                    <TableCell> end_date</TableCell>
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
                                                            <TableCell>{data.UserName}</TableCell>
                                                            <TableCell>{data.MobileNo}</TableCell>
                                                            <TableCell>{data.EmailID}</TableCell>
                                                            <TableCell>{data.ActionFor}</TableCell>
                                                            <TableCell>{moment(data.start_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>{moment(data.end_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>
                                                                <div class="row">
                                                                    <div class="col-1" style={{ bold: '2' }}>
                                                                        <div class="col-1" style={{ bold: '2' }}>
                                                                            <Button className="Submiticone " onClick={() => {
                                                                                history.push('/auctiont2', {
                                                                                    startDate: moment(data.start_date).format("YYYY-MM-DD"),
                                                                                    endDate: moment(data.end_date).format("YYYY-MM-DD"),
                                                                                    UserSubscriptionMainID: (data.UserSubscriptionMainID),
                                                                                })
                                                                            }}>
                                                                                <i class="bi bi-box-arrow-in-down-left font-weight-bold">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                                        <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                        <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
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

