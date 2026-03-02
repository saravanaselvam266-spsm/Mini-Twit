import React from "react";
import Logo from "../assets/react.svg"

const Login = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center ">
      <form className="p-[30px] h-[500px] shadow-2xl">
        <h1 className="flex justify-center items-center text-[30px] font-bold">
          <img src={Logo}/>&nbsp;Mini Twit
        </h1>
        <h2 className="flex justify-center items-center text-[20px] font-bold">
          <strong>Welcome back</strong>
        </h2>
        <p className="flex justify-center items-center mb-[20px]">
          Enter your credentials to access your feed
        </p>
        <label htmlFor="email">Email address</label>
        <br />
        <input
          className="border p-[8px] w-[350px] rounded-[5px] mb-[10px] mt-1.5"
          type="text"
          placeholder="name@example.com"
        />
        <br />
        <label htmlFor="password">Password </label>
        <br />
        <input
          className="border p-[8px] w-[350px] rounded-[5px] mb-[10px] mt-1.5"
          type="password"
          placeholder="Enter your password"
        />
        <p>Forget Password?</p>
        <button className="border w-[350px] h-[44px] p-[7px] rounded-[5px] mt-[40px] bg-[#7C3AEDFF] text-[#FFFFFFFF]">
          Sign in
        </button>
        <p className="flex justify-center items-center m-[10px] ">
          Don't have an account?<strong>Sign Up</strong>
        </p>
      </form>
    </div>
  );
};

export default Login;
