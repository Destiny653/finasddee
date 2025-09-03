import React, { FC, ReactNode } from "react";
import LandingPageNavBar from "./navbar";
import LandingPageFooter from "./footer";

interface IMainLandingPageLayout {
    children: ReactNode;
}
const MainLandingPageLayout: FC<IMainLandingPageLayout> = ({ children }) => {
    return (
        <div className="w-screen min-h-screen relative overflow-x-hidden flex flex-col">
            <LandingPageNavBar />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
            <LandingPageFooter />
        </div>
    );
};

export default MainLandingPageLayout;
