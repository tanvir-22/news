"use client";
import React from "react";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { Button, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";
import {
  Description,
  FieldError,
  Form,
  Input,


} from "@heroui/react";
import Link from "next/link";
const Loginpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginUserData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: loginUserData.email, // required
      password: loginUserData.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(data);
  };

  return (
    <div className="flex h-[90vh]  justify-center items-center">
      <Form
        onSubmit={loginHandler}
        className="bg-white p-10 flex w-[30vw] flex-col gap-4 rounded-md"
      >
        <p className="font-semibold text-xl text-center">Login your account</p>
        <hr />
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
          <Label>Email address</Label>
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
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
           
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <FieldError />
        </TextField>
        <div className=" ">
          <button
            className={`w-full bg-[#403e3e] px-4 py-2 text-white`}
            type="submit"
          >
            Login
          </button>
          {/* <Button type="reset" variant="secondary">
            Reset
          </Button> */}
          <hr />
          <p className="text-center py-1">
            Don’t Have An Account ?{" "}
            <Link className="text-red-500" href={`/register`}>
              {" "}
              Register
            </Link>{" "}
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Loginpage;
