import React, { useState, useContext } from "react";
import "./Login.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../../../assets/Image.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  

  const Nav = useNavigate();

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    
  };

  const schema = yup
    .object({
      email: yup.string().required("Type email"),
      password: yup.string().required("Input password"),
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
   try{ 
    setLoading(true);
    const res = await axios.post(
      "https://plaintiff-backend.onrender.com/api_v1/login",
      data
    );
    const userData = res.data.data
    const userToken = res.data.data.Token
    localStorage.setItem("userToken",userToken)
    localStorage.setItem("users",JSON.stringify({userData}))
    const {UserID,Username} = res.data.data
    localStorage.setItem("user", JSON.stringify({UserID,Username}))
    handleLoginSuccess();
    toast.success("login sucessful!");
    setTimeout(() =>{ 
      Nav("/dashboard");
  }, 5000);
    setLoading(false);
   }

   catch (err) {
    if (err.response.data.message) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
    setLoading(false);
  }
  };



  return (
    <div className="loginHolder">
      <div className="loginHolderWrap">
        <div className="toplogo">
          <img src="logo.png" alt="" />
          <Link className="link" to="/signup">
            <FaArrowLeftLong style={{ color: "#003482ff" }} />
          </Link>
        </div>
        <div className="lowerHold">
          <div className="loginLeftz">
            <img src={Image} alt="" />
          </div>
          <div className="loginRightz">
            <div className="welcome">
              <p>Welcome back</p>
            </div>
            <div className="bigText">
              <p>Login to your account</p>
            </div>

            <form
              className="form"
              method="post"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="formWrap">
                <div className="takes">
                  <div className="inf">
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        paddingLeft: "35px",
                      }}
                    >
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="topa">
                    <MdOutlineMarkEmailRead
                      style={{ color: "#003482ff", fontSize: "14px" }}
                    />
                    <input
                      type="email"
                      placeholder="email"
                      className="fills"
                      {...register("email")}
                    />
                  </div>
                </div>

                <div className="takes">
                  <div className="inf">
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        paddingLeft: "35px",
                      }}
                    >
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="topTakes">
                    <RiLockPasswordFill
                      style={{ color: "#003482ff", fontSize: "14px" }}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="fills"
                      {...register("password")}
                    />

                    {showPassword ? (
                      <FaRegEye
                        onClick={handleShowpassword}
                        style={{ color: "#003482ff", fontSize: "12px" }}
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={handleShowpassword}
                        style={{ color: "#003482ff", fontSize: "12px" }}
                      />
                    )}
                  </div>

                  <div className="forgotPassword">
                    <Link className="link" to="/forgotpassword">
                      <p>Forgot password?</p>
                    </Link>
                  </div>
                </div>

                <div className="loginButton">
                  {loading ? (
                    <button className="spin"><HashLoader color="blue" size="20px" /></button>
                  ) : (
                    <button>Login</button>
                  )}
                </div>

                <div className="signup">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      className="link"
                      style={{ color: "#003482ff" }}
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
