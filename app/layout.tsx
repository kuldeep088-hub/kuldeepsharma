import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuldeep Sharma | Digital Marketing & Creative Specialist",
  description:
    "Portfolio of Kuldeep Sharma — Digital Marketing & Creative Specialist helping businesses grow through creative design, Meta Ads, and performance-driven marketing. Based in Jaipur, India.",
  keywords: [
    "Kuldeep Sharma",
    "Digital Marketing",
    "Meta Ads",
    "Graphic Design",
    "Content Strategy",
    "Social Media Marketing",
    "Jaipur",
    "Freelance Digital Marketer India",
  ],
  authors: [{ name: "Kuldeep Sharma" }],
  openGraph: {
    title: "Kuldeep Sharma | Digital Marketing & Creative Specialist",
    description:
      "Helping businesses grow through creative design, content systems, and performance-driven marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
