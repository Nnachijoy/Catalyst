import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MyNavBar from "./Component/nav/MyNavBar";
import Footer from "./Component/Footer";
import Comment from "./Component/Comment";
import Commenttwo from "./Component/Commenttwo";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Email from "./Component/Email";
import Resetpassword from "./Component/Resetpassword";
import Otp from "./Component/Otp";
import Newpassword from "./Component/Newpassword";
import SuperDash from "./Component/SuperDash";
import Maindb from "./Component/maindb/Maindb";
import Readmore from "./Component/Readmore";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Component/Dashboard";
import Dhero from "./Component/Dhero";
import Home from "./Component/Home";
import About from "./Component/About";
import OurTeam from "./Component/OurTeam";
import Portfolio from "./Component/Portfolio";
import Blogg from "./Component/Blogg";
import Numbertwo from "./Component/Numbertwo";
import Numberthree from "./Component/Numberthree";
import ContactUs from "./Component/ContactUs";
import Ddd from "./Component/Ddd";
import Notifications from "./Component/Notifications";
import Read from "./Component/Read";
import New from "./Component/New";
import Editdetails from "./Component/Editdetails";
import Socialmedia from "./Component/Socialmedia";
import Teams from "./Component/Teams";
import Traction from "./Component/Traction";
import Documents from "./Component/Documents";
import Reviewdetails from "./Component/Reviewdetails";
import Faq from "./Component/Faq";
import ActivateEmailPage from "./pages/active/[slug]";
import InvMainDb from "./Component/investmentDb/InvMainDb/InvMaindb";
import Resetemail from "./Component/Resetemail";
import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";
import Component3 from "./Component/Component3";
import Component4 from "./Component/Component4";
import Component5 from "./Component/Component5";
import Component6 from "./Component/Component6";
import LoginAdmin from "./Component/LoginAdmin";
import Details from "./Component/Details";
import Approvedpitch from "./Component/Approvedpitch";
import Applicationn from "./Component/Applicationn";
// import ActivateEmailPage from "./pages/active/[slug]";
import RestPasswordPage from "./pages/resetPasswordPage/[slug]";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router-dom";
// import RestPasswordPage from "./pages/resetPasswordPage/[slug]";
import { useEffect } from "react";
function App() {
  let pathName = useLocation();
  useEffect(() => {}, [pathName.pathname]);
  const hideNav = ["/maindb", "/investmentdb"];

  return (
    <>
      {!hideNav.includes(pathName.pathname) && <MyNavBar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogg" element={<Blogg />} />
        <Route path="/numbertwo" element={<Numbertwo />} />
        <Route path="/numberthree" element={<Numberthree />} />

        <Route path="/comment" element={<Comment />} />
        <Route path="/commenttwo" element={<Commenttwo />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email" element={<Email />} />
        <Route path="/newpassword" element={<Newpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/ddd" element={<Ddd />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dhero" element={<Dhero />} />
        <Route path="/active/:slug" element={<ActivateEmailPage />} />
        <Route path="/reset-password/:slug" element={<RestPasswordPage />} />
        <Route path="/superdash" element={<SuperDash />} />
        <Route path="/maindb" element={<Maindb />} />
        <Route path="/dhero" element={<Dhero />} />
        <Route path="/readmore" element={<Readmore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/read" element={<Read />} />
        <Route path="/new" element={<New />} />
        <Route path="/editdetails" element={<Editdetails />} />
        <Route path="/socialmedia" element={<Socialmedia />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/traction" element={<Traction />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/reviewdetails" element={<Reviewdetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/investmentdb" element={<InvMainDb />} />

        <Route path="/resetemail" element={<Resetemail />} />
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
        <Route path="/component3" element={<Component3 />} />
        <Route path="/component4" element={<Component4 />} />
        <Route path="/component5" element={<Component5 />} />
        <Route path="/component6" element={<Component6 />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        {/* <Route path="/investmentdashboard" element={<InvestmentDashboard />} /> */}
        <Route path="/details" element={<Details />} />
        <Route path="/applicationn" element={<Applicationn />} />
        <Route path="/approvedpitch" element={<Approvedpitch />} />
      </Routes>
      <Footer />

      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App;
