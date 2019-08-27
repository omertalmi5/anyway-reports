import React, {useState} from 'react';
import './SubscribeBar.scss'
import axios from "axios";

function SubscribeBar() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    function subscribe(props) {
        axios.post(
            "https://anyway.co.il/location-subscription",
            {
                "address": emailAddress,
                "fname": firstName,
                "lname": lastName,
                "school_id": props.schoolId
            },
            {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9,he;q=0.8",
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "pragma": "no-cache",
                    "sec-fetch-mode": "cors",
                    "x-requested-with": "XMLHttpRequest"
                },
                "method": "POST",
                "mode": "cors"
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
