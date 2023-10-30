import './edit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const EditForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const userData = location.state;
    console.log(userData);
    const [editData, setEditData] = useState({
        username: userData.username,
        firstname: userData.firstname,
        lastname: userData.lastname,
        organisationname: userData.organisationname,
        email: userData.email,
        location: userData.location,
        phonenumber: userData.phonenumber,
        birthday: userData.birthday,
        id: userData.id
    })

    const onInputChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = () => {

        axios.put(`http://localhost:2000/${userData.id}`, {
            ...editData,
        })
            .then(response => {
                console.log(response);
                navigate('/details')
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <>
            <Header />
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <a className="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
                    <a className="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
                    <a className="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
                    <a className="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page" target="__blank">Notifications</a>
                </nav>
                <hr className="mt-0 mb-4" />

                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">

                                <form type='submit'>
                                    <div className="mb-3">
                                        <label className="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                        <input className="form-control" name='username' id="inputUsername" type="text" placeholder="Enter your username" defaultValue={userData?.username} onChange={(e) => onInputChange(e)} />
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" for="inputFirstName">First name</label>
                                            <input className="form-control" name='firstname' id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue={userData?.firstname} onChange={(e) => onInputChange(e)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" for="inputLastName">Last name</label>
                                            <input className="form-control" name='lastname' id="inputLastName" type="text" placeholder="Enter your last name" defaultValue={userData?.lastname} onChange={(e) => onInputChange(e)} />
                                        </div>
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" for="inputOrgName">Organization name</label>
                                            <input className="form-control" name='organisationname' id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue={userData?.organisationname} onChange={(e) => onInputChange(e)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" for="inputLocation">Location</label>
                                            <input className="form-control" name='location' id="inputLocation" type="text" placeholder="Enter your location" defaultValue={userData?.location} onChange={(e) => onInputChange(e)} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                        <input className="form-control" name='email' id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue={userData?.email} onChange={(e) => onInputChange(e)} />
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" for="inputPhone">Phone number</label>
                                            <input className="form-control" name='phonenumber' id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue={userData?.phonenumber} onChange={(e) => onInputChange(e)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" for="inputBirthday">Birthday</label>
                                            <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" defaultValue={userData?.birthday} onChange={(e) => onInputChange(e)} />
                                        </div>
                                    </div>

                                    <button className="btn btn-primary" type="button" onClick={() => handleEdit()}>Save changes</button>
                                    <button style={{marginLeft:5}} className="btn btn-primary" type="button" onClick={() => navigate(-1)}>Back</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditForm;