"use client";

import React, { useState, useRef } from "react";
import { useForm, Controller, UseFormSetValue } from "react-hook-form";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import { FileText, Upload, X, Eye } from "lucide-react";
import Image from "next/image";

interface IdentityFormData {
  documentType: string;
  identityDocument: FileList | null;
}

interface AddressFormData {
  addressDocument: FileList | null;
}

const KYCVerificationForm = () => {
  const [currentStep, setCurrentStep] = useState<'identity' | 'address'>('identity');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const identityFileInputRef = useRef<HTMLInputElement>(null);
  const addressFileInputRef = useRef<HTMLInputElement>(null);

  // Identity Verification Form
  const identityForm = useForm<IdentityFormData>({
    defaultValues: {
      documentType: "National ID",
      identityDocument: null,
    },
  });

  // Address Verification Form
  const addressForm = useForm<AddressFormData>({
    defaultValues: {
      addressDocument: null,
    },
  });

  const documentTypeOptions = [
    { label: "National ID", value: "National ID" },
    { label: "Passport", value: "Passport" },
    { label: "Driver's License", value: "Driver's License" },
    { label: "Voter's Card", value: "Voter's Card" },
  ];

  const [selectedDocumentType, setSelectedDocumentType] = useState("National ID");

  const onIdentitySubmit = (data: IdentityFormData) => {
    const filesArray = data.identityDocument ? Array.from(data.identityDocument).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type
    })) : [];
    console.log("Identity Verification Data:", { ...data, identityDocument: filesArray });
    setCompletedSteps([...completedSteps, 'identity']);
    setCurrentStep('address');
  };

  const onAddressSubmit = (data: AddressFormData) => {
    const filesArray = data.addressDocument ? Array.from(data.addressDocument).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type
    })) : [];
    console.log("Address Verification Data:", { ...data, addressDocument: filesArray });
    setCompletedSteps([...completedSteps, 'address']);
    alert("KYC Verification completed successfully!");
  };

  const isStepCompleted = (step: string) => completedSteps.includes(step);

  const handleFileClick = (file: File) => {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setSelectedImageUrl(url);
    } else {
      alert('Preview not available for this file type. Please open with a PDF viewer.');
    }
  };

  const closeImageModal = () => {
    if (selectedImageUrl) {
      URL.revokeObjectURL(selectedImageUrl);
      setSelectedImageUrl(null);
    }
  };

  const validateIdentityFiles = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return "At least one file is required";
    }
    if (files.length > 2) {
      return "Maximum 2 files allowed (front and back of ID)";
    }
    return true;
  };

  const validateAddressFiles = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return "At least one file is required";
    }
    if (files.length > 2) {
      return "Maximum 2 files allowed for address verification";
    }
    return true;
  };

  const handleUploadClick = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLInputElement | null>) => {
    if (e.target === e.currentTarget) {
      ref.current?.click();
    }
  };

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (files: FileList | null) => void,
    existingFiles: FileList | null
  ) => {
    const newFiles = e.target.files;
    if (newFiles) {
      const maxFiles = 2;
      const currentFilesArray = existingFiles ? Array.from(existingFiles) : [];
      const newFilesArray = Array.from(newFiles);
      const combinedFilesArray = [...currentFilesArray, ...newFilesArray].slice(0, maxFiles);

      if (combinedFilesArray.length > maxFiles) {
        alert(`Maximum ${maxFiles} file(s) allowed.`);
        e.target.value = '';
        return;
      }

      const dataTransfer = new DataTransfer();
      combinedFilesArray.forEach(file => dataTransfer.items.add(file));
      onChange(dataTransfer.files.length > 0 ? dataTransfer.files : null);

      console.log("Selected files array:", combinedFilesArray.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      })));
    }
  };

  const removeFile = (
    index: number,
    files: FileList | null,
    setValue: UseFormSetValue<IdentityFormData> | UseFormSetValue<AddressFormData>,
    fieldName: "identityDocument" | "addressDocument"
  ) => {
    if (!files) return;
    const newFiles = Array.from(files).filter((_, i) => i !== index);
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (setValue as any)(fieldName, dataTransfer.files.length > 0 ? dataTransfer.files : null);
    console.log("Remaining files after removal:", newFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type
    })));
  };

  return (
    <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Identity Verification</h1>
        <p className="text-sm sm:text-base text-gray-500">Complete the following steps to verify your account</p>
      </div>

      {/* Progress Tabs */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="flex bg-gray-100 rounded-lg p-1 w-full sm:w-fit">
          <button
            type="button"
            onClick={() => setCurrentStep('identity')}
            className={`flex-1 sm:px-6 md:px-8 py-2 sm:py-1 rounded-md font-medium text-xs sm:text-sm md:text-base transition-all ${
              currentStep === 'identity' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            } ${isStepCompleted('identity') ? 'text-green-600' : ''}`}
          >
            Identity Verification
            {isStepCompleted('identity') && (
              <span className="ml-1 sm:ml-2 text-green-600">✓</span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep('address')}
            className={`flex-1 sm:px-6 md:px-8 py-2 sm:py-1 rounded-md font-medium text-xs sm:text-sm md:text-base transition-all ${
              currentStep === 'address' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            } ${isStepCompleted('address') ? 'text-green-600' : ''}`}
            disabled={!isStepCompleted('identity')}
          >
            Address Verification
            {isStepCompleted('address') && (
              <span className="ml-1 sm:ml-2 text-green-600">✓</span>
            )}
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full">
        {currentStep === 'identity' && (
          <form onSubmit={identityForm.handleSubmit(onIdentitySubmit)} className="space-y-6 sm:space-y-8">
            {/* Document Type Selection */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Select Identity Verification Document
              </label>
              <CustomCombobox
                options={documentTypeOptions}
                emptyLabel="No document type found"
                placeholder="National ID"
                className="w-full py-8"
                value={selectedDocumentType}
                onSelectChange={(value) => {
                  setSelectedDocumentType(value);
                  identityForm.setValue("documentType", value, { shouldValidate: true });
                }}
              />
            </div>

            {/* File Upload Section */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Upload front and back of your identity document (up to 2 files)
              </label>

              <Controller
                name="identityDocument"
                control={identityForm.control}
                rules={{
                  required: "Identity document is required",
                  validate: validateIdentityFiles
                }}
                render={({ field: { onChange, value } }) => (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 md:p-12 text-center hover:border-gray-400 transition-colors relative"
                    onClick={(e) => handleUploadClick(e, identityFileInputRef)}
                  >
                    <input
                      ref={identityFileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      multiple
                      onChange={(e) => handleFileSelect(e, onChange, value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center space-y-3 sm:space-y-4 pointer-events-none">
                      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Upload className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-gray-400" />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <p className="text-xs sm:text-sm font-medium text-teal-600">
                          Max 2 files (front and back)
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Click to select or drag and drop files here
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />

              {identityForm.formState.errors.identityDocument && (
                <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">
                  {identityForm.formState.errors.identityDocument.message}
                </p>
              )}

              {/* Display selected files */}
              {identityForm.watch("identityDocument") && (
                <div className="mt-3 sm:mt-4 space-y-2">
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Selected files (up to 2):</p>
                  {Array.from(identityForm.watch("identityDocument") || []).map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between w-fit space-x-2 text-xs sm:text-sm text-gray-600 p-2 bg-gray-50 rounded border-l-4 border-blue-500"
                    >
                      <div className="flex items-center flex-1 truncate">
                        <FileText className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <div className="flex items-center sm:space-x-2">
                        <button
                          type="button"
                          onClick={() => handleFileClick(file)}
                          className="text-blue-600 hover:text-blue-800 flex items-center text-xs bg-blue-100 box-border sm:px-2 py-0.5 sm:py-1 rounded"
                        >
                          <Eye className="w-2 sm:w-3 h-2 sm:h-3" />
                          <span>Preview</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(index, identityForm.watch("identityDocument"), identityForm.setValue, "identityDocument");
                          }}
                          className="text-gray-400 hover:text-gray-600 bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded"
                        >
                          <X className="w-3 sm:w-4 h-3 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={identityForm.formState.isSubmitting}
                className="bg-slate-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
              >
                <span>Complete</span>
                <span>→</span>
              </button>
            </div>
          </form>
        )}

        {currentStep === 'address' && (
          <form onSubmit={addressForm.handleSubmit(onAddressSubmit)} className="space-y-6 sm:space-y-8">
            {/* Address Verification Instructions */}
            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Address Verification</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Please upload document(s) that show your current address (utility bill, bank statement, etc. - up to 2 files)
              </p>
            </div>

            {/* Address Document Upload */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Upload address verification document(s) (up to 2 files)
              </label>

              <Controller
                name="addressDocument"
                control={addressForm.control}
                rules={{
                  required: "Address document is required",
                  validate: validateAddressFiles
                }}
                render={({ field: { onChange, value } }) => (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 md:p-12 text-center hover:border-gray-400 transition-colors relative"
                    onClick={(e) => handleUploadClick(e, addressFileInputRef)}
                  >
                    <input
                      ref={addressFileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      multiple
                      onChange={(e) => handleFileSelect(e, onChange, value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center space-y-3 sm:space-y-4 pointer-events-none">
                      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Upload className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-gray-400" />
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <p className="text-xs sm:text-sm font-medium text-teal-600">
                          Max 2 files
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Click to select or drag and drop files here
                        </p>
                      </div>

                      <div className="text-[10px] sm:text-xs text-gray-400 space-y-1">
                        <p>Accepted documents:</p>
                        <p>• Utility Bill (electricity, water, gas)</p>
                        <p>• Bank Statement</p>
                        <p>• Government Letter</p>
                        <p>• Rental Agreement</p>
                      </div>
                    </div>
                  </div>
                )}
              />

              {addressForm.formState.errors.addressDocument && (
                <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">
                  {addressForm.formState.errors.addressDocument.message}
                </p>
              )}

              {/* Display selected files */}
              {addressForm.watch("addressDocument") && (
                <div className="mt-3 sm:mt-4 space-y-2">
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Selected files (up to 2):</p>
                  {Array.from(addressForm.watch("addressDocument") || []).map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between space-x-2 text-xs sm:text-sm text-gray-600 p-2 bg-gray-50 rounded border-l-4 border-green-500"
                    >
                      <div className="flex items-center space-x-2 flex-1 truncate">
                        <FileText className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <div className="flex items-center sm:space-x-2">
                        <button
                          type="button"
                          onClick={() => handleFileClick(file)}
                          className="text-blue-600 hover:text-blue-800 flex items-center text-xs bg-blue-100 sm:px-2 py-0.5 sm:py-1 rounded"
                        >
                          <Eye className="w-2 sm:w-3 h-2 sm:h-3" />
                          <span>Preview</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(index, addressForm.watch("addressDocument"), addressForm.setValue, "addressDocument");
                          }}
                          className="text-gray-400 hover:text-gray-600 bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded"
                        >
                          <X className="w-3 sm:w-4 h-3 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setCurrentStep('identity')}
                className="bg-gray-200 text-gray-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={addressForm.formState.isSubmitting}
                className="bg-slate-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Complete</span>
                <span>→</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Image Preview Modal */}
      {selectedImageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000031] bg-opacity-50 p-4 sm:p-6">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl max-h-[90vh] p-2 sm:p-4">
            <button
              type="button"
              onClick={closeImageModal}
              className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg z-10"
            >
              <X className="w-4 sm:w-6 h-4 sm:h-6 text-gray-600" />
            </button>
            <Image
              src={selectedImageUrl}
              alt="Uploaded file preview"
              width={600}
              height={600}
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default KYCVerificationForm;