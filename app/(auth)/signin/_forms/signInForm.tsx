"use client";
import { CheckBoxField } from "@/app/_components/CustomCheckbox";
import CustomInput from "@/app/_components/CustomInput";
import CustomPassword from "@/app/_components/CustomPassword";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/app/_hooks/useAuth";

// Validation schema
const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  rememberMe: yup.boolean().optional(), // Make rememberMe optional to match FormData
});

interface signInProps {
  onClose?: ()=> void
}
const SignInForm = ({onClose}:signInProps)=> {
  const { login, isLoginLoading, error } = useAuth();
  const [logIn, setLogIn] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });
  useEffect(()=>{ return},[login])

  const onSubmit = (data: yup.InferType<typeof signInSchema>) => {
    const loginData = { email: data.email, password: data.password };
    // TODO: Implement remember me functionality if needed
    login(loginData, () => {
      setLogIn(true)
      onClose && onClose()
      reset(); // Clear form on successful login
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-6 rounded-lg py-6 bg-white gap-6 text-gray-800">
      <CustomInput
        label="Email"
        icon={Mail}
        type="email"
        placeholder="Enter your email"
        {...register("email")}
        disabled={isLoginLoading}
        className="py-8"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      <CustomPassword
        label="Password"
        placeholder="Enter your password"
        {...register("password")}
        disabled={isLoginLoading}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
      <div className="flex items-center justify-between my-3">
        <CheckBoxField
          id="rememberMe"
          label="Remember me"
          {...register("rememberMe")}
        />
        <Link
          href={{
            pathname: "/verify-email",
          }}
          className="font-bold text-[12px] leading-[18px] tracking-[0px] text-right"
        >
          Recover Password
        </Link>
      </div>
      <button type="submit" className="h-[58px] font-semibold text-white rounded-lg bg-[#e2ae02] hover:bg-[#eeb704]" disabled={isLoginLoading}>
        {isLoginLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};

export default SignInForm;
