import React, { useState, Paper } from 'react';
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




const Auctiont2 = () => {

    const location = useLocation();
    console.log(location)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = useState(location.state.userEPPSubscription
    );

    const [user_name, setUser_Name] = useState("");
    const [district, setdistrict] = useState(location.state.district);
    const [taluka, settaluka] = useState(location.state.taluka);
    const [village, setvillage] = useState(location.state.village);
    const [survey_number, setsurvey_number] = useState(location.state.survey_number);
    const [Admin_ID, setAdmin_ID] = useState("");
    const [userEPPSubscription
        , setuserEPPSubscription
    ] = useState(location.state.userEPPSubscription
    );

    const [startDate, setstartDate] = useState("");

    const [user_id, setUser_id] = useState("");
    const [group_id, setGroup_id] = useState("");

    const [UserName, setUserName] = useState("");

    const [data, setData] = useState([]);
    const [UserID, setUserID] = useState([]);

    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com//api/EppByID/`+` ${userEPPSubscription}`).then((response) => {
                setData(response.data.data);
                console.log("Bhola", response.data.data)
            });
    }, []);

    function saveData() {
        let data = {
            userEPPSubscription
            , district, taluka, village, survey_number, Admin_ID
        }
        console.warn("data", data, id)
        fetch(`https://qaapi.jahernotice.com/api/EditUser/${userEPPSubscription
            }`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.data)
                setuserEPPSubscription
                    ()
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
                                        <li><h6 className="EPPDite4">Edit</h6></li>
                                        <li className="breadcrumb-itemac">
                                            <Link className="bread" to={'/eppt2'} >EPP Details By userEPPSubscription
                                            </Link>
                                        </li><h6>/</h6>
                                        <li className="breadcrumb-item active">Overview</li>
                                    </ol>
                                </div>
                                <div className="form-group s">
                                    <label for="usr">district</label>
                                    <input type="text" name="district" value={district} onChange={(e) => { setdistrict(e.target.value) }} class="form-control" id="usr" placeholder="district" required />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">taluka</label>
                                    <input type="text" name="taluka" value={taluka} onChange={(e) => { settaluka(e.target.value) }} class="form-control" id="usr" placeholder="taluka" required />
                                </div>
                                <div className="form-group s">
                                    <label for="usr">Villlage</label>
                                    <input type="text" name="village" value={village} onChange={(e) => { setvillage(e.target.value) }} class="form-control" id="usr" placeholder="Villlage" required />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">Survey Number</label>
                                    <input type="text" name="survey_number" value={survey_number} onChange={(e) => { setsurvey_number(e.target.value) }} class="form-control" id="usr" placeholder="Survey Number" required />
                                </div>
                                <div className="form-group s" >
                                    <Button onClick={handleShow} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                        Add
                                    </Button>

                                </div>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    className="cardtop"
                                >
                                    <CheckCircleOutlineSharpIcon fontSize="large" className='right'></CheckCircleOutlineSharpIcon>
                                    <h4 className='cantentbox'>User EPP Updated</h4>
                                    <h6 className='cantentbo'>EPP Data Updated</h6>
                                    <div class="row justify-content-md-center rowend">
                                        <div class="col col-lg-2">
                                            <Button className='secondaryclose' onClick={saveData} variant="primary" color="primary">
                                                <Link to={'/eppt2'}>Yes</Link></Button>
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
