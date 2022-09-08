import React from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Index = () => {

    return (
        <div>
            <Header />
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={'/dashboard'} >Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item active">CRUD App</li>
                            <li className="ml-auto"><Link to={'add'}>Add Employee</Link></li>
                        </ol>
                        <div className="card mb-3">
                            <div className="card-header"><i className="fas fa-table"></i>
                                &nbsp;&nbsp;Employees List
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Phone No</th>
                                            <th>Email ID</th>
                                            <th>Emp ID</th>
                                            <th>Company</th>
                                            <th>Location</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.employees.map((employees, index) =>
                                            <tr key={employees.id}>
                                                <td>{index + 1}</td>
                                                <td>{employees.name}</td>
                                                <td>{employees.phone}</td>
                                                <td>{employees.emp_id}</td>
                                                <td>{employees.email}</td>
                                                <td>{employees.company}</td>
                                                <td>{employees.location}</td>
                                                <td className="text-center">
                                                    {/* <Link className="btn btn-sm btn-info" to={{ pathname: 'edit', search: '?id=' + employees.id }}>Edit</Link> */}
                                                    &nbsp; | &nbsp;
                                                    {/* <button value={employees.id} className="btn btn-sm btn-danger" disabled={ index === 0  ? true : false} onClick={this.handleClickDelete} >Delete</button> */}
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Index;
