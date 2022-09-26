import React, { useEffect, useState, } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from "moment"
import axios from "axios";


const Tpalertedit = () => {

    const location = useLocation();
    console.log(location)
    // UserName
    const [UserId, setUserId] = useState(location.state.UserID);
    const [UserID, setUserID] = useState(location.state.UserID);
    const [startDate, setstartDate] = useState(location.state.startDate);
    const [endDate, setendDate] = useState(location.state.endDate);
    const [DistrictID, setDistrictID] = useState(location.state.DistrictID);
    const [VillageID, setVillageID] = useState(location.state.VillageID);
    const [TalukaID, setTalukaID] = useState(location.state.TalukaID);
    const [TPNo, setTPNo] = useState(location.state.TPNo)
    const [ServiceID, setServiceID] = useState(location.state.ServiceID);
    const [UserName, setUserName] = useState("Name");
    const [Service_Sub_Type_ID, setService_Sub_Type_ID] = useState(location.state.Service_Sub_Type_ID);
    const [UserSubscriptionMainID, setUserSubscriptionMainID] = useState(location.state.UserSubscriptionMainID)
    const [start_date, setStart_date] = useState(location.state.startDate);
    const [end_date, setEnd_date] = useState(location.state.endDate);
    // const [UserName, setUserName] = useState("");


    // Select Service
    const [ServiceName, setServiceName] = useState("");
    const [ServiceTitle, setServiceTitle] = useState("");

    // TP Subservice
    const [SubType_Name, setSubType_Name] = useState("");
    const [SubType_ShortName, setSubType_ShortName] = useState("");
    const [IsActive, setIsActive] = useState("");

    // District 
    const [stateID, setstateID] = useState("");
    const [DistrictName, setDistrictName] = useState("");
    const [IsVerified, setIsVerified] = useState("");
    const [RegionID, setRegionID] = useState("");

    // const [auction_for, setAuction_For] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [EmailID, setEmailID] = useState("");
    const [user_name, setUser_Name] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [village, setVillage] = useState("");
    const [VillageName, setVillageName] = useState("");

    //Taluka
    const [TalukaName, setTalukaName] = useState("");


    //Auctionfor
    const [user_ID, setuser_ID] = useState("");
    const [user_id, setuser_id] = useState("");
    const [survey_number, setSurvey_number] = useState("");
    const [group_id, setgroup_id] = useState("");
    // const [auction_for, setAuction_For] = useState("");
    const [CitySurveyOfficeID, setCitySurveyOfficeID] = useState("");

    function saveData(e) {

        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            UserSubscriptionMainID, Service_Sub_Type_ID, DistrictID, TalukaID, VillageID, TPNo, startDate, endDate, UserID, UserName,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://qaapi.jahernotice.com/api/add/tpa", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/userlist/?UserName` + `${UserName}`).then((response) => {
            setData(response.data.data);
            console.log("UserName", response.data.data)
        });
    }, []);

    const [datade, setDatade] = useState([]);
    const [pagede, setPagede] = useState(0);
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/tpservice`).then((response) => {
            setDatade(response.data.data);
            console.log("Service", response.data.data)
        });
    }, []);

    const [dataa, setDataa] = useState([]);
    const [pagea, setPagea] = useState(0);
    const onddlodSubtype = (e) => {
        axios.get(`https://qaapi.jahernotice.com/api/tpsubservice/` + e.target.value).then((response) => {
            setDataa(response.data.data);
            console.log("SubTypeServise", response.data.data)
        });
    }

    const [datab, setDatab] = useState([]);
    const [pageb, setPageb] = useState(0);
    useEffect(function () {
        axios.get(`https://qaapi.jahernotice.com/api/District` + `${stateID}`).then((response) => {
            setDatab(response.data);
            console.log("District", response.data)
        });
    }, []);

    const [datac, setDatac] = useState([]);
    const [pagec, setPagec] = useState(0);
    const onddlChange = (e) => {
        // alert(e.target.value);
        axios.get('https://qaapi.jahernotice.com/api/Taluka/' + e.target.value).then((response) => {
            setDatac(response.data.data);
            console.log("Taluka", response.data.data)
        });
    };

    const [datad, setDatad] = useState([]);
    const [paged, setPaged] = useState(0);
    const someComponent = (e) => {
        axios.get('https://qaapi.jahernotice.com/api/Village/' + e.target.value).then((response) => {
            setDatad(response.data.data);
            console.log("Village", response.data.data)
        });
    }

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        User_Name: "",
        DistrictName: "",
        TalukaName: "",
        VillageName: "",
        SubType_Name: "",
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
        if (!values.DistrictName) {
            error.DistrictName = "District is required Please enter a  District";
        } else if (!values.DistrictName) {
            error.DistrictName = "Please enter a  District ";
        }
        if (!values.TalukaName) {
            error.TalukaName = "Taluka is required Please enter a Taluka";
        } else if (!values.TalukaName) {
            error.TalukaName = "Please enter a Taluka ";
        }
        if (!values.VillageName) {
            error.VillageName = "Village is required Please enter a Village";
        } else if (!values.VillageName) {
            error.VillageName = "Please enter a Village ";
        }
        if (!values.SubType_Name) {
            error.SubType_Name = "SubType_Name is required Please enter a SubType_Name";
        } else if (!values.SubType_Name) {
            error.SubType_Name = "Please enter a SubType_Name ";
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
                                <li><h6 className='EPPDitetptaba breadcrumb-item active'>Edit TP Service</h6></li>
                                {/* <form className='form-group'> */}
                                <li className="breadcrumb-item breadcrumb-item active">
                                    <Link className="breadcrumb-item active" to={'/tpalert'} >TP Services By UserID</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                                <br /><br />
                                <br />
                                {/* <div className="container-fluid"> */}
                                <form className='Tpalerteditform' >
                                    <div className="form-group s" >
                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Select UserName*</label>
                                        <input className="form-control" list="datalistOptions" id="exampleDataList" name="User_Name" onSelect={(e) => { setUserID(e.target.value.split(' - ')[1]) }} placeholder="Type href search..." />
                                        <datalist id="datalistOptions">
                                            <option></option>
                                            {data.slice(page)
                                                .map((data, index) => (
                                                    <option key={data.id} value={data.UserId}
                                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                        {data.UserName} - {data.UserID}
                                                    </option>
                                                ))}
                                        </datalist>
                                    </div>
                                    <div className="form-group s" >
                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Select Service*</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="VillageName" onChange={onddlodSubtype} onClick={(e) => { setServiceID(e.target.value) }} >
                                            <option>Select Service</option>
                                            {datade.slice(pagede)
                                                .map((datade) => (
                                                    <option key={datade.ServiceID} value={datade.ServiceID}
                                                    >
                                                        {datade.ServiceName}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="form-group s" >
                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Select Sub Service*</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="SubType_Name" onClick={(e) => { setService_Sub_Type_ID(e.target.value) }}>
                                            <option>Select Sub Service</option>
                                            {dataa
                                                .map((dataa,) => (
                                                    <option key={dataa.Service_Sub_Type_ID} value={dataa.Service_Sub_Type_ID}>
                                                        {dataa.SubType_Name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="form-group s" >
                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Select Distric*</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="DistrictName" onChange={onddlChange} onClick={(e) => { setDistrictID(e.target.value) }}>
                                            <option>Select district</option>
                                            {datab.slice(pageb)
                                                .map((datab, index) => (
                                                    <option key={datab.id} value={datab.DistrictID} >
                                                        {datab.DistrictName}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="form-group s" >
                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref" >Select Taluka*</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="TalukaName" onChange={someComponent} onClick={(e) => { setTalukaID(e.target.value) }} >
                                            <option>Select Taluka</option>
                                            {datac
                                                .map((datac) => (
                                                    <option key={datac.id} value={datac.TalukaID}>
                                                        {datac.TalukaName}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="form-group s" >
                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref" >Select Villlage*</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="VillageName" value={VillageID} onChange={(e) => { setVillageID(e.target.value) }} >
                                            <option>Select Villlage</option>
                                            {datad.slice(paged)
                                                .map((datad) => (
                                                    <option key={datad.id} value={datad.VillageID}
                                                    >
                                                        {datad.VillageName}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="form-group s">
                                        <label for="usr">Tp Number*</label>
                                        <input type="number" name="Number" className="form-control" value={TPNo} onChange={(e) => { setTPNo(e.target.value) }} id="usr" placeholder="TP Number" required />
                                    </div>

                                    <div className="form-group s">
                                        <label for="usr">Start_Date*</label>
                                        <input type="date" name="start_date" value={startDate} onChange={(e) => { setstartDate(e.target.value) }} class="form-control" id="usr" placeholder="Start_Date" required />
                                    </div>

                                    {/* <p className='FormError'>{formErrors.start_date}</p> */}
                                    <div className="form-group s" >
                                        <label for="usr">End_Date*</label>
                                        <input type="date" name="end_date" value={endDate} onChange={(e) => { setendDate(e.target.value) }} class="form-control" id="usr" placeholder="End_Date" required />
                                    </div>
                                    {/* <p className='FormError'>{formErrors.end_date}</p> */}
                                    <br />
                                    <div className="form-group s" >
                                        <Button type="submit" onClick={saveData} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                            Add
                                        </Button>
                                    </div>
                                </form>
                                {/* </div> */}
                                <br />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tpalertedit;
