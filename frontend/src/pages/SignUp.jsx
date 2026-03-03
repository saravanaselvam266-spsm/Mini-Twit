import React from "react";
import Logo from "../assets/twitter_image.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <form className="p-[30px] h-[620px] shadow-2xl">
        <h1 className="flex justify-center items-center text-[30px] font-bold">
          <img src={Logo} className="w-10 h-10 rounded-[50%]" />
          &nbsp;Mini Twit
        </h1>
        <h2 className="flex justify-center items-center text-[20px] font-bold">
          <strong>Create your account</strong>
        </h2>
        <p className="flex justify-center items-center mb-[20px]">
          join the community and start sharing.
        </p>
        <label htmlFor="name">Full Name</label>
        <br />
        <input
          className="border p-[8px] w-[350px] rounded-[5px] mb-[10px] mt-1.5"
          type="text"
          placeholder="Enter your full name "
        />
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input
          className="border p-[8px] w-[350px] rounded-[5px] mb-[10px] mt-1.5"
          type="username"
          placeholder="Choose a unique username"
        />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          className="border p-[8px] w-[350px] rounded-[5px] mb-[10px] mt-1.5"
          type="email"
          placeholder="name@example.com"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="border p-[8px] w-[350px] rounded-[5px] mb-[10px] mt-1.5"
          type="password"
          placeholder="Create a strong Password"
        />
        <br />
        <button className="border w-[350px] h-[44px] p-[7px] rounded-[5px] mt-[40px] bg-[#7C3AEDFF] text-[#FFFFFFFF]">
          Sign Up
        </button>
        <br />
        <p className="flex justify-center items-center m-[10px] ">
          Already have an account?&nbsp;
          <strong>
            <Link to={"/signin"}>Sign In</Link>
          </strong>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
