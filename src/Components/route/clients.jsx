import { useRef, useState } from "react";
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import ClientTable from "../Tables/ClientTable";
import { Drawer } from "antd";
import Input from "../Input/Input";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

export default function Clients() {
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [Gender, setGender] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [lastname, setLastname] = useState("");
  const [caseName, setcaseName] = useState("");
  const [CaseDescription, setCaseDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://plaintiff-backend.onrender.com/api_v1/save_client/${id}`,
        {
          firstname,
          Gender,
          contactNumber,
          email,
          address,
          lastname,
          caseName,
          CaseDescription,
        }
      );
      toast.success("Client added Successfully");
      setLoading(false);
      setFirstname("");
      setGender("");
      setcontactNumber("");
      setemail("");
      setAddress("");
      setLastname("");
      setcaseName("");
      setCaseDescription("");
      setVisible(false);
      getClientInformation()
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  const batchTemplate = async () => {
    try {
      const response = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/download-template/${id}`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Plaintiff_Aid.xlsx";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      document.body.appendChild(link);

      link.click();

      URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading template:", error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleBatchUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post(
          `https://plaintiff-backend.onrender.com/api_v1/batch_Upload/${id}/${id}`,
          formData
        );
        console.log(res);
        setIsVisible(false);
      } else {
        console.log("No file selected.");
      }
    } catch (err) {
      console.log(err, "error");
    }
  };

  return (
    <>
      <DashboardLayout>
        <PageHeader title="Client Data" />
        <div className="w-full h-16 flex">
          <div className="h-full w-[95%] flex justify-end items-center space-x-4 ">
            <button
              className="client_btn bg-blue-900  w-40 h-8 rounded text-white text-sm "
              onClick={() => setIsVisible(true)}
            >
              Batch Upload
            </button>
            <button
              className="bg-blue-900  w-44 h-8 rounded text-white text-sm "
              onClick={() => setVisible(true)}
            >
              Add New Client
            </button>
          </div>
        </div>
        <ClientTable />
      </DashboardLayout>
      <Drawer
        open={visible}
        title={
          <div className="flex  justify-between items-center ">
            <p className="text-base">Client Information</p>
            <p onClick={() => setVisible(false)}>
              <MdOutlineClose className="text-lg cursor-pointer" />
            </p>
          </div>
        }
        maskClosable={false}
        closable={false}
      >
        <div className="space-y-3">
          <Input
            label=" Firstname"
            className="clientInput"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Lastname"
            className="clientInput"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Email"
            className="clientInput"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Phonenumber"
            className="clientInput"
            value={contactNumber}
            onChange={(e) => setcontactNumber(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Gender"
            className="clientInput"
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Address"
            className="clientInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Case Name"
            className="clientInput"
            value={caseName}
            onChange={(e) => setcaseName(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />

          <label htmlFor="casedescription">Case Description</label>
          <textarea
            className="textAreaText"
            value={CaseDescription}
            onChange={(e) => setCaseDescription(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          ></textarea>

          {loading ? (
            <button>
              <HashLoader color="blue" size="16px" />
            </button>
          ) : (
            <button
              className="client_btn bg-blue-900 w-40 h-10 rounded text-white text-sm "
              onClick={() => handleSubmit()}
            >
              Add client
            </button>
          )}
        </div>
      </Drawer>
      <Drawer
        open={isVisible}
        title={
          <div className="flex  justify-between items-center ">
            <p className="text-base">Batch Upload</p>
            <p onClick={() => setIsVisible(false)}>
              <MdOutlineClose className="text-lg cursor-pointer" />
            </p>
          </div>
        }
        maskClosable={false}
        closable={false}
      >
        <div className="space-y-2 flex flex-col ">
          <p onClick={batchTemplate} className="cursor-pointer ">
            Download Template
          </p>
          <label
            htmlFor=""
            className="h-14 w-80 pl-2  p-1 rounded text-sm outline-none border flex item-center"
          >
            <Input
              className="cursor-pointer "
              type="file"
              onChange={handleFileChange}
            />
          </label>

          <div className="ml-1">
            {loading ? (
              <HashLoader color="blue" size="16px" />
            ) : (
              <button
                className="client_btn bg-blue-900 w-40 h-10 rounded text-white text-sm "
                onClick={() => handleBatchUpload()}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}
