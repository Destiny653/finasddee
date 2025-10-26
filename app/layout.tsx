import type { Metadata } from "next";
import { AppQueryProvider } from "./_components/AppQueryProvider";
import { Toaster } from "sonner";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

export const metadata: Metadata = {
    title: "Finasddee - Money Transfer and Online Payments",
    description: "This professional design html template is for build a Money Transfer and online payments website.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html lang={locale} className="h-full">
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
                <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
            </head>
            <body
                className="antialiased h-full overflow-x-hidden"
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <AppQueryProvider>{children}</AppQueryProvider>
                </NextIntlClientProvider>
                <Toaster />
            </body>
        </html>
    );
}
