import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../../config/request";
import { saveState } from "../../../config/store";
import { useNavigate } from "react-router-dom";
export const Login = ({ close }) => {
  const { register, handleSubmit } = useForm();
  const naviget = useNavigate();
  const submit = (data) => {
    request.post("/login", data).then((res) => {
      if (res.data) {
        saveState("user", res.data);
        naviget("/user");
        close();
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        {...register("email")}
        placeholder="Email"
        className=" border-vegan rounded-lg w-full border mb-4 p-2"
        name="email"
        type="email"
      />
      <input
        {...register("password")}
        placeholder="Password"
        className=" border-vegan  rounded-lg w-full border p-2"
        name="password"
        type="password"
      />
      <button className=" pt-2 pb-2 w-full border " type="submit">
        Submit
      </button>
    </form>
  );
};
