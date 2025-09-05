"use client";
import { CheckBoxField } from "@/app/_components/CustomCheckbox";
import CustomInput from "@/app/_components/CustomInput";
import CustomPassword from "@/app/_components/CustomPassword";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth, LoginCredentials } from "@/app/_hooks/useAuth";

// Validation schema
const signInSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(4, "Password must be at least 6 characters").required("Password is required"),
});

const SignInForm = () => {
  const { login, isLoginLoading, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginCredentials>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: LoginCredentials) => {
    login(data, () => {
      reset(); // Clear form on successful login
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <CustomInput
        label="Email"
        icon={Mail}
        {...register("email")}
        disabled={isLoginLoading}
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
        <CheckBoxField id="notify" label="Remember me"  />
        <Link
          href={{
            pathname: "/verify-email",
          }}
          className="font-bold text-[12px] leading-[18px] tracking-[0px] text-right"
        >
          Recover Password
        </Link>
      </div>
      <Button type="submit" className="h-[52px]" disabled={isLoginLoading}>
        {isLoginLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
};

export default SignInForm;