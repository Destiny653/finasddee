import React, { FC } from "react";
import PageHeader from "../header/PageHeader";
import Link from "next/link";

interface IRegistrationLayout {
    children: React.ReactNode;
}

const RegistrationLayout: FC<IRegistrationLayout> = ({ children }) => {
    return (
        <div className="bg-gray-100">
            <PageHeader />
            <div className="bg-[#cb943d]">
                <div className="container mx-auto px-4 flex justify-center">
                    <ul className="flex items-center border-b-0">
                        <li className="nav-item">
                            <Link
                                href="/send-money"
                                className="inline-block px-6 py-3 text-white bg-white/20 font-medium hover:bg-white/30 transition-colors"
                            >
                                Sending Money
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-screen overflow-hidden py-20 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default RegistrationLayout;
