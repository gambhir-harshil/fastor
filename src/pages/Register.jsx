import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const phone = location.state;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const { handleSubmit, setValue } = useForm();

  useEffect(() => {
    otp.forEach((digit, index) => {
      setValue(`otp[${index}]`, digit);
    });
  }, [otp, setValue]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (value === "") {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else {
      if (index < 5) {
        inputRefs[index + 1].current.focus();
      }
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleBackspace = (index, e) => {
    if (e.keyCode === 8 && index > 0 && otp[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  const onSubmit = async (data) => {
    const otp = data.otp.join("");
    const res = await axios.post(
      "https://staging.fastor.in/v1/pwa/user/login",
      { phone, otp, dial_code: "+91" }
    );
    setUser(res.data.data);
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-start h-screen px-6 gap-1 md:items-center">
      <h1 className="text-2xl font-bold">OTP Verification</h1>
      <p className="text-gray-400 font-semibold">
        Enter the verification code we just sent on your Mobile Number
      </p>
      <form onSubmit={handleSubmit(onSubmit)} action="submit" className="mt-8">
        <div className="flex justify-center items-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border rounded focus:outline-none focus:border-blue-500 bg-gray-200 text-gray-400 border-gray-400"
              value={digit}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-red-500 w-full px-8 py-4 rounded-md text-white font-semibold mt-4"
        >
          Verify
        </button>
      </form>
      <p className="mt-2 text-sm">
        Did not receive the code?{" "}
        <span className="text-blue-500 font-semibold">Resend</span>
      </p>
    </div>
  );
};

export default Register;
