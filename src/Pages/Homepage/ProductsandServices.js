import React from "react";
import { Link } from "react-router-dom";

const ProductsandServices = () => {
  return (
    <div className="bg-secondary pb-10 px-10 w-auto">
      <p className="text-4xl pt-14  text-center font-bold text-white">
        Our Products & Services
      </p>
      <p className="text-4xl pt-2 text-center text-white">
        Compare our loans and choose the product
      </p>
      <p className="text-4xl pt-2 text-center text-white">
        that’s right for you
      </p>
      <div className="flex flex-col mx-2 items-center justify-center lg:flex-row lg:justify-evenly mt-6 ">
        <div className="card w-auto lg:w-96 lg:h-96 mb-4 lg:mr-2 bg-base-100 shadow-xl">
          {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
          <div className="card-body ">
            <h2 className="card-title">Private Mortgage</h2>
            <p className="text-justify">
              Acquire an unsecured private mortgage without the necessity for a
              credit history, and enjoy the flexibility to settle the loan at
              any time without incurring penalties.
            </p>

            <div className="text-left mb-6">
              <p className="font-bold text-sm">Amounts from: N/A</p>
              <p className="font-bold text-sm">Rates starting from: N/A</p>
              <p className="font-bold text-sm">Terms from: N/A</p>
            </div>
            <div className="card-actions justify-center">
              <Link className="btn btn-accent " to="/privatemortgage">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-96 mb-4 lg:mr-2  bg-base-100 shadow-xl">
          {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
          <div className="card-body ">
            <h2 className="card-title">Personal Loan</h2>
            <p className="text-justify">
              Leverage the equity within your residence to secure a personal
              loan, granting you access to augmented funds, diminished interest
              rates, and reduced payment amounts.
            </p>
            <div className="text-left mb-6">
              <p className="font-bold text-sm">Amounts from: N/A</p>
              <p className="font-bold text-sm">Rates starting from: N/A</p>
              <p className="font-bold text-sm">Terms from: N/A</p>
            </div>

            <div className="card-actions justify-center">
              <Link className="btn btn-accent " to="/personalloan">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-96 mb-4 lg:mr-2 bg-base-100 shadow-xl">
          {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
          <div className="card-body ">
            <h2 className="card-title">Auto Loan</h2>
            <p className="text-justify">
              Acquire the desired automobile through pre-approved financing,
              enabling you to ascertain your affordability and exercise control
              over the purchase of your next vehicle.
            </p>
            <div className="text-left mb-6">
              <p className="font-bold text-sm">Amounts from: N/A</p>
              <p className="font-bold text-sm">Rates starting from: N/A</p>
              <p className="font-bold text-sm">Terms from: N/A</p>
            </div>
            <div className="card-actions justify-center">
              <Link className="btn btn-accent " to="/autoloan">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 lg:h-96 mb-4 lg:mr-2 bg-base-100 shadow-xl">
          {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
          <div className="card-body">
            <h2 className="card-title">Home Loan</h2>
            <p className="text-justify">
              Utilize the equity in your residence to access increased funds,
              benefit from reduced interest rates, and achieve lower monthly
              payment amounts.
            </p>
            <div className="text-left mb-6">
              <p className="font-bold text-sm">Amounts from: N/A</p>
              <p className="font-bold text-sm">Rates starting from: N/A</p>
              <p className="font-bold text-sm">Terms from: N/A</p>
            </div>
            <div className="card-actions justify-center">
              <Link className="btn btn-accent " to="/homeloan">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsandServices;
