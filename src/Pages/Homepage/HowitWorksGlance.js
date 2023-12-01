import React from "react";


const HowitWorksGlance = () => {
  return (
    <div className="hero bg-base-100 lg:w-auto lg:mx-10 lg:my-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div>
          <p className="text-5xl font-bold lg:w-1/2 pt-10">
          Providing Everyday Canadians a Path to a Better Tomorrow, Today.
          </p>
          <p className="text-2xl font-bold lg:w-1/2 py-4">Loans up to $100,000</p>
          
          <button className="btn btn-accent">Get Started</button>
          <p className="text-xl lg:w-1/2 py-4">Applying won’t affect your credit score</p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorksGlance;
