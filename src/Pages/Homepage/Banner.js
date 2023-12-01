import React from "react";


const Banner = () => {
  return (
    <div className="hero bg-base-500 lg:w-auto lg:mx-10 lg:my-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div>
          <p className="text-5xl font-bold lg:w-1/2 pt-10">
          Rebuild your credit and secure a better financial future.
          </p>
          
          
          <button className="btn btn-accent mt-4">Get a Loan</button>
          <p className="text-xl lg:w-1/2 py-4">Applying won’t affect your credit score</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
