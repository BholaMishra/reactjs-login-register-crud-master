import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AirplayIcon from '@material-ui/icons/Airplay';
import Paper from '@material-ui/core/Paper';
// import Table from
import TableContainer from '@material-ui/core/TableContainer';
// import ListItemButton from '@mui/material/ListItemButton';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Component = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },

    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);

    };
    const [open1, setOpen1] = React.useState(true);
    const handleChange = () => {
        setOpen1(!open1);
    };

    const [open2, setOpen2] = React.useState(true);
    const handleOpen = () => {
        setOpen1(!open2);
    };
    // function NestedList(){

    // }





    return (

        <div id="wrapper">

            <Paper sx={{ width: "100%", mb: 0 }}>
                <TableContainer component={Paper}>
                    <ul className="sidebar navbar-nav">
                        <br />
                        {/* <h6 className='NAV font-weight-bold'>NAVIGATION</h6> */}
                        {/* 
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle font-weight-normal" to={'/epp'} id="pagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="bi bi-cast"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cast" viewBox="0 0 16 16">
                            <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z" />
                            <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z" />
                        </svg>
                        <span>&nbsp;EPP Management</span>
                    </Link>
                    <div className="dropdown-menu font-weight-normal" aria-labelledby="pagesDropdown">
                        <Link to={'/epp'} className="nav-link">
                            <span>&nbsp;EPP</span></Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle font-weight-normal" to={'/auction'} id="pagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="bi bi-cast"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cast" viewBox="0 0 16 16">
                            <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z" />
                            <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z" />
                        </svg>
                        <span>&nbsp;Auction Mangement</span>
                    </Link>
                    <div className="dropdown-menu font-weight-normal" aria-labelledby="pagesDropdown">
                        <Link to={'/auction'} className="nav-link">
                            <span>&nbsp;Auction</span></Link>
                    </div>
                </li> */}

                        {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div> */}
                        {/* <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={''} id="pagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>&nbsp;Pages</span>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                        <a className="dropdown-item" href="login.html">Login</a>
                        {/* <h6 className="dropdown-header">Login Screens:</h6> 
                    </div>
                </li> */}
                        {/* <li className="nav-item">
                    <Link to={'/index'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                        <span>&nbsp;CRUD App</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={'/fileupload'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                        <span>&nbsp;File Upload</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-table"></i>
                        <span>&nbsp;Tables</span></a>
                </li> */}

                        <List className='ButtonDcolore'
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    NAVIGATION
                                </ListSubheader>
                            }
                        >
                            {/* <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem> */}
                            <ListItem button onClick={handleClick} className='ButtonDcolore'>
                                <ListItemIcon  className='ButtonDcolore'>
                                    <AirplayIcon fontSize="small" className='ButtonDcolore' />
                                    <ListItemText className='ButtonDcolore' primary="EPP Management" />
                                </ListItemIcon>
                                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon className='ButtonDcolore'>
                                            {/* <StarBorder /> */}
                                            <Typography className={classes.root}>
                                                <Link className='ButtonDcolore' to={'/epp'} >
                                                    EPP
                                                </Link>
                                            </Typography>
                                            {/* <ListItemText primary="EPP" ><Link to={'/epp'}></Link></ListItemText> */}
                                        </ListItemIcon>
                                    </ListItem>
                                </List>
                            </Collapse>

                        </List>




                        <List className='ButtonDcolore'
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >

                            <ListItem button onClick={handleChange} className='ButtonDcolore'>
                                <ListItemIcon>
                                    <AirplayIcon fontSize="small" className='ButtonDcoloreicon' />
                                    <ListItemText className='ButtonDcolore' primary="Auction Management" />
                                </ListItemIcon>
                                {/* {open1 ? <ExpandLess /> : <ExpandMore />} */}
                            </ListItem>
                            <Collapse in={open1} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <Typography >
                                                <Link className='ButtonDcolore' to={'/auction'} >
                                                    Auction
                                                </Link>
                                            </Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>


                        <List className='ButtonDcolore'
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >

                            <ListItem button  className='ButtonDcolore'>
                                {/* {open2 ? <ExpandLess /> : <ExpandMore />} */}
                                <ListItemIcon>
                                    {/* <AirplayIcon /> */}
                                    <ListItemText  primary="Setting" />
                                </ListItemIcon>
                                {/* <h6>Setting</h6> */}
                            </ListItem>
                            <Collapse in={open2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <Typography >
                                                <Link className='ButtonDcolore' to={'/login'} >
                                                Sign In
                                                </Link>
                                            </Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </List>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <Typography >
                                                <Link className='ButtonDcolore' to={'/register'} >
                                                    Sign Up
                                                </Link>
                                            </Typography>
                                        </ListItemIcon>

                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </ul>
                </TableContainer>
            </Paper>
        </div >
    );
}

export default Component;



