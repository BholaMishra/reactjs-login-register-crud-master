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
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { DateRangeOutlined } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    container: {
        maxHeight: 400,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));


export default function StickyHeadTable() {
    // export default function FullWidthGrid() {
    // const classes = useStyles();

    const history = useHistory();
    const classes = useStyles();

    const [UserID, setUserID] = useState("");
    const [EPPCount, setEPPCount] = useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // // All Data handle for data
    const [data, setData] = useState([]);
    React.useEffect(() => {
        axios.get(` https://qaapi.jahernotice.com/api/Epp/0`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);

    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // const [date, setDate] = useState("")
    React.useEffect(() => {
        axios.get(` https://qaapi.jahernotice.com/api/Epp/`+`${today.getDate()}`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);
   
    // 
    const editrow = (e) => {
        console.log(e)
    }
    const doGet = React.useCallback(async (params) => {
        // setData(await getData(params));
    }, []);
    React.useEffect(() => {
        doGet({});
    }, [doGet]);

    const [search, setSearch] = React.useState('');
    function onSearchChange(action, state) {
        const params = {
            search: state.search,
        };
        doGet(params);
    }
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };


    return (
        <>
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            {/* <ol className="breadcrumb"> */}
                            <Paper sx={{ width: "100%", mb: 0 }}>
                                <ol className="breadcrumb">
                                    <li><h6 className="EPPDite breadcrumb-item active">EPP Details</h6></li>
                                    <li className="breadcrumb-itemac">
                                        <Link className="bread breadcrumb-item active" to={'/dashboard'} >Dashboard</Link>
                                    </li><h6>/</h6>
                                    <li className="breadcrumb-item active">Overview</li>
                                </ol>
                                <div className="AddEpp" style={{ border: 'none', color: 'revert' }}>
                                    <Button className="btn btn-primary tg " id="addd" variant="contained" color="primary">
                                        <Link variant="contained" color="primary" to={"/eppnewadd"} style={{ border: 'none', color: 'white' }}>Add New Epp</Link>
                                    </Button>
                                    {/* <br/> */}
                                    <Button className="btn btn-primary tg " id="addd1" variant="contained" color="primary">
                                        <Link variant="contained" color="primary" to={"/eppnewadd1"} style={{ border: 'none', color: 'white' }}>Add Exiting EPP</Link>
                                    </Button>
                                </div>
                                <br />
                                <form>
                                    <div className="tb-table-table" style={{ color: '', border: '1px' }}>
                                        <Button className="btn btn-primary btn-lg " variant="contained" color="primary">ALL
                                            {/* <Link className='NAV font-weight-bold ' variant="outlined" color="primary" to={"/epp"} style={{ border: 'none', color: 'blac' }}>ALL</Link> */}
                                        </Button>
                                        {/* className='NAV font-weight-bold' */}
                                        <Button className="btn4 btn-lg  " style={{ border: 'none', }} variant="outlined" color="primary">
                                            <Link className='NAV font-weight-bold ' variant="outlined" color="primary" to={"/currentdate"} style={{ border: 'none', color: 'blac' }}>Current-Date</Link>
                                        </Button>
                                        <Button className="btn5 btn-lg  " variant="contained" style={{ border: 'none' }} color="primary">
                                            <Link className='NAV font-weight-bold' variant="contained" color="primary" to={"/customize"} style={{ border: 'none', color: 'blac' }}>Customize</Link>
                                        </Button>
                                    </div>
                                </form>
                                <form>
                                    <div className="form-group">
                                        <input type="date" name="date" class="dateinput" id="usr" placeholder="Date" value={date} onChange={(e)=> {today.getDate(e.target.value)}}  required />
                                    </div>
                                </form>
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
                                                                    <input type="text" value={search} onChange={handleSearch} className="form-control" placeholder="Search for..." aria-label="Search"
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
                                        <Table sx={{ minWidth: 650 }} className="table  table-striped table-hover" size="small" aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Sr.No</TableCell>
                                                    <TableCell>Name</TableCell>
                                                    {/* <TableCell>LastName</TableCell> */}
                                                    <TableCell>MobileNo</TableCell>
                                                    <TableCell>EmailID</TableCell>
                                                    {/* <TableCell>UserID</TableCell> */}
                                                    <TableCell>EPPCount</TableCell>
                                                    {/* <TableCell>group_id</TableCell> */}
                                                    <TableCell>start_date</TableCell>
                                                    <TableCell> end_date</TableCell>
                                                    <TableCell>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((data, index) => (
                                                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{data.FirstName ? data.FirstName : "Null"} {data.LastName}</TableCell>
                                                            {/* <TableCell>{data.LastName}</TableCell> */}
                                                            <TableCell>{data.MobileNo}</TableCell>
                                                            <TableCell>{data.EmailID}</TableCell>
                                                            {/* <TableCell>{data.UserID}</TableCell> */}
                                                            <TableCell>{data.EPPCount}</TableCell>
                                                            {/* <TableCell>{data.group_id}</TableCell> */}
                                                            <TableCell>{moment(data.start_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>{moment(data.end_date).format("MMM/DD/YYYY")}</TableCell>
                                                            <TableCell>
                                                                <div className="container">
                                                                    <div class="row">
                                                                        <div className="col col-lg-3" style={{ marginRight: '12px' }}>
                                                                            <Button className="Di-Boxa" style={{ border: 'none', color: 'black' }} onClick={() => {
                                                                                history.push('/eppt2', {
                                                                                    UserID: (data.UserID)
                                                                                })
                                                                            }} >
                                                                                <i class="bi bi-plus" >
                                                                                    <svg className="Di-Boxa" to={"/eppt2"} width="23" height="23" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                                    </svg></i>
                                                                            </Button>
                                                                        </div>
                                                                        <div className="col col-lg-3" style={{ marginRight: '-5px' }}>
                                                                            <Button className="Submiticone" onClick={() => {
                                                                                history.push('/eppadd1', {
                                                                                    start_date: moment(data.start_date).format("YYYY-MM-DD"),
                                                                                    end_date: moment(data.end_date).format("YYYY-MM-DD"),
                                                                                    UserID: (data.UserID),
                                                                                    active: (data.active == 1),
                                                                                    active: (data.active == 0)
                                                                                })
                                                                            }} style={{ border: 'none' }}>
                                                                                <i class="bi bi-box-arrow-in-down-left font-weight-bold ">
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
}

