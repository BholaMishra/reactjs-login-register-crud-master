import React, { useEffect, useState, Paper } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from "moment"
import axios from "axios";


const Auctionadd = () => {

    const [UserID, setUserID] = useState("");
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

    function saveData() {

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

        fetch("https://qaapi.jahernotice.com/api/auction/subscriber/Insert/82", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
        axios.get(`https://qaapi.jahernotice.com/api/user/detail/search/?UserName=ay`).then((response) => {
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
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                                <br /><br />
                                <br />
                                <div className="form-group s" >
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >UserName</label>
                                    <input class="form-control" type='search' list="datalistOptions" id="exampleDataList" name="User_Name" value={UserID} onChange={(e) => { setUserID(e.target.value) }} placeholder="Select UserName" />
                                    <datalist id="datalistOptions">
                                        <option>Select UserName</option>
                                        {datae.slice(pagee)
                                            .map((datae, index) => (
                                                <option key={index}>
                                                    {datae.UserName} - {datae.UserID}
                                                </option>
                                            ))}
                                    </datalist>
                                </div>

                                <div className="form-group s" >
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Auction For</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="SubType_Name" value={Service_Sub_Type_ID} onChange={(e) => { setService_Sub_Type_ID(e.target.value) }}>
                                        <option>Select Auction For</option>
                                        {dataa.slice(pagea)
                                            .map((dataa, index) => (
                                                <option key={index}>
                                                    {dataa.SubType_Name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div className="form-group s" >
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Distric</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="DistrictName" onChange={onddlChange}>
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
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >Taluka</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="TalukaName" onChange={someComponent} >
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
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref" >Villlage</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="VillageName" value={VillageID} onChange={(e) => { setVillageID(e.target.value) }} >
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
                                    <label for="usr">Start_Date</label>
                                    <input type="date" name="start_date" value={startDate} onChange={(e) => { setstartDate(e.target.value) }} class="form-control" id="usr" placeholder="Start_Date" required />
                                </div>
                                <div className="form-group s" >
                                    <label for="usr">End_Date</label>
                                    <input type="date" name="end_date" value={endDate} onChange={(e) => { setendDate(e.target.value) }} class="form-control" id="usr" placeholder="End_Date" required />
                                </div>
                                <div className="form-group s" >
                                    <Button onClick={saveData} className="btn btn-primary btn-lg btn-block" style={{ margin: '1px' }} variant="contained" color="primary">
                                        Add
                                    </Button>
                                </div>
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
