import "./Verification.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import verified from "../../../assets/verified.png";

export default function () {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(1);
  console.log(token);
  const nav = useNavigate();

  useEffect(() => {
    const verifyUser = () => {
      axios
        .get(`https://plaintiff-backend.onrender.com/api_v1/verify/${token}`)
        .then((res) => {
          console.log(res);
          setIsVerified(2);
        })
        .catch((err) => {
          console.log("Error response:", err);
          setIsVerified(3);
        });
    };
    verifyUser();
  }, []);

  return (
    <main className="Verification">
      {isVerified === 1 ? (
        <h1>Hold While we Verify Email.....</h1>
      ) : isVerified === 2 ? (
        <section className="Verificationwrap">
          <div className="cardforget">
            <div className="imagelogo">
              Account Activated
              <div className="looog">
                <img src={verified} alt="" />
              </div>
            </div>
            <div className="Verificationtext">
              <span>
                <p>
                  Thank you,your email has been verified.
                  <br />
                  Your account is now active{" "}
                </p>
              </span>

              <button onClick={() => nav("/login")}> Login</button>
            </div>
          </div>
        </section>
      ) : (
        <h1>Verification failed</h1>
      )}
    </main>
  );
}
