import React, { useState } from "react";
import "./ForgotPassword.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../../../Context/AuthContext";
// import { useEffect } from "react";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  

  


  const schema = yup
    .object({
      email: yup.string().required("Input email"),
      // newPassword: yup.string().required("Input new password"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.put(
        "https://plaintiff-backend.onrender.com/api_v1/forgot-password",
        data
      );
      console.log(res);
      toast.success("An email has been sent to you" );
      setTimeout(() => {
        Nav("/login");
      }, 5000);
      setLoading(false);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <div className="forgotPasswordHolder">
      <div className="forgotPasswordWrapper">
        <div className="forgotPasswordHead">
          <div className="forgotPasswordHeadLeft">
            <img src={logo} />
          </div>
          <div className="forgotPasswordHeadRight">
            <Link className="link" to="/login">
              <FaArrowLeftLong style={{ color: "#003482ff" }} />
            </Link>
          </div>
        </div>

        <div className="forgotPasswordBody">
          <div className="bodyContainer">
            <form
              method="post"
              className="enteryInput"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="upperText">
                <p>Email address</p>
              </div>

              <input type="email" {...register("email")} />

              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.email?.message}
              </p>

              <div className="resetBtn">
                {loading ? (
                  <HashLoader color="blue" size="20px" />
                ) : (
                  <button>Reset</button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="questions">
          <p className="visits">Have questions or need help?</p>
          <p className="visit">
            Visit the PlaintiffAid center or give us a call at +2347025254512
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
