import React, { useState, Paper } from 'react';
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

    function saveData() {

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

        fetch("https://qaapi.jahernotice.com/api/addEpp", requestOptions)
            .then(response => response.text())
            .then(result => console.log("Add", result))
            .catch(error => console.log('error', error));
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
        axios.get(`https://qaapi.jahernotice.com/api/UserEpp/?UserName=jay`).then((response) => {
            setData(response.data.data);
            console.log("Ae", response.data.data)
        });
    }, []);



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
                                <div className="form-group s" >
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">UserName</label>
                                    <input class="form-control" list="datalistOptions" id="exampleDataList" name="User_Name" value={user_name} onChange={(e) => { setUser_Name(e.target.value) }} placeholder="Type href search..." />
                                    <datalist id="datalistOptions">
                                        <option>Select UserName</option>
                                        {data.slice(page)
                                            .map((data, index) => (
                                                <option key={index}
                                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                    {data.UserName} - {data.UserID}
                                                </option>
                                            ))}
                                    </datalist>
                                </div>
                                <div className="form-group s">
                                    <label for="usr">District</label>
                                    <input type="text" name="district" value={district} onChange={(e) => { setDistrict(e.target.value) }} class="form-control" id="usr" placeholder="District" required />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">Taluka</label>
                                    <input type="text" name="taluka" value={taluka} onChange={(e) => { setTaluka(e.target.value) }} class="form-control" id="usr" placeholder="Taluka" required />
                                </div>
                                <div className="form-group s">
                                    <label for="usr">Villlage</label>
                                    <input type="text" name="village" value={village} onChange={(e) => { setVillage(e.target.value) }} class="form-control" id="usr" placeholder="Villlage" required />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">Survey Number</label>
                                    <input type="text" name="survey_number" value={survey_number} onChange={(e) => { setSurvey_number(e.target.value) }} class="form-control" id="usr" placeholder="Survey Number" required />
                                </div>
                                <div className="form-group s">
                                    <label for="pwd">Start_Date</label>
                                    <input type="date" class="form-control" value={start_date} onChange={(e) => { setStart_date(e.target.value) }} id="usr" placeholder="Start_Date" />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">End_Date</label>
                                    <input type="date" class="form-control" value={end_date} onChange={(e) => { Setend_date(e.target.value) }} id="usr" placeholder="End_Date" />
                                </div>
                                <div className="form-group s" >
                                    <Button onClick={saveData} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                        Add
                                    </Button>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Auctiont2;
