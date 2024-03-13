import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import { GoPeople } from "react-icons/go";
import { GrScheduleNew } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import UpcomingTable from "../Tables/Upcoming";
// import UpcomingTable from "../Tables/Upcoming"

export default function Dashboards() {
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
  const [client, setClient] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  const getSchedule = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/schedules/all_schedules/${id}`
      );
      setSchedule(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const allClient = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/getClients/${id}`
      );
      setClient(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSchedule();
    allClient();
  }, []);


  return (
    <>
      <DashboardLayout>
        <PageHeader title="Dashboard" />
        <div className="dashboardWrap">
          <div className="dashboardLeft">
            <div className=" flex flex-col space-x-4 py-4 h-28 rounded bg-[#0C4761] text-white w-64 text-center ">
              <h3 className="text-[30px]">Total Clients</h3>
              <p className="text-[20px] text-white "> ( {client.length} )</p>
            </div>
            <div
              style={{
                backgroundColor: "#e0fbfc",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
              }}
              className=""
            >
              <div className=" flex flex-col space-x-4 py-2 h-28 rounded bg-[#0C4761] text-white w-64 text-center ">
                <h3 className="text-[30px]">Total schedules</h3>
                <p className="text-[20px] text-white "> ({schedule.length}) </p>
              </div>
            </div>

            <div style={{ backgroundColor: "#98c1d9" }} className="total">
              <div className="toplayer">
                <h3>Total Payments</h3>
              </div>
              <div className="lowerLayer"></div>
            </div>
          </div>
          <div className="dashbaordRight">
            <div className="quickAccess">
              <MdPayment style={{ color: "#003482ff" }} />
              <Link to="/payments" className="link">
                <p>Get a payment plan</p>
              </Link>
            </div>
            <div style={{ backgroundColor: "#98c1d9" }} className="quickAccess">
              <IoPersonAddOutline style={{ color: "#003482ff" }} />
              <Link to="/clients" className="link">
                <p>Add a client</p>
              </Link>
            </div>
            <div className="quickAccess">
              <GrScheduleNew style={{ color: "#003482ff" }} />
              <Link to="/schedules" className="link">
                <p>Schedule an appointment</p>
              </Link>
            </div>
            <div className="upcomingEvents"><UpcomingTable/></div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
