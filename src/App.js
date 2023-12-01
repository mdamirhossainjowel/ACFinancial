import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import PagenotFound from "./Pages/Shared/PagenotFound";
import PrivateMortgage from "./Pages/Services/PrivateMortgage";
import PersonalLoan from "./Pages/Services/PersonalLoan";
import AutoLoan from "./Pages/Services/AutoLoan";
import HomeLoan from "./Pages/Services/HomeLoan";
import AboutUs from "./Pages/Shared/AboutUs";
import ContactUs from "./Pages/Shared/ContactUs";
import InvestmentManagement from "./Pages/Services/InvestmentManagement";

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/privatemortgage"
          element={<PrivateMortgage></PrivateMortgage>}
        ></Route>
        <Route
          path="/personalloan"
          element={<PersonalLoan></PersonalLoan>}
        ></Route>
        <Route path="/autoloan" element={<AutoLoan></AutoLoan>}></Route>
        <Route path="/homeloan" element={<HomeLoan></HomeLoan>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Contactus" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="/investmanagement"
          element={<InvestmentManagement></InvestmentManagement>}
        ></Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
