import React from "react";
import location from "../../Assets/location.png";
import phone from "../../Assets/phone.png";
import email from "../../Assets/images.png";
const ContactUs = () => {
  return (
    <div className="card lg:w-2/3 bg-base-100 mx-auto">
      <div className="card-body">
        <p className="text-justify text-2xl">
          AC Financial & Investment Canada Inc are dedicated to delivering
          exemplary client service. Our seasoned professionals are available to
          address your financial inquiries during standard Canadian business
          hours. Whether you seek clarification on our services or require
          assistance with your investment portfolio, we stand ready to assist.
        </p>
        <p className="text-justify text-2xl">
          For personalized attention, we kindly request you to schedule an
          appointment via phone or email prior to visiting our office. Your
          understanding is greatly appreciated.
        </p>

        <div className="flex text-left mt-4">
          <img className="w-8 h-8" src={phone} alt="located"></img>
          <p className="text-xl font-bold p-1">+1 416 264 5678</p>
        </div>
        <div className="flex text-left mt-4">
          <img className="w-8 h-8" src={email} alt="located"></img>
          <p className="text-xl font-bold p-1">info@acfinancial.ca</p>
        </div>

        <div className="flex text-left mt-4">
          <img className="w-10 h-10" src={location} alt="located"></img>
          <p className="text-xl font-bold p-1">Visit Our Office:</p>
        </div>
        <p className="text-justify text-xl">Unit 205, 3489 Kingston Road</p>
        <p className="text-justify text-xl">Toronto, ON M1M 1R4</p>
        <h2 className="card-title">Office Hours:</h2>
        <p className="text-justify text-xl">
          Monday to Friday, 9:00 am to 5:00 pm
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
