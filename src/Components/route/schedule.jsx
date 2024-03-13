import { Drawer } from "antd";
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import Input from "../Input/Input";
import ScheduleTable from "../Tables/ScheduleTable";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

export default function Schedule() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  const fileInputRef = useRef(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dateOfAppointment, setDateOfAppointment] = useState("");
  const [scheduleDetails, setScheduleDetails] = useState("");
  const [timeOfAppointment, setTimeOfAppointment] = useState("");
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://plaintiff-backend.onrender.com/api_v1/create-schedule/${id}`,
        {
          clientName,
          clientEmail,
          dateOfAppointment,
          timeOfAppointment,
          scheduleDetails,
        }
      );
      toast.success("Schedule created");
      setLoading(false);
      setLoading(false);
      setClientName("");
      setClientEmail("");
      setDateOfAppointment("");
      setTimeOfAppointment("");
      setScheduleDetails("");
      setVisible(false);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <DashboardLayout>
        <PageHeader title="Schedule" />
        <div className="w-full h-16 flex">
          <div className="h-full w-[95%] flex justify-end items-center space-x-4 ">
            <button
              className="bg-blue-900  w-44 h-8 rounded text-white text-sm "
              onClick={() => setVisible(true)}
            >
              Add New Schedule
            </button>
          </div>
        </div>
        <ScheduleTable />
      </DashboardLayout>
      <Drawer
        open={visible}
        title={
          <div className="flex  justify-between items-center ">
            <p className="text-base">Schedule Appointment</p>
            <p onClick={() => setVisible(false)}>
              <MdOutlineClose className="text-lg cursor-pointer" />
            </p>
          </div>
        }
        maskClosable={false}
        closable={false}
      >
        <div className="space-y-2">
          <Input
            label="Client Name"
            className="clientInput"
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            // ref={fileInputRef}
            // key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Email"
            className="clientInput"
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            // ref={fileInputRef}
            // key={resetInput ? "reset" : "normal"}
          />
          <Input
            label="Date of Appointment "
            className="clientInput"
            type="date"
            value={dateOfAppointment}
            onChange={(e) => setDateOfAppointment(e.target.value)}
            // ref={fileInputRef}
            // key={resetInput ? "reset" : "normal"}
          />
          <Input
            label="Time of Appointment"
            className="clientInput"
            type="text"
            value={timeOfAppointment}
            onChange={(e) => setTimeOfAppointment(e.target.value)}
            // ref={fileInputRef}
            // key={resetInput ? "reset" : "normal"}
          />

          <label
            style={{ fontSize: "15px", marginLeft: "1%" }}
            htmlFor="casedescription"
          >
            Schedule details
          </label>
          <textarea
            className="textAreaText"
            value={scheduleDetails}
            onChange={(e) => setScheduleDetails(e.target.value)}
            // ref={fileInputRef}
            // key={resetInput ? "reset" : "normal"}
          ></textarea>

          {loading ? (
            <HashLoader color="blue" size="16px" />
          ) : (
            <button
              className="clientBtn bg-blue-900 w-40 h-10 rounded text-white text-sm "
              onClick={() => handleSubmit()}
            >
              Schedule
            </button>
          )}
        </div>
      </Drawer>
    </>
  );
}
