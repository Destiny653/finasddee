"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

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
    disabled,
    onSelectChange: onChange,
}: ICustomCombobox) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(newVal ?? defaultValue ?? (options.length > 0 ? options[0].value : ""));

    // Sync with external value changes
    React.useEffect(() => {
        if (newVal !== undefined && newVal !== value) {
            setValue(newVal);
        }
    }, [newVal, value]);

    return (
        <div className="relative w-full">
            {label && (
                <p className="text-sm text-gray-500 font-semibold mb-2">
                    {label}
                </p>
            )}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        disabled={disabled}
                        className={cn(
                            "w-full h-full justify-between bg-white hover:bg-gray-50 border-0 shadow-none font-medium text-gray-700 px-4 min-w-0 whitespace-nowrap",
                            disabled && "opacity-60 cursor-not-allowed",
                            className,
                        )}
                    >
                        <span className="flex items-center gap-2 min-w-0">
                            {value ? (
                                <span className="truncate">{options.find((item) => item.value === value)?.label}</span>
                            ) : (
                                <span className="text-gray-400 truncate">{placeholder}</span>
                            )}
                        </span>
                        <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className={cn(
                        "p-0 z-[100]",
                        optionFullWidth
                            ? "w-auto min-w-[240px] md:min-w-[280px]"
                            : "w-[var(--radix-popover-trigger-width)]",
                    )}
                    style={optionFullWidth ? {} : { width: 'var(--radix-popover-trigger-width)' }}
                >
                    <Command>
                        <CommandInput placeholder="Search options..." />
                        <CommandList>
                            <CommandEmpty>{emptyLabel}</CommandEmpty>
                            <CommandGroup>
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
                                        className="cursor-pointer hover:bg-gray-100"
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