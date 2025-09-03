import React from "react";
import PageLayout from "@/app/_components/layout/PageLayout";

const DemoPage = () => {
    return (
        <PageLayout>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">Demo Page</h1>
                    <p className="text-lg text-center mb-8">
                        This is a demo page showing the new header component in action.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Header Features</h2>
                            <ul className="space-y-2">
                                <li>✅ Uses current font family (Geist/Outfit)</li>
                                <li>✅ Bottom box shadow</li>
                                <li>✅ Responsive design</li>
                                <li>✅ Mobile hamburger menu</li>
                                <li>✅ Login/Register buttons</li>
                                <li>✅ Finasddee branding colors</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
                            <p className="text-gray-600 mb-4">
                                This header is designed for all pages except the landing page. 
                                The landing page uses a transparent header overlay.
                            </p>
                            <p className="text-gray-600">
                                The header includes responsive navigation with mobile-first design 
                                and follows the Finasddee brand guidelines.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Test the Header</h2>
                        <p className="text-gray-600 mb-6">
                            Try resizing your browser window to see the responsive behavior, 
                            or click the hamburger menu on mobile devices.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a 
                                href="/send-money" 
                                className="inline-flex items-center justify-center rounded-md bg-[#b8860b] text-white hover:bg-[#9a7209] h-12 px-8 font-medium transition-colors"
                            >
                                Go to Send Money
                            </a>
                            <a 
                                href="/home" 
                                className="inline-flex items-center justify-center rounded-md border border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white h-12 px-8 font-medium transition-colors"
                            >
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default DemoPage;
