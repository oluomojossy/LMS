import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
import goal from "../../assets/goal.png"
import data from "../../assets/data.png"
import both from "../../assets/both.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";


export default function AboutPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header show={show} setShow={setShow} />
      {show === true ? <Dropdown /> : null}
      <div className="whyHolder">
        <div className="whyHolderWrap">
          <div className="whyLeft">
            <div className="whyleftWrapper">
              <p  style={{ fontSize: "30px", color: "black" }}>About Us</p>
              <h1>Why PlaintiffAid?</h1>
              <p>
                We’re more than just a tech company. We’ve got goals, hopes, and
                dreams, just like you. We want to serve a better solution to a
                centuries old profession and do some good in the world while
                we’re at it—permanently.
              </p>

              <p>
                We know our technology changes lives. If that’s something that
                speaks to you—you belong here, too.
              </p>
            </div>
          </div>
          <div className="whyRight">
            <img src={data} alt="" />
          </div>
        </div>
      </div>
      <div className="storyHolder">
        <div className="stroyHolderWrap">
          <div className="stroyLeft">
            <img src={both} alt="" />
          </div>
          <div className="storyRight">
            <h1>Our Story</h1>
            <div className="storie">
              <h2>Where did it all begin</h2>
              <p>
                It all begun with a group of young techies tha decided to
                provide a solution in the legal sector and ensuring a great
                degree of growth.
              </p>
              <br />

              <p>
                Transform the legal experience for all. We believe that the
                future of legal services is cloud-based and client-centered, and
                that fostering these advancements will drive positive social
                change and create a more inclusive legal system.
              </p>
              <br />

              <p>
                It’s fun. It’s challenging. It’s rewarding. If you’re ready to
                do some of the best work of your career, PlaintiffAid’s for you.
              </p>
            </div>

            <div className="stories">
              <Link className="link" to="/service">
              <button>Read More</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="csrHolder">
        <div className="csrHolderWrap">
          <div className="stroyLeftt">
            <h1>What Matters to us</h1>

            <img src={goal} alt="" />
          </div>

          <div className="storyRightt">
            <h3>Giving Back</h3>
            <p>
              We’re committed to creating positive social change in the
              community. Learn how we give back.
            </p>
            <h3>Creating Better Work Environments</h3>
            <p>
              We believe that a diverse and inclusive culture is a competitive
              advantage that benefits both our employees and customers. Find out
              more about our culture.
            </p>
            <h3>Thriving as a Team</h3>
            <p>
              We live by eight core values that help us thrive, have fun, and
              win as a team. Discover how we stay grounded.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
