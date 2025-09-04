import { CustomTheme } from "@/app/_utils/theme";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface IMainAuthLayout {
    children: React.ReactNode;
}
const MainAuthLayout: FC<IMainAuthLayout> = ({ children }) => {
    const logoSecStyle = {
        backgroundColor: CustomTheme.baseBg,
    };

    const logoStyle = {
        width: "56px",
        height: "73px",
    };

    return (
        <div className="w-screen h-screen overflow-hidden grid grid-cols-2">
            <div className="size-full flex flex-col items-center justify-center">
                {children}
            </div>
            <div
                style={logoSecStyle}
                className={cn(
                    "size-full flex items-center justify-center flex-col ",
                )}
            >
                <Image
                    width={100}
                    height={100}
                    src="/Logo.png"
                    alt="logo"
                    style={logoStyle}
                />
                <h2 className="font-['Outfit'] tracking-wide font-semibold text-[42px] leading-[160%]  align-middle">
                    Finasddee
                </h2>
            </div>
        </div>
    );
};

export default MainAuthLayout;
