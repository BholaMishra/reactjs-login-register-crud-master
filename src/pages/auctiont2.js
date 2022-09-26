import React, { useState, Paper, setShow } from 'react';
import { useLocation } from "react-router-dom";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import moment from "moment"
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';


const Auctiont2 = () => {

    const location = useLocation();
    // console.log(location)

    // const id = useState(location.state.UserSubscriptionMainID);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user_name, setUser_Name] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [village, setVillage] = useState("");
    const [endDate, setendDate] = useState(location.state.endDate);
    const [startDate, setstartDate] = useState(location.state.startDate);

    const [UserSubscriptionMainID, setUserSubscriptionMainID] = useState("");
    const [group_id, setGroup_id] = useState("");
    const [survey_number, setSurvey_number] = useState("");

    const [UsersubscriptionMainID, setUsersubscriptionMainID] = useState(location.state.UserSubscriptionMainID);
    const [UserName, setUserName] = useState("");

    const [data, setData] = useState([]);

    React.useEffect(() => {
        axios.get(` https://qaapi.jahernotice.com/api/auction/subscriber/view/${UsersubscriptionMainID}`).then((response) => {
            setData(response.data.data);
            console.log("Bhola", response.data.data)
        });
    }, []);

    function updateUser() {
        let data = { startDate, UsersubscriptionMainID, endDate }
        console.warn("data", data,)
        fetch(`https://qaapi.jahernotice.com/api/auction/update/${UsersubscriptionMainID}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.data)
                setUsersubscriptionMainID()
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
                                        <li><h6 className="EPPDite breadcrumb-item active">Edit</h6></li>
                                        <li className="breadcrumb-itemac">
                                            <Link className="bread breadcrumb-item active" to={'/auction'} >Auction</Link>
                                        </li><h6>/</h6>
                                        <li className="breadcrumb-item active">Overview</li>
                                    </ol>
                                </div>
                                <form className='Tpalerteditformauction'>
                                    <div className="form-group s ">
                                        <label for="usr"> startDate</label>
                                        <input type="date" name=" startDate" value={startDate} onChange={(e) => { setstartDate(e.target.value) }} class="form-control" id="usr" placeholder=" startDate" required />
                                    </div>
                                    <div className="form-group s " >
                                        <label for="usr"> endDate</label>
                                        <input type="date" name=" endDate" value={endDate} onChange={(e) => { setendDate(e.target.value) }} class="form-control" id="usr" placeholder=" endDate" required />
                                    </div>
                                    <br />
                                    <div className="form-group s " >
                                        <Button type="submit" onClick={handleShow} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                            Add
                                        </Button>
                                    </div>
                                </form>
                                <br /><br />
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    className="cardtop"
                                >
                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                    <h4 className='cantentbox'>User Auction Updated</h4>
                                    <h6 className='cantentbo'>Data Updated Sucesfully</h6>
                                    <div class="row justify-content-md-center rowend">
                                        <div class="col col-lg-2">
                                            <Button className='secondaryclose' onClick={updateUser} variant="primary" color="primary">
                                                <Link to={'/auction'}>Yes</Link></Button>
                                        </div>
                                        <div class="col col-lg-2">
                                            <Button className='secondaryclosebutton' variant="secondary" onClick={handleClose}>
                                                No
                                            </Button>
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
export default Auctiont2;
