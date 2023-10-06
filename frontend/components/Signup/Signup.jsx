
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [textVerificationEmail, setTextVerificationEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!values.firstName) {
      formIsValid = false;
      newErrors.firstName = "First name is required";
    }

    if (!values.lastName) {
      formIsValid = false;
      newErrors.lastName = "Last name is required";
    }

    if (!values.email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }

    if (!values.password) {
      formIsValid = false;
      newErrors.password = "Password is required";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)) {
      formIsValid = false;
      newErrors.password =
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and be 8 or more characters long";
    }

    if (!values.confirmPassword) {
      formIsValid = false;
      newErrors.confirmPassword = "Confirm password is required";
    } else if (values.password !== values.confirmPassword) {
      formIsValid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/addUser",
          values
        );
        console.log(response.data);
        setTextVerificationEmail("Please check your email for verification");
      } catch (err) {
        console.log(err.response);
        if (err.response && err.response.status === 400) {
          const errorMessage = err.response.data;
          setErrors({ ...errors, email: errorMessage });
        } 
      }
    }
  };
  
  return (
    <div className="grid grid-cols-2 gap-8 px-20 m-10">
      <div className="w-10/12">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>

        <p className="font-medium text-lg text-gray-500">
          Welcome back! Please enter your details.
        </p>
        <div id="success-message" className="bg-green-200 text-green-800">
          {textVerificationEmail}
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row ">
              <div className="flex flex-col mr-1 ">
                <input
                  className="w-full border-2 mr-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="First name"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleInput}
                />
                {errors.firstName && (
                  <div className="text-red-500 text-sm">{errors.firstName}</div>
                )}
              </div>

              <div className="flex flex-col ml-1 ">
                <input
                  className="w-full border-2 border-gray-100 rounded-xl  p-4 mt-1 bg-transparent"
                  placeholder="Last name"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleInput}
                />
                {errors.lastName && (
                  <div className="text-red-500 text-sm">{errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleInput}
              />
            </div>
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
            <div className="flex flex-row mt-4">
              <div className="flex flex-col mr-1">
                <input
                  className="w-full border-2 mr-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter password"
                  type={"password"}
                  name="password"
                  value={values.password}
                  onChange={handleInput}
                />
                {errors.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>
              <div className="flex flex-col ml-1">
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Confirm password"
                  type={"password"}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleInput}
                />
                {errors.confirmPassword && (
                  <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
                )}
              </div>
            </div>

            <div className="mt-4">
              By creating an account, you agree to our{" "}
              <a href="/" className="text-[#cf3535]">
                Returns policy
              </a>{" "}
              and acknowledge reading our{" "}
              <a href="/" className="text-[#cf3535]">
                Refunds policy
              </a>{" "}
              Notice
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-[#f06d63] rounded-xl text-white font-bold text-lg"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Already a member?</p>
            <div className="ml-2 font-medium text-base text-[#f06d63]">
              <Link href="/login">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-124 ">
        <img src="assets/loginimage.jpg" alt="Your Image" />
      </div>
    </div>
  );
};

export default Signup;
