import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { classNames } from "@/shared/lib/classNames/classNames";
import "./styles/index.css";
import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { ThemeProvider } from "./providers/ThemeProvider";
import { QueryProvider } from "./providers/QueryProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Retflix — Watch Movies & TV Shows Online",
  description:
    "Retflix is your ultimate destination for movies and TV shows online. Explore trending films, new releases, and timeless classics — all in one place.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Retflix — Watch Movies & TV Shows Online",
    description: "Stream your favorite movies and TV shows anytime, anywhere. Discover what's trending now on Retflix.",
    url: "https://retflix.vercel.app",
    siteName: "Retflix",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Retflix Movie Streaming",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retflix — Watch Movies & TV Shows Online",
    description: "Stream movies and TV shows instantly on Retflix — your home for entertainment.",
    images: ["/preview.png"],
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang="en">
      <body className={classNames("", {}, [poppins.variable])}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <QueryProvider>
            <ThemeProvider>
              <Header />
              <div className="content_wrapper">
                <Sidebar />
                <div className={"content"}>{children}</div>
              </div>
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
