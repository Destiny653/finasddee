import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppQueryProvider } from "./_components/AppQueryProvider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Finasddee - Money Transfer and Online Payments",
    description: "This professional design html template is for build a Money Transfer and online payments website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <head>
                <link href="/assets/images/pic/faviconRed.png" rel="icon" />
                <meta name="description" content="This professional design html template is for build a Money Transfer and online payments website." />
                <meta name="author" content="harnishdesign.net" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Flag Icons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css" />

                {/* Font Awesome */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />

                {/* jQuery */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-x-hidden`}
            >
                <AppQueryProvider>{children}</AppQueryProvider>
            </body>
        </html>
    );
}
