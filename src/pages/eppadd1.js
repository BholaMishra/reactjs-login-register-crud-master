import React, { useEffect, useState, Paper, } from 'react';
import { useLocation } from "react-router-dom";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from "moment"
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import DatePicker from 'react-datepicker'


const Eppadd1 = () => {

    const location = useLocation();
    console.log(location)
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = useState(location.state.UserID);
    const [user_name, setUser_Name] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [village, setVillage] = useState("");
    const [end_date, setend_date] = useState(location.state.end_date);
    const [start_date, setstart_date] = useState(location.state.start_date);
    const [UserID, setUserID] = useState(location.state.UserID);
    const [Admin_ID, setAdmin_ID] = useState("");
    const [active, setactive] = useState(" ");
    const [group_id, setGroup_id] = useState("");
    const [UserName, setUserName] = useState("");
    const [data, setData] = useState([]);
    const [page, setPage] = useState([]);

    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/EppByID/${UserID}`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);
    function saveData() {
        let data = { Admin_ID, active, UserID, start_date, end_date }
        console.warn("data", data, id)
        fetch(`https://qaapi.jahernotice.com/api/EditByUserID/${UserID}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.data)
                setUserID()
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
                            <ol className="breadcrumb">
                                <div className="container-fluid">
                                    <ol className="breadcrumb">
                                        <li><h6 className="EPPDite2">Edit</h6></li>
                                        <li className="breadcrumb-itemac">
                                            <Link className="bread" to={'/epp'} >EPP Details </Link>
                                        </li><h6>/</h6>
                                        <li className="breadcrumb-item active">Overview</li>
                                    </ol>
                                </div>
                                <DatePicker value={start_date} onChange={(e) => { setstart_date(e.target.value) }} class="form-control" id="usr" placeholder="Start_Date" />
                                <div className="form-group s">
                                    <label for="pwd">Start_Date</label>
                                    <input type="date" value={start_date} onChange={(e) => { setstart_date(e.target.value) }} class="form-control" id="usr" placeholder="Start_Date" />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">End_Date</label>
                                    <input type="date" value={end_date} onChange={(e) => { setend_date(e.target.value) }} class="form-control" id="usr" placeholder="End_Date" />
                                </div>
                                <div className="form-group s">
                                    <label for="pwd">Active</label>
                                </div>
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >UserName</label>
                                <input list="datalistOptions" id="exampleDataList" type="text" value={active} onChange={(e) => { setactive(e.target.value) }} class="form-control" placeholder="District" />
                                <div className="form-group s" >
                                    <Button onClick={handleShow} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">Update</Button>
                                </div>
                                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="cardtop">
                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                    <h4 className='cantentbox'>Are you sure, you want to update this for all survey no?</h4>
                                    <div class="row justify-content-md-center rowend">
                                        <div class="col col-lg-2">
                                            <Button className='secondaryclose' onClick={saveData} variant="primary" color="primary"><Link to={'/epp'}>Yes</Link></Button>
                                        </div>
                                        <div class="col col-lg-2">
                                            <Button className='secondaryclosebutton' variant="secondary" onClick={handleClose}>No</Button>
                                        </div>
                                    </div>
                                </Modal>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Eppadd1;
