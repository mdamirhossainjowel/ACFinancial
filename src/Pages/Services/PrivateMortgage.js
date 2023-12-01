import React from "react";
import PrvatemortgageCard from "./PrvatemortgageCard";

const PrivateMortgage = () => {
  return (
    <div>
      <div className="hero bg-base-500 lg:w-auto lg:mx-10 lg:my-20 ">
        <div className="hero-content">
          <div>
            <p className="text-5xl font-bold pt-10">
              Take a Loan from Private Mortgage.
            </p>

            <button className="btn btn-accent mt-4">Get a Loan</button>
            <p className="text-xl lg:w-1/2 py-4">
              Applying won’t affect your credit score
            </p>
          </div>
        </div>
      </div>
      <PrvatemortgageCard></PrvatemortgageCard>
    </div>
  );
};

export default PrivateMortgage;
