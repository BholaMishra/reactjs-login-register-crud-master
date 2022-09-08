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
                                <br /> <br /><br />
                                <form>
                                    <div className="tb-table-table" style={{  border: 'none' }}>

                                        <Button className="btn btn-primary btn-lg "  color="primary">
                                        <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/epp"} style={{ border: 'none', color: 'blac'}}>ALL</Link>
                                        </Button>
                                        {/* className='NAV font-weight-bold' */}
                                        <Button className="btn1 btn-lg  " style={{ border: 'none'  }} variant="contained"  color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/previaus"} style={{ border: 'none', color: 'blac' }}>Previous-Month</Link>
                                        </Button>
                                        <Button className="btn2 btn-lg  " style={{ border: 'none' }}  color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/this"} style={{ border: 'none', color: 'blac' }}>This-Month</Link>
                                        </Button>
                                        <Button className="btn3 btn-lg  " style={{ border: 'none' }}  color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/next"} style={{ border: 'none', color: 'blac' }}>Next-Month</Link>
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
                                </form>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
// export default Dashboard
