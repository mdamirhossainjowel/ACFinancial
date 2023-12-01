import React from "react";

const FeaturedServices = () => {
  return (
    <div className="bg-primary p-10">
        <p className="text-4xl pt-6 text-center font-bold text-white">Featured</p>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-evenly mt-6 ">
      <div className="card lg:w-96 lg:h-96 mb-4 lg:mr-2 bg-base-100 shadow-xl">
  {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">Get a 2% lower rate with a co-applicant</h2>
    <p className="text-justify">Lower your rate and get approved for more money when you borrow together.</p>
    <div className="card-actions">
      <button className="btn btn-accent">Apply Now</button>
    </div>
  </div>
</div>
      <div className="card lg:w-96 lg:h-96 mb-4 lg:mr-2  bg-base-100 shadow-xl">
  {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">Refer a friend and get $100</h2>
    <p className="text-justify">We’re here for you. Be there for them. Get $100 when you refer a friend. Visit your local branch for more details.</p>
    <div className="card-actions">
      <button className="btn btn-accent">Apply Now</button>
    </div>
  </div>
</div>
      <div className="card lg:w-96 lg:h-96 mb-4 lg:mr-2 bg-base-100 shadow-xl">
  {/* <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">NEW! Introducing the goeasy Connect Mobile App</h2>
    <p className="text-justify">Get real-time access to your account details, payment information, and pre-approved offers so you know how much you can borrow and at what rates.</p>
    <div className="card-actions">
      <button className="btn btn-accent">Apply Now</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default FeaturedServices;
