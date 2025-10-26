"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Facebook, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import MainHeader from "@/app/_components/layout/landingPage/navbar";
import Footer from "@/app/_components/layout/landingPage/footer";
import { useTranslations } from "next-intl";

interface Branch {
    id: string;
    title: string;
    name: string;
    address: string[];
    location?: string;
    email?: string;
    phone?: string;
}

const OurBranches = () => {
    const t = useTranslations();
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Sample branch data - easily add more branches here
    const branches: Branch[] = [
        {
            id: "headquarter",
            title: "Headquarter",
            name: "FINASDDEE Credit Line Cameroon S.A.",
            address: [
                "Rue Union Française, Bali, Douala",
                "P.O. Box 3755, Douala",
                "Cameroon, Central Africa."
            ],
            location: "Beside MRS Petrol Station, Bali, Douala, Cameroon",
            email: "head.quarter@finasddee-creditline.com",
            phone: "+237 123 456 789"
        },
        {
            id: "branch-1",
            title: "Douala Branch",
            name: "FINASDDEE Credit Line - Douala",
            address: [
                "Akwa Boulevard, Douala",
                "P.O. Box 1234, Douala",
                "Cameroon, Central Africa."
            ],
            location: "Near Total Station, Akwa, Douala",
            email: "douala@finasddee-creditline.com",
            phone: "+237 123 456 790"
        },
        {
            id: "branch-2",
            title: "Yaoundé Branch",
            name: "FINASDDEE Credit Line - Yaoundé",
            address: [
                "Avenue Kennedy, Yaoundé",
                "P.O. Box 5678, Yaoundé",
                "Cameroon, Central Africa."
            ],
            location: "Opposite City Hall, Centre Ville",
            email: "yaounde@finasddee-creditline.com",
            phone: "+237 123 456 791"
        }
        // Add more branches here as needed
    ];

    const sidebarLinks = [
        { label: t('routes.branches.sidebar.send'), href: "/" },
        { label: t('routes.branches.sidebar.branches'), href: "#branches", active: true },
        { label: t('routes.branches.sidebar.contact'), href: "contact" },
        { label: t('routes.branches.sidebar.faqs'), href: "faq" }
    ];

    return (
        <>
            <MainHeader />
            <div className="h-16 lg:h-20" />
            <div className="min-h-screen bg-gray-50">
            <style jsx>{`
                .header-bg {
                    background: #001E40;
                    position: relative;
                    overflow: hidden;
                }

                .sidebar-link {
                    border-left: 3px solid transparent;
                    border-bottom: 1px solid #e5e7eb;
                }

                .sidebar-link:hover {
                    background: #f9fafb;
                    border-left-color: #ce9739;
                }

                .sidebar-link.active {
                    background: #eef2f7;
                    border-left-color: #001E40;
                    color: #001E40;
                    font-weight: 600;
                }

                .branch-card {
                    border-left: 4px solid #ce9739;
                }

                .request-btn {
                    background: #ce9739;
                    transition: background-color 0.2s ease;
                }

                .request-btn:hover {
                    background: #bb842e;
                }

                .social-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 6px;
                    background: #ffffff;
                }

                .social-wrap { display: flex; gap: 8px; }

                @media (max-width: 1024px) {
                    .sidebar {
                        display: none;
                    }
                }
            `}</style>

            {/* Header Section */}
            <section className="header-bg text-white py-12 md:py-16 px-4 md:px-8 relative">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ce9739] mb-4">
                                {t('routes.branches.header')}
                            </h1>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-3 text-white text-sm md:text-base">
                                <Link href="/" className="hover:text-[#ce9739] transition-colors">
                                    {t('routes.common.breadcrumb.home')}
                                </Link>
                                <ChevronRight className="w-4 h-4" />
                                <span className="font-semibold">{t('routes.branches.header')}</span>
                            </div>
                        </div>
                        <div className="social-wrap">
                            <a href="#" className="social-icon"><Facebook className="w-5 h-5 text-[#001E40]" /></a>
                            <a href="#" className="social-icon"><Linkedin className="w-5 h-5 text-[#001E40]" /></a>
                            <a href="#" className="social-icon"><Twitter className="w-5 h-5 text-[#001E40]" /></a>
                            <a href="#" className="social-icon"><Youtube className="w-5 h-5 text-[#001E40]" /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex gap-8">
                        {/* Sidebar */}
                        <aside className="sidebar w-80 flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-8 border border-gray-200">
                                {sidebarLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className={`sidebar-link flex items-center justify-between px-6 py-4 text-gray-700 ${
                                            link.active ? 'active' : ''
                                        }`}
                                    >
                                        <span className="text-base">{link.label}</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </Link>
                                ))}
                            </div>
                        </aside>

                        {/* Branches List */}
                        <div className="flex-1">
                            <div className="flex flex-col gap-6">
                                {branches.map((branch) => (
                                    <div key={branch.id} className="branch-card bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                            <div className="flex-1 min-w-0">
                                                <h2 className="text-2xl font-bold text-[#001E40] mb-4">{branch.title}</h2>
                                                <h3 className="text-lg font-bold text-[#001E40] mb-3">{branch.name}</h3>
                                                <div className="space-y-1 mb-4">
                                                    {branch.address.map((line, index) => (
                                                        <p key={index} className="text-gray-800 text-base">{line}</p>
                                                    ))}
                                                </div>
                                                {branch.location && (
                                                    <div className="flex items-start gap-2 mb-2">
                                                        <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                                        <p className="text-gray-800 text-base">{branch.location}</p>
                                                    </div>
                                                )}
                                                {branch.email && (
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                                        <a href={`mailto:${branch.email}`} className="text-[#001E40] hover:underline text-base font-medium">{branch.email}</a>
                                                    </div>
                                                )}
                                                {branch.phone && (
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                                        <a href={`tel:${branch.phone}`} className="text-gray-800 hover:text-[#001E40] text-base">{branch.phone}</a>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="lg:pl-6 lg:min-w-[240px]">
                                                <button className="request-btn w-full px-6 py-3 text-white font-semibold rounded-md inline-flex items-center justify-center gap-2">
                                                    {t('routes.branches.requestCall')}
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <Footer />
        </>
    );
};

export default OurBranches;