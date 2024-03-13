import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import "./Route.css";
import Input from "../../Components/Input/Input";

export default function Setting() {

  return (
    <>
      <DashboardLayout>
        <PageHeader title="Settings Page" />
        <div className="h-[70vh]  w-full ">
          <p className="firm_p">Firm Information</p>
          <div className="grid w-full lg:grid-cols-2 h-[80%] mt-3 ">
            <Input label="Firm Name" className="settingsInput"/>
            <Input label="Firm Description" className="settingsInput" />
            <Input label="Email" className="settingsInput" />
            <Input label="Location" className="settingsInput" />
            <Input label="Location" className="settingsInput" />
            <Input label="Current Country" className="settingsInput" />
          </div>
          <button className="settingsBtn">Submit</button>
        </div>
      </DashboardLayout>
    </>
  );
}
