import React, { FC, ReactNode } from "react";

interface IRoutesLayout {
    children: ReactNode;
}
const RoutesLayout: FC<IRoutesLayout> = ({ children }) => {
    return <>{children}</>;
};

export default RoutesLayout;
