import React, { FC } from "react";
import PageHeader from "../header/PageHeader";

interface IRegistrationLayout {
    children: React.ReactNode;
}

const RegistrationLayout: FC<IRegistrationLayout> = ({ children }) => {
    return (
        <div className="bg-gray-100">
            <PageHeader />
            <div className="w-screen overflow-hidden py-20 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default RegistrationLayout;
