"use client";
import SignUpForm from "../_forms/SignUpForm";
import Link from "next/link";

const MainSignUp = () => {
    return (
        <div>
            <SignUpForm />
            <p className="text-[14px] absolute bottom-12">
                Already registered?{" "}
                <Link
                    href={{
                        pathname: "/signin",
                    }}
                    className="text-[#0052FF]"
                >
                    {" "}
                    sign in
                </Link>
            </p>
        </div>
    );
};

export default MainSignUp;
