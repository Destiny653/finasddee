import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface ICustomFileUpload {
    label?: string;
    accept?: string;
    multiple?: boolean;
    onChange?: (files: FileList | null) => void;
    className?: string;
    placeholder?: string;
}

const CustomFileUpload: React.FC<ICustomFileUpload> = ({
    label,
    accept = "image/*,.pdf",
    multiple = false,
    onChange,
    className,
    placeholder = "Click to upload or drag and drop",
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    };

    const handleFiles = (files: FileList) => {
        const fileArray = Array.from(files);
        if (multiple) {
            setSelectedFiles(prev => [...prev, ...fileArray]);
        } else {
            setSelectedFiles(fileArray);
        }
        onChange?.(files);
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            handleFiles(files);
        }
    };

    const removeFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const openFileDialog = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="relative flex flex-col gap-2">
            {label && (
                <p className="font-sans font-semibold capitalize text-sm leading-[18px] text-gray-700">
                    {label}
                </p>
            )}

            <div
                className={cn(
                    "relative border-2 border-dashed rounded-sm p-6 md:p-8 cursor-pointer transition-colors",
                    "bg-[#F5F5F5] border-[#E5E7EB]",
                    isDragOver && "border-[#c99207] bg-[#fef7e6]",
                    className
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileDialog}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileInputChange}
                    className="hidden"
                />

                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                            {placeholder}
                        </p>
                        <p className="text-xs text-gray-500">
                            PDF, JPG, PNG up to 10MB
                        </p>
                    </div>
                </div>
            </div>

            {selectedFiles.length > 0 && (
                <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-sm border border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <FileText className="w-4 h-4 text-gray-400" />
                                <div>
                                    <p className="text-sm font-medium text-gray-700 truncate max-w-[200px]">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                }}
                                className="p-1 hover:bg-transparent rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomFileUpload;
