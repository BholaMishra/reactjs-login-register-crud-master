import React from 'react';
import { Link, Redirect } from "react-router-dom";
import TitleComponent from "../pages/title";
import Sidebar from '../elements/sidebar'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const Header = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));
    const classes = useStyles();


    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
            {/* <div className={classes.root}>
                <Avatar alt="Bemy Sharp" src="" />
            </div> */}

            <TitleComponent title="EPP Module"></TitleComponent>
            <FormatAlignJustifyIcon className='hemb'>
                <Link className='ButtonDcolore' to={'/header'}></Link>
            </FormatAlignJustifyIcon>
                <h6 className='font-weight-bolddn'><Link to={'/'} className="navbar-brand mr-0">EPP Module</Link></h6>
            <i className="btn btn-link btn-sm text-white order-1 order-sm-0  " id="sidebarToggle">

            </i>
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group-mb-3">
                    <div className="input-group a">
                        <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
                            aria-describedby="basic-addon2" style={{ height: '2rem', width: '-40rem', }} />
                        <div className="input-group-append" >
                            <Button className=" btn-primary " type="button" style={{
                                width: '2.5rem',
                                height: '2rem',
                                border: 'none'
                            }} variant="contained" color="primary">
                                <i className="fas fa-search"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <br /><br />
            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown no-arrow">
                    <Link to={'#'} className="nav-link dropdown-toggle font-weight-bold" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user-circle fa-fw font-weight-bold"  ></i>
                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small}  /> */}
                        Bhola Mishra
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <Link to={'#'} className="dropdown-item ">Welcome ! Bhola</Link>
                        <Link to={'#'} className="dropdown-item">Activity Log</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        {/* <Link to={'#'} onClick={this.handleClickLogout} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">Logout</Link> */}
                    </div>
                </li>


            </ul>
        </nav>
    );
}

export default Header;
