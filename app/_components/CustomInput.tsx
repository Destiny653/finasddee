import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { IconType } from "../_interface";

interface ICustomInput extends React.ComponentProps<"input"> {
    label?: string;
    icon?: IconType;
}
const CustomInput: FC<ICustomInput> = ({
    label,
    icon,
    className,
    ...props
}) => {
    return (
        <div className="relative flex flex-col">
            <p className={` font-semibold capitalize text-sm leading-[18px]`}>
                {label}
            </p>
            <div className="relative h-fit">
                    <Input
                    className={cn(
                        " md:py-8 mt-3 bg-[#F5F5F5] rounded-sm border shadow-none border-[#E5E7EB] opacity-100 text-black ",
                        className,
                    )}
                    {...props}
                />
                {icon
                    ? (() => {
                          const Icon = icon;
                          return (
                              <Icon className="size-[18px] absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" />
                          );
                      })()
                    : null}
            </div>
        </div>
    );
};

export default CustomInput;
