import React, { useState, Paper, useHistory } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from "moment"
import axios from "axios";



const Auctiont2 = () => {

    const [user_name, setUser_Name] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [village, setVillage] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, Setend_date] = useState("");
    const [user_id, setUser_id] = useState("");
    const [group_id, setGroup_id] = useState("");
    const [survey_number, setSurvey_number] = useState("");
    const [user_ID, setUserID] = useState("");
    const [UserName, setUserName] = useState("");

    function saveData(e) {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);

        let data =
            { user_ID, user_name, district, taluka, village, survey_number, }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            district, taluka, village, survey_number, start_date, end_date, user_id, group_id,
            "uname": { // UserID,
                group_id, start_date, end_date, UserName
            },
            "user": null
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            fetch("https://qaapi.jahernotice.com/api/addEpp", requestOptions)
                .then(response => response.text())
                .then(result => console.log("Add", result))
                .catch(error => console.log('error', error.user));
            // history("/", { replace: true });
        }
    }

    // const Datatable = () => {
    // All Data handle for data
    const [data, setData] = useState([]);
    // handle for pagination data
    const [page, setPage] = useState(0);
    // handle for tables rows
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // pagination set new Page
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // handle Change Rows PerPage
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/UserEpp/?UserName` + `${UserName}`).then((response) => {
            setData(response.data.data);
            console.log("Ae", response.data.data)
        });
    }, []);


    // const history = useHistory();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        User_Name: "",
        district: "",
        taluka: "",
        village: "",
        survey_number: "",
        start_date: "",
        end_date: "",

    });

    const changeHandler = (e) => {
        const { name, value, } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        if (!values.User_Name) {
            error.User_Name = "User_Name is required Please enter a User_Name";
        }
        if (!values.district) {
            error.district = "District is required Please enter a  District";
        } else if (!values.district) {
            error.district = "Please enter a  District ";
        }
        if (!values.taluka) {
            error.taluka = "Taluka is required Please enter a Taluka";
        } else if (!values.taluka) {
            error.taluka = "Please enter a Taluka ";
        }
        if (!values.village) {
            error.village = "Village is required Please enter a Village";
        } else if (!values.village) {
            error.village = "Please enter a Village ";
        }
        if (!values.survey_number) {
            error.survey_number = "Survey_Number is required Please enter a Survey_Numbar";
        } else if (!values.survey_number) {
            error.survey_number = "Please enter a Survey_Numbar ";
        }
        // const re/gex = Date;
        if (!values.start_date) {
            error.start_date = "Start_Date is required Please enter a Start_Date";
        } 
        // const regex1 = end_date;
        if (!values.end_date) {
            error.end_date = "End_Date is required Please enter a End_Date";
        } 
        return error;
    };



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
                                        <li><h6 className="EPPDiteaa breadcrumb-item active">ADD Existing EPP</h6></li>
                                        <li className="breadcrumb-itemac">
                                            <Link className="bread breadcrumb-item active" to={'/epp'} >EPP Details </Link>
                                        </li><h6>/</h6>
                                        <li className="breadcrumb-item active">Overview</li>
                                    </ol>
                                </div>
                                <form class="parsley-examples" onChange={changeHandler}>
                                    <div className="form-group s" >
                                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">UserName*</label>
                                        <input type="text" className="form-control" list="datalistOptions" id="exampleDataList" name="User_Name" value={user_name} onChange={(e) => { setUser_Name(e.target.value) }} placeholder="Type href search..." required />
                                        <datalist id="datalistOptions">
                                            <option>Select UserName</option>
                                            {data.slice(page)
                                                .map((data, index) => (
                                                    <option key={index}
                                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                        {data.UserName} - {data.UserID}
                                                    </option>
                                                ))}
                                        </datalist><p className='FormError'>{formErrors.User_Name}</p>
                                    </div>
                                    <div className="form-group s">
                                        <label for="usr">District*</label>
                                        <input type="text" name="district" value={district} onChange={(e) => { setDistrict(e.target.value) }} className="form-control" id="usr" placeholder="District" required />
                                    </div><p className='FormError'>{formErrors.district}</p>
                                    <div className="form-group s" >
                                        <label for="usr">Taluka*</label>
                                        <input type="text" name="taluka" value={taluka} onChange={(e) => { setTaluka(e.target.value) }} className="form-control" id="usr" placeholder="Taluka" required />
                                    </div><p className='FormError'>{formErrors.taluka}</p>
                                    <div className="form-group s">
                                        <label for="usr">Villlage*</label>
                                        <input type="text" name="village" value={village} onChange={(e) => { setVillage(e.target.value) }} className="form-control" id="usr" placeholder="Villlage" required />
                                    </div><p className='FormError'>{formErrors.village}</p>
                                    <div className="form-group s" >
                                        <label for="usr">Survey Number*</label>
                                        <input type="num" name="survey_number" value={survey_number} onChange={(e) => { setSurvey_number(e.target.value) }} className="form-control" id="usr" placeholder="Survey Number" required />
                                    </div><p className='FormError'>{formErrors.survey_number}</p>
                                    <div className="form-group s">
                                        <label for="start">Start_Date*</label>
                                        <input type="date" name="start_date" className="form-control" value={start_date} onChange={(e) => { setStart_date(e.target.value) }} id="start" placeholder="Start_Date" required />
                                    </div><p className='FormError'>{formErrors.start_date}</p>
                                    <div className="form-group s" >
                                        <label for="date">End_Date*</label>
                                        <input type="date" name="end_date" className="form-control" value={end_date} onChange={(e) => { Setend_date(e.target.value) }} id="end" placeholder="End_Date" required />
                                    </div><p className='FormError'>{formErrors.end_date}</p>
                                    <br />
                                    <div className="form-group s" >
                                        <Button type="submit" onClick={saveData} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                            Add
                                        </Button>
                                    </div>
                                </form>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Auctiont2;
