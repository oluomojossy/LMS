import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import "animate.css";
import { BsCalendar2Date } from "react-icons/bs";
import Variation from "../../assets/Variation.png";
import timez from "../../assets/timez.png";
import { useState } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { GiPentarrowsTornado } from "react-icons/gi";
import Curve from "../../assets/Curve.png";
import court from "../../assets/court.png";
import Kora_logo from "../../assets/Kora_Logo.png";
import freq from "../../assets/freq.png";
import law1 from "../../assets/law1.jpg";
import law from "../../assets/law.jpg";
import law3 from "../../assets/law3.avif";
import { Link } from "react-router-dom";



export default function Home() {
  const [show, setShow] = useState(false);


  
  const list = [
    {
      image: law1 ,
      alt: "img1",
      topic: "Adjournment of legal bill",
    },
    {
      image: law,
      alt: "img2",
      topic: "Top paid lawyers",
    },
    {
      image: law3,
      alt: "img3",
      topic: "Check out the protected libray",
    },
  ];

  
  
  return (
    <>
      <Header show={show} setShow={setShow} />
      {show === true ? <Dropdown /> : null}
      <div className="VideoContainer">
        <div className="wrapper">
          <div className="textHolder">
            <div className="textFrame">
              <h1>Everything your law firm needs. All in one place.</h1>
              <p>The #1 Legal Practice Management Software</p>
            </div>

            <div className="demo">
              <Link className="link" to="/request">
              <button className="btn">Request a Demo</button>
              </Link>
            </div>

            <div id="wrappers">
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span class="arrow-down"></span>
                  <span id="scroll-title"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="videoHolder">
            <img src={Variation} className="vid"  />

            <div className="boxx">
              <div className="top">
                <h6>Add a new Client</h6>
              </div>
              <div className="down">
                <p>Status </p>
                <span className="tool">Added</span>
              </div>
            </div>
            <div className="box1">
              <div className="top1">
                <BsCalendar2Date style={{ fontSize: "18px", color: "red" }} />
                <p>Book An Appointment</p>
              </div>
              <div className="down1">
                <p>Stay Reminded </p>
              </div>
            </div>
            <div className="box2">
              <div className="top2">
                <img src={timez} />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  00: 15: 40
                </p>
              </div>
              <div className="down2">
                <p>Case 091-Cynthia </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="descHolder">
        <div className="descWrapper">
          <h1>
            Comprehensive client data management Software that meets the needs
            of your firm-and your clients
          </h1>
          <p>
            Simplify every aspect of your law firm, from billing to
            communication and document management.
          </p>
          <div className="bodyHold">
            <div className="bodyHoldWrap">
              <div className="leftHold">
                <img src={court} alt />
              </div>
              <div className="righttHold">
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>Dedicated security team and 247 technical support</p>
                </div>
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>
                    Continuous vulnerability monitoring and free on-demand
                    training
                  </p>
                </div>
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>
                    Comprehensive self-serve support site and data migration
                    support
                  </p>
                </div>
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>HIPAA,SOC2,PCI compliance and more</p>
                </div>
                <div className="descs">
                  <Link className="link" to="/signup">
                  <button className="bbutz">Try for free</button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partnerHold">
        <h1>Our Partners</h1>
        <div className="partnerWrapper">
          <div className="leftTop">
            <div className="logoImage">
              <img src={Kora_logo} alt="" />
            </div>
          </div>

          <div className="rightTop">
            <div className="logoImage">
              <img src={Curve} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="latestHolders">
        <div className="lates">
          <h1>Lastest Blogs</h1>
        </div>

        <div className="blogss">
          <div className="blogCards">
            {list?.map((props) => (
              <div className="cardss">
                <div className="imagerys">
                  <img src={props.image} alt={props.alt} />
                </div>
                <div className="topics">
                  <h4>{props.topic}</h4>
                </div>
                <div className="learn">
                  <p>
                 <a href="https://www.juriseducation.com/blog/highest-paid-lawyers"> 
                    Learn more..
                </a>
                    </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="descsss">
            <Link className="link" to="/login"><button className="butzzz">Login</button></Link>
            
          </div> */}
        </div>
      </div>
      <div className="desccHolder">
        <div className="desccWrapper">
          <h1>Frequently Asked Questions</h1>
          <div className="bodyHoldd">
            <div className="bodyHoldWrapp">
              <div className="leftHoldd">
                <img src={freq} alt />
              </div>
              <div className="rightHoldd">
                <div className="mary">
                  <GiPentarrowsTornado  style={{fontSize: "14px"}}/>
                  <p>What industries do you serve?</p>
                </div>
                <div className="mary">
                  <GiPentarrowsTornado />
                  <p>Do you offer free version solutions?</p>
                </div>
                <div className="mary">
                  <GiPentarrowsTornado />
                  <p>Do I need a web Application for client data Management?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
        }
