// import React, { useState, Paper } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, button } from 'react-router-dom';
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
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
        },
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    root: {

    },
});

//   const classes = useStyles();

export default function StickyHeadTable() {
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
    // handle for pagination data
    //   const [page, setPage] = useState(0);

    //   // handle for tables rows
    //   const [rowsPerPage, setRowsPerPage] = useState(5);


    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/Epp`).then((response) => {
            setData(response.data.data);
            console.log("anuj", response.data.data)
        });
    }, []);

    // import React from 'react';








    return (
        <>
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <Paper sx={{ width: "200%", mb: 0 }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={'/dashboard'} >Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Overview</li>
                                    </ol>
                                    <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
                                        {/* <ul className="nav nav-tabs nav-justified"> */}
                                        <Button className="btn btn-primary tg " id="addd" variant="contained" color="primary">
                                            <Link variant="contained" color="primary" to={"/eppnewadd"} style={{ border: 'none', color: 'white' }}>Add New Epp</Link>

                                        </Button>
                                        {/* <br/> */}
                                        <Button className="btn btn-primary tg " id="addd1" variant="contained" color="primary">
                                            <Link variant="contained" color="primary" to={"/eppnewadd1"} style={{ border: 'none', color: 'white' }}>Add Exiting EPP</Link>
                                        </Button>
                                        {/* <button className="btn btn-primary tg "><Link to={"/eppnewadd"} style={{ border: 'none', color: 'white' }}>Add New APP</Link></button> */}
                                        {/* <button className="btn btn-primary ta  "><Link to={"/eppnewadd1"} style={{ border: 'none', color: 'white' }}>Add Exiting EPP</Link></button> */}
                                        {/* </ul> */}
                                    </div>
                                    <br />
                                    <form>
                                        <div className="tb-table-table" style={{ color: '', border: '1px' }}>

                                            <Button className="btn btn-primary btn-lg " variant="contained" color="primary">
                                                ALL
                                            </Button>
                                            {/* className='NAV font-weight-bold' */}
                                            <Button className="btn1 btn-lg  " style={{ border: 'none' }} variant="contained" color="primary">
                                                <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/previaus"} style={{ border: 'none', color: 'black' }}>Previous-Month</Link>
                                            </Button>
                                            <Button className="btn2 btn-lg  " style={{ border: 'none' }} variant="contained" color="primary">
                                                <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/this"} style={{ border: 'none', color: 'black' }}>This-Month</Link>
                                            </Button>
                                            <Button className="btn3 btn-lg  " style={{ border: 'none' }} variant="contained" color="primary">
                                                <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/next"} style={{ border: 'none', color: 'black' }}>Next-Month</Link>
                                            </Button>

                                        </div>
                                    </form>

                                    {/* <div>Hello</div> */}
                                    {/* <br /> */}
                                    {/* <form>
                                        <div className="tb-table-table" style={{ color: '', border: '1px' }}>
                                            <ul class="nav nav-tabs nav-justified">
                                            <button className="btn btn-primary btn-lg " Active>ALL</button>
                                            <button className="btn1 btn-lg  " style={{ border: 'none' }}><Link to={"/previaus"} style={{ border: 'none' }}>Previous-Month</Link></button>
                                            <button className="btn2 btn-lg " style={{ border: 'none' }}><Link to={"/this"} style={{ border: 'none' }}>This-Month</Link></button>
                                            <button className="btn3 btn-lg " style={{ border: 'none', text: 'bold' }}><Link to={"/next"} style={{ border: 'none' }}>Next-Month</Link></button>
                                            </ul>
                                        </div>
                                    </form> */}
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

                                        {/* <TableContainer component={Paper}> */}
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
                                                    {/* <TableCell>LastName</TableCell> */}
                                                    <TableCell>MobileNo</TableCell>
                                                    <TableCell>EmailID</TableCell>
                                                    <TableCell>UserID</TableCell>
                                                    <TableCell>EPPCount</TableCell>
                                                    <TableCell>group_id</TableCell>
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
                                                            <TableCell>{data.FirstName} {data.LastName}</TableCell>
                                                            {/* <TableCell>{data.LastName}</TableCell> */}
                                                            <TableCell>{data.MobileNo}</TableCell>
                                                            <TableCell>{data.EmailID}</TableCell>
                                                            <TableCell>{data.UserID}</TableCell>
                                                            <TableCell>{data.EPPCount}</TableCell>
                                                            <TableCell>{data.group_id}</TableCell>
                                                            <TableCell>{moment(data.start_date).format("DD/MMM/YYYY")}</TableCell>
                                                            <TableCell>{moment(data.end_date).format("DD/MMM/YYYY")}</TableCell>
                                                            <TableCell>
                                                                <div class="row">
                                                                    <div class="col-1" style={{ bold: '2' }}>

                                                                        <Link className="Di-Boxa" to={"/eppt2"} style={{ border: 'none', color: 'black' }}>
                                                                            <i class="bi bi-plus" >
                                                                                <svg className="Di-Boxa" to={"/eppt2"} width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                                </svg></i></Link>

                                                                    </div>
                                                                    <div class="col-1" style={{ bold: '2' }}>

                                                                        <Link className="Di-Box" to={"/eppadd1"} style={{ border: 'none', color: 'black' }}>
                                                                            <i class="bi bi-box-arrow-in-down-left">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                                                    <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                                                                                </svg></i>
                                                                        </Link>

                                                                    </div>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                        {/* </TableContainer> */}
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
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
// export default Dashboard
