import React, { FC, ReactNode } from "react";
import PageHeader from "./header/PageHeader";
import LandingPageFooter from "./landingPage/footer";

interface IPageLayout {
    children: ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
    return (
        <div className="w-screen min-h-screen relative overflow-x-hidden flex flex-col">
            <PageHeader />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
            <LandingPageFooter />
        </div>
    );
};

export default PageLayout;
