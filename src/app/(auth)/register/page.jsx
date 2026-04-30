"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React from "react";

const Registerpage = () => {
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const userRegisterData = Object.fromEntries(formdata.entries());
    console.log(userRegisterData);

    const { data, error } = await authClient.signUp.email({
      name: userRegisterData.username,
      email: userRegisterData.email,
      password: userRegisterData.password,
      image: userRegisterData.photo_url,
      callbackURL: "/",
    });
    console.log(data, "data");
  };
  return (
    <div className="flex h-[90vh]  justify-center items-center">
      <Form
        onSubmit={handleRegisterSubmit}
        className="bg-white p-10 flex w-[30vw] flex-col gap-4 rounded-md"
      >
        <p className="font-semibold text-xl text-center">
          Register your account
        </p>
        <hr />
        <TextField
          name="username"
          type="text"
          validate={(value) => {
            if (value == "") {
              return "Please enter your name";
            }
            return null;
          }}
        >
          <Label className="font-semibold">Your Name</Label>
          <Input className={`bg-[#f2f2f2]`} placeholder="Enter your name" />
          <FieldError />
        </TextField>
        <TextField
          name="photo_url"
          type="text"
          validate={(value) => {
            if (value == "") {
              return "Please enter your name";
            }
            return null;
          }}
        >
          <Label className="font-semibold">Photo URL</Label>
          <Input className={`bg-[#f2f2f2]`} placeholder="Enter your URL" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="font-semibold">Email address</Label>
          <Input className={`bg-[#f2f2f2]`} placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="font-semibold">Password</Label>
          <Input className={`bg-[#f2f2f2]`} placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className=" ">
          <button
            className={`w-full bg-[#403e3e] px-4 py-2 text-white`}
            type="submit"
          >
            Register
          </button>
          <button
            className={`w-full bg-[#403e3e] mt-3 px-4 py-2 text-white`}
            type="reset"
            variant="secondary"
          >
            Reset
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Registerpage;
