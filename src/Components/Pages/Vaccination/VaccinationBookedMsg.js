import React from "react";
import VaccineImg from "../../../assets/images/vaccine-message.jpg";
import "./VaccinationBookedMsg.css";
const VaccinationBookedMsg = () => {
  return (
    <div className="vaccination-booked_msg">
      <img src={VaccineImg} alt="Vaccination-booked" />
      <p>
        Your vaccination slot has been already booked, you will receive your
        message from covid care for the vennue
      </p>
    </div>
  );
};

export default VaccinationBookedMsg;
