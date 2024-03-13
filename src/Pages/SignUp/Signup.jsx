import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo2 from "../../assets/logo2.png";
import image from "../../assets/image.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "animate.css";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup
    .object({
      FirmName: yup.string().required("Input your firm's name"),
      email: yup.string().required("input an email"),
      PhoneNumber: yup
        .string()
        .matches(/^\d+$/, "PhoneNumber must a number")
        .min(11)
        .max(14)
        .required("input your phone number"),
      password: yup.string().required("Input password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("password is required"),
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
      const res = await axios.post(
        "https://plaintiff-backend.onrender.com/api_v1/signup",
        data
      );
      nav("/login");
      toast.success("kindly check your email");
  
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
    <main>
      <header>
        <div className="logoDiv">
          <Link className="link" to="/">
            <img src={logo2} className="logo" />
          </Link>
        </div>
      </header>
      <div className="signupWrapper">
        <div className="left">
          <p>
            Better way to organize your client <br /> data
          </p>
          <div className="imageDiv">
            <img src={image} className="image" />
          </div>
        </div>
        <div className="right">
          <p>Sign up !</p>

          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputDiv">
              <input
                placeholder="Firm Name"
                type="text"
                {...register("FirmName")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.FirmName?.message}
              </p>
            </div>

            <div className="inputDiv">
              <input placeholder="Email" type="text" {...register("email")} />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.email?.message}
              </p>
            </div>

            <div className="inputDiv">
              <input
                placeholder="Phone Number"
                type="text"
                {...register("PhoneNumber")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.PhoneNumber?.message}
              </p>
            </div>
            <div className="inputDiv">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.password?.message}
              </p>

              {/* <p className="ptag">{errors?.email?.message}</p> */}
            </div>
            <div className="inputDiv">
              <input
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.confirmPassword?.message}
              </p>
            </div>
            {loading ? (
              <button  className="spin"><HashLoader color="blue" size="16px" /></button>
            ) : (
              <button>Submit</button>
            )}
          </form>

          <h3 className="loginAccounts">
            Already have an account?
            <Link className="link" style={{ color: "#003482ff" }} to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>

      {/* {pop ? (
        <div className="confirmHold">
          <div className="box">
            <div className="messageImageDiv">
              <img src={Messages} />
            </div>
            <h2>Verify your email</h2>
            <p>
              Almost there ! We’ve sent a verification email to
              ..........@gmail.com
              <br />
              You need to verify your email address to login into PlattiffAid.
            </p>
            <button>Resend Email</button>
          </div>
        </div>
      ) : null} */}
    </main>
  );
};

export default Signup;
