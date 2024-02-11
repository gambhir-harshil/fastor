import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { phone } = data;
    await axios.post("https://staging.fastor.in/v1/pwa/user/register", {
      ...data,
      dial_code: "+91",
    });
    navigate("/register", { state: phone });
  };
  return (
    <div className="flex flex-col justify-center items-start h-screen px-6 gap-1 md:items-center">
      <h1 className="text-2xl font-bold">Enter Your Mobile Number</h1>
      <p className="text-gray-400 font-semibold">
        We will send you the 4 digit verification code
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="submit"
        className="flex flex-col mt-8 items-center w-full gap-2 md:max-w-[400px]"
      >
        <input
          {...register("phone", {
            required: {
              value: true,
              message: "Phone number is required",
            },
            pattern: {
              value: /^\d{10}$/,
              message: "Invalid contact number, must be 10 digits",
            },
          })}
          type="text"
          placeholder="Enter your number"
          className="px-8 py-4 bg-gray-200 border-gray-400 border rounded-md font-semibold text-gray-600 w-full"
        />
        <span className="text-xs text-red-500">{errors?.phone?.message}</span>
        <button
          type="submit"
          className="bg-red-500 w-full px-8 py-4 rounded-md text-white font-semibold mt-4"
        >
          Send Code
        </button>
      </form>
    </div>
  );
};

export default Login;
