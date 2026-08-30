import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: {
    default: `${firm.shortName} | ${firm.tagline}`,
    template: `%s | ${firm.shortName}`,
  },
  description: firm.descriptor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className="font-body antialiased">
        <DisclaimerModal />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
