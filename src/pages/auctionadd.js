import React, { useEffect, useState, Paper } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from "moment"
import axios from "axios";
import { data } from 'jquery';


const Auctionadd = () => {

    const location = useLocation("");
    console.log()

    const [UserID, setUserID] = useState("");
    const [UserId, setUserId] = useState("");
    const [Service_Sub_Type_ID, setService_Sub_Type_ID] = useState("");
    const [DistrictID, setDistrictID] = useState("");
    const [TalukaID, setTalukaID] = useState("");
    const [VillageID, setVillageID] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [startDate, setstartDate] = useState("");
    const [endDate, setendDate] = useState("");
    //UNAME
    const [user_id, setUser_id] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [EmailID, setEmailID] = useState("");
    const [UserName, setUserName] = useState("");
    const [user_name, setUser_Name] = useState("");
    const [auction_for, setAuction_For] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [village, setVillage] = useState("");
    //Auctionfor
    const [ServiceID, setServiceID] = useState("");
    const [SubType_ShortName, setSubType_ShortName] = useState("");
    const [IsActive, setIsActive] = useState("");
    const [SubType_Name, setSubType_Name] = useState("");
    const [Price, setPrice] = useState("");
    const [Currency, setCurrency] = useState("");
    const [AdhocServiceID, setAdhocServiceID] = useState("");
    const [Fixed_Variable, setFixed_Variable] = useState("");
    //District
    const [DistrictName, setDistrictName] = useState("");
    const [IsVerified, setIsVerified] = useState("");
    const [stateID, setstateID] = useState("");
    const [RegionID, setRegionID] = useState("");
    //Taluka
    const [TalukaName, setTalukaName] = useState("");
    //Village
    const [VillageName, setVillageName] = useState("");
    const [CitySurveyOfficeID, setCitySurveyOfficeID] = useState("");
    var DistrictData;
    var TalukaData;
    var VillageData;
    const [validated, setValidated] = useState(false);

    function saveData(e) {

        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            UserID, Service_Sub_Type_ID, DistrictID, TalukaID, VillageID, startDate, endDate,
            "uname": {
                UserID, FirstName, LastName, MobileNo, EmailID, UserName, user_id, user_name, auction_for, district, taluka, village,
            },
            "aucfor": { Service_Sub_Type_ID, ServiceID, SubType_Name, SubType_ShortName, IsActive, Price, Currency, AdhocServiceID, Fixed_Variable },
            "dist": { DistrictID, DistrictName, IsVerified, stateID, RegionID },
            "tal": { TalukaID, DistrictID, TalukaName, IsVerified },
            "vill": { VillageID, TalukaID, VillageName, IsVerified, CitySurveyOfficeID }
        })
        // var raw = JSON.stringify({ user_name, auction_for, district, taluka, village, })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // if (Object.keys(formErrors).length === 0 && isSubmit) {
        fetch(`https://qaapi.jahernotice.com/api/auction/subscriber/Insert/${UserID}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        // }
        // setUserID();


    }

    // All Data handle for data
    const [datae, setDatae] = useState([]);
    //    const handleDelete = this.props.onDelete(this.props.searchItem);
    // handle for pagination data
    const [pagee, setPagee] = useState(0);
    // handle for tables rows
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // pagination set new Pagee
    const handleChangePage = (event, newPage) => {
        setPagee(newPage);
    };
    // handle Change Rows PerPage
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPagee(0);
    };
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/user/detail/search/?UserName` + `${UserName}`).then((response) => {
            setDatae(response.data.data);
            console.log("UserName", response.data.data)
        });
    }, []);

    const [dataa, setDataa] = useState([]);
    const [pagea, setPagea] = useState(0);
    React.useEffect(() => {
        axios.get(`https://qaapi.jahernotice.com/api/auction/service/type`).then((response) => {
            setDataa(response.data.data);
            console.log("Auction For", response.data.data)
        });
    }, []);

    const [datab, setDatab] = useState([]);
    const [pageb, setPageb] = useState(0);
    useEffect(function () {
        axios.get(`https://qaapi.jahernotice.com/api/District`).then((response) => {
            setDatab(response.data);
            console.log("District", response.data)
        });
    }, []);
    //   const [datan, setDatan] = useState([]);
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
                                {/* <form className='form-group'> */}
                                <li><h6 className="EPPDite3 breadcrumb-item active">ADD Auction</h6></li>
                                <li className="breadcrumb-item">
                                    <Link className='breadcrumb-item active' to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                                <br /><br />
                                <br />
                                <form className='Tpalerteditform' >
                                    <div className="form-group s" >
                                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >UserName</label>
                                        <input class="form-control" type='search' list="datalistOptions" id="exampleDataList" name="User_Name" onChange={(e) => { setUserID(e.target.value.split(' - ')[1]) }} placeholder="Select UserName" required />
                                        <datalist id="datalistOptions">
                                            <option>Select UserName</option>
                                            {datae.slice(pagee)
                                                .map((datae, index) => (
                                                    <option key={datae.id} value={datae.UserId}>
                                                        {datae.UserName} - {datae.UserID}
                                                    </option>
                                                ))}
                                        </datalist>
                                        {/* <p className='FormError'>{formErrors.User_Name}</p> */}
                                    </div>

                                    <div className="form-group s" >
                                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Auction For</label>
                                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="SubType_Name" onChange={(e) => { setService_Sub_Type_ID(e.target.value) }} required>
                                            <option>Select Auction For</option>
                                            {dataa.slice(pagea)
                                                .map((dataa, index) => (
                                                    <option key={dataa.Service_Sub_Type_ID} value={dataa.Service_Sub_Type_ID}>
                                                        {dataa.SubType_Name}
                                                    </option>
                                                ))}
                                        </select>
                                        {/* <p className='FormError'>{formErrors.SubType_Name}</p> */}
                                    </div>

                                    <div className="form-group s" >
                                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Distric</label>
                                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="DistrictName" onChange={onddlChange} onClick={(e) => { setDistrictID(e.target.value) }} required>
                                            <option>Select district</option>
                                            {datab.slice(pageb)
                                                .map((datab, index) => (
                                                    <option key={datab.id} value={datab.DistrictID} >
                                                        {datab.DistrictName}
                                                    </option>
                                                ))}
                                        </select>
                                        {/* <p className='FormError'>{formErrors.DistrictName}</p> */}
                                    </div>

                                    <div className="form-group s" >
                                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >Taluka</label>
                                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="TalukaName" onChange={someComponent} onClick={(e) => { setTalukaID(e.target.value) }} required >
                                            <option>Select Taluka</option>
                                            {datac
                                                .map((datac) => (
                                                    <option key={datac.id} value={datac.TalukaID}>
                                                        {datac.TalukaName}
                                                    </option>
                                                ))}
                                        </select>
                                        {/* <p className='FormError'>{formErrors.TalukaName}</p> */}
                                    </div>

                                    <div className="form-group s" >
                                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >Villlage</label>
                                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="VillageName" value={VillageID} onChange={(e) => { setVillageID(e.target.value) }} required >
                                            <option>Select Villlage</option>
                                            {datad.slice(paged)
                                                .map((datad) => (
                                                    <option key={datad.id} value={datad.VillageID}
                                                    >
                                                        {datad.VillageName}
                                                    </option>
                                                ))}
                                        </select>
                                        {/* <p className='FormError'>{formErrors.VillageName}</p> */}
                                    </div>
                                    <div className="form-group s">
                                        <label for="usr">Start_Date</label>
                                        <input type="date" name="start_date" value={startDate} onChange={(e) => { setstartDate(e.target.value) }} class="form-control" id="usr" placeholder="Start_Date" required />
                                    </div>
                                    {/* <p className='FormError'>{formErrors.start_date}</p> */}
                                    <div className="form-group s" >
                                        <label for="usr">End_Date</label>
                                        <input type="date" name="end_date" value={endDate} onChange={(e) => { setendDate(e.target.value) }} class="form-control" id="usr" placeholder="End_Date" required />
                                    </div>
                                    {/* <p className='FormError'>{formErrors.end_date}</p> */}
                                    <br />
                                    <div className="form-group s" >
                                        <Button type="submit" className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                            Add
                                        </Button>
                                    </div>
                                </form>
                                <br />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Auctionadd;
