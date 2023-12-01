import React from "react";

import Banner from "./Banner";
// import BussinesSummury from "./BussinesSummury";
import FeaturedServices from "./FeaturedServices";
import ProductsandServices from "./ProductsandServices";
import ServicesGlance from "./ServicesGlance";
// import HowitWorksGlance from "./HowitWorksGlance";
// import FinancialStatus from "./FinancialStatus";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <BussinesSummury></BussinesSummury> */}

      <ProductsandServices></ProductsandServices>
      <FeaturedServices></FeaturedServices>
      <ServicesGlance></ServicesGlance>
      {/* <HowitWorksGlance></HowitWorksGlance>
     <FinancialStatus></FinancialStatus> */}
    </div>
  );
};

export default Home;
