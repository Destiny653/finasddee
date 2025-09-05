"use client";

import * as React from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface ICustomCombobox extends React.ComponentProps<"button"> {
    options: {
        value: string;
        label: string;
    }[];
    emptyLabel?: React.ReactNode;
    placeholder?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    optionFullWidth?: boolean;
    onSelectChange?: (value: string) => void;
}

export function CustomCombobox({
    options = [],
    emptyLabel = "No item found",
    placeholder = "Select option...",
    label,
    value: newVal,
    defaultValue,
    className,
    optionFullWidth,
    onSelectChange: onChange,
}: ICustomCombobox) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(newVal ?? defaultValue ?? (options.length > 0 ? options[0].value : ""));

    return (
        <div className={`relative rounded-l-lg `}>
            {label && (
                <p className="font-sans  text-sm text-gray-500  font-semibold leading-[18px] mb-2">
                    {label}
                </p>
            )}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild className="border-0 bg-gray-100">
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full p-6 b-[#F5F5F5] relative rounded-sm shadow-none opacity-100 justify-between pr-4 pl-4 text-left font-normal text-black ",
                            className,
                        )}
                    >
                        {value ? (
                            options.find((item) => item.value === value)?.label
                        ) : (
                            <p className="text-muted-foreground">
                                {/* {placeholder} */}
                            </p>
                        )}
                        <ChevronsUpDownIcon className="ml-2 absolute top-1/3.5 right-1 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className={cn(
                        "p-0",
                        optionFullWidth ? "w-full border-0" : "w-[var(--radix-popover-trigger-width)]",
                    )}
                    style={optionFullWidth ? {} : { width: 'var(--radix-popover-trigger-width)' }}
                >
                    <Command className="!w-full border-0 ">
                        <CommandInput className="border-0 " placeholder="Search options..." />
                        <CommandList className="border-0" >
                            <CommandEmpty className="border-0">{emptyLabel}</CommandEmpty>
                            <CommandGroup className="border-0" >
                                {options.map((item, index) => (
                                    <CommandItem
                                        key={`${item.value}-${index}`}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            onChange?.(currentValue);
                                            setValue(
                                                currentValue === value
                                                    ? ""
                                                    : currentValue,
                                            );
                                            setOpen(false);
                                        }}
                                        className="hover:bg-transparent"
                                    >
                                        {item.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
