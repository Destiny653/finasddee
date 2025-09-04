import React, { FC } from "react";
import PageHeader from "../header/PageHeader";

interface IRegistrationLayout {
    children: React.ReactNode;
}

const RegistrationLayout: FC<IRegistrationLayout> = ({ children }) => {
    return (
        <>
            <PageHeader />
            <div className="w-screen  overflow-hidden py-20 flex items-center justify-center">
                {children}
            </div>
        </>
    );
};

export default RegistrationLayout;
