import React, {useState} from 'react';
import './SubscribeBar.scss'
import axios from "axios";

function SubscribeBar(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    function subscribe() {
        axios.post(
            "https://anyway.co.il/location-subscription",
            {
                "address": emailAddress,
                "fname": firstName,
                "lname": lastName,
                "school_id": parseInt(props.schoolId)
            },
            {
                "method": "POST",
            }
        )
            .then(function (response) {
                console.log(response.data)
            });
    }

    return (
        <div className="subscribe-bar">
            <div className="header-item">
                <span className="label">שם פרטי</span>
                <input value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </div>
            <div className="header-item">
                <span className="label">שם משפחה</span>
                <input value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <div className="header-item">
                <span className="label">מייל</span>
                <input value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)}/>
            </div>
            <div className="header-item">
                <button onClick={subscribe}>הרשם לעדכונים</button>
            </div>
        </div>
    );
}

export default SubscribeBar;
