import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Signup from "./Pages/SignUp/Signup";
import Pricing from "./Pages/Pricing/Pricing";
import Login from "./Pages/Auth/Login/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import Demo from "./Pages/Demo/Demo";
import Clients from "./Components/route/clients";
import Dashboards from "./Components/route/dashboard";
import Setting from "./Components/route/settings";
import History from "./Components/route/history";
import Schedule from "./Components/route/schedule";
import Payment from "./Components/route/payment";
import Calendar from "./Components/route/calendar";
import ConfirmedEmail from "./Pages/SignUp/ConfirmedEmail";
// import Verification from "./Pages/Auth/Verification/Verification";
import Verification from "./Pages/Auth/Verification/Verification"
import PrivateRoutes from "./Pages/PrivateRoute";
import Newpassword from "./Pages/Newpassword/Newpassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/request" element={<Demo />} />
        <Route path="/dashboard" element={<Dashboards />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/historys" element={<History />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/calendars" element={<Calendar />} />
        <Route path="/schedules" element={<Schedule />} />
        <Route path="/verification/:token" element={<Verification/>} />
        <Route path="/newpassword/:token"  element={<Newpassword/>}/>
        <Route element={<PrivateRoutes/>}>
          {/* <Route   path="/" element={<Home/>} /> */}
          <Route   path="/dashboard" element={<Dashboards/>} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      
    </>
  );
}

export default App;
