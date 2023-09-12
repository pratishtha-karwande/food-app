import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import React from "react";
import './Header.css';
import sampleLocation from "./Location";


const LocationPopup = () => {

  const [pincode, setPincode] = useState('1');
  const navigate = useNavigate();

  const apiKey ="AIzaSyD16tocOFvZLauc_cRqJOsC6_FMzXGiQAc"

  const handleGoClick = () => {
    console.log(pincode);
    navigate('/hotels/' + pincode)
  }

  return (
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h6>Please Enter Your Area Pin Code</h6>
          <select value={pincode} onChange={(e) => setPincode(e.target.value)}  className="pin-box" placeholder="Please select your city...">
            {sampleLocation.map((city) =>  <option key={city.id} value={city.id}>{city.location}</option>)}      
          </select>
        </div>
        <div className="modal-footer">
          <button onClick={handleGoClick} type="button" className="btn btn-secondary" data-dismiss="modal">Go</button>
        </div>
      </div>
    </div>

  );

}

export default LocationPopup;