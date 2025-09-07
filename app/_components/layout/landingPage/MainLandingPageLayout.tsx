import React, { FC, ReactNode } from "react";
import LandingPageFooter from "./footer";

interface IMainLandingPageLayout {
    children: ReactNode;
}
const MainLandingPageLayout: FC<IMainLandingPageLayout> = ({ children }) => {
    return (
        <div className="w-screen min-h-screen relative overflow-x-hidden flex flex-col ">
            {/* <LandingPageNavBar /> */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {children}
            </div>
            <LandingPageFooter />
        </div>
    );
};

export default MainLandingPageLayout;
