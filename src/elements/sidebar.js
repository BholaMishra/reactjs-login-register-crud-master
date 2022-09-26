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
            paddingBottom: 2,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },

    }));

    // EPP
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);

    };
    // Auction
    const [open1, setOpen1] = React.useState(true);
    const handleChange = () => {
        setOpen1(!open1);
    };

    // TP Alert
    const [open2, setOpen2] = React.useState(true);
    const handleChangeone = () => {
        setOpen2(!open2);
    };
    // Login
    const [open3, setOpen3] = React.useState(true);
    const handleOpen = () => {
        setOpen3(!open3);
    };


    // function NestedList(){

    // }





    return (

        <div id="wrapper">
            <Paper sx={{ width: "100%", mb: 0 }}>
                {/* <TableContainer component={Paper}> */}
                <ul className="sidebar navbar-nav">
                    <br />
                    <h6 className="EPPDite2 breadcrumb-item active" component="div" id="nested-list-subheader" style={{marginLeft:"18px"}}>NAVIGATION</h6>
                    <List className='ButtonDcolore'
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItem button onClick={handleClick} className='ButtonDcolore'>
                            <ListItemIcon className='ButtonDcolore'>
                                <AirplayIcon fontSize="small" className='ButtonDcolore' />
                                <ListItemText className='ButtonDcolore' primary="EPP Management" />
                            </ListItemIcon>
                            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon className='ButtonDcolore' style={{ fontSize: 'medium' }}>
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
                        {/* Auction Dropdwon */}
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
                                    <ListItemIcon style={{ fontSize: 'medium' }}>
                                        <Typography >
                                            <Link className='ButtonDcolore' to={'/auction'} >
                                                Auction
                                            </Link>
                                        </Typography>
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        </Collapse>
                        {/* TP DropDwon */}
                        <ListItem button onClick={handleChangeone} className='ButtonDcolore'>
                            <ListItemIcon className='ButtonDcolore'>
                                <AirplayIcon fontSize="small" className='ButtonDcolore' />
                                <ListItemText className='ButtonDcolore' primary="TP Alert" />
                            </ListItemIcon>
                            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                        </ListItem>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon className='ButtonDcolore' style={{ fontSize: 'medium' }}>
                                        {/* <StarBorder /> */}
                                        <Typography className={classes.root}>
                                            <Link className='ButtonDcolore' to={'/tpalert'} >
                                                TP Users
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
                        aria-labelledby="nested-list-subheader">
                        <ListItem button className='ButtonDcolore'>
                            {/* {open2 ? <ExpandLess /> : <ExpandMore />} */}
                            <ListItemIcon>
                                {/* <AirplayIcon /> */}
                                <ListItemText primary="Setting" />
                            </ListItemIcon>
                            {/* <h6>Setting</h6> */}
                        </ListItem>
                        <Collapse in={open3} timeout="auto" unmountOnExit>
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
                {/* </TableContainer> */}
            </Paper>
        </div >
    );
}

export default Component;



