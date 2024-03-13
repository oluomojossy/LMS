import "./Service.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import security from "../../assets/security.png";
import data from "../../assets/data.png";
import Scheduler from "../../assets/Scheduler.png";
import court from "../../assets/court.png";
import { useState } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";



export default function Service() {
  const [show, setShow] = useState(false);
  

  return (
    <>
      <Header show={show} setShow={setShow} />
      {show === true ? <Dropdown /> : null}

      <div className="serviceHeroPageHolder">
        <div className="serviceHeroPageWrap">
          <h1>A complete IT Managed Services solution</h1>
        </div>
      </div>

      <div className="serviceInfoHolder">
        <div className="serviceInfoWrap">
          <div className="serviceInfoLeft">
            <img src={security} alt="security" />
          </div>

          <div className="serviceInfoRight">
            <div className="topp">
              <img src={data} />
              <p>
                PlaintiffAid managed client data, help businesses with the
                operation of technology environments, providing the technical
                expertise, and flexibility across technologies.
              </p>
            </div>
            <div className="midd">
              <img src={Scheduler} />
              <p>
                As a managed services provider ,PlaintiffAid delivers a range of
                IT service solutions such as appointment scheduling, data
                storage and sceduel reminder.
              </p>
            </div>
            <div className="lowerr">
              <img src={court} />
              <p>
                In this model, the managed service provider is responsible for
                calendaring activities that enables users set scheduled events
                and record these schedules.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
