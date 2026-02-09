import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kikang Kim | Backend Engineer",
  description:
    "Backend engineer specializing in Python, AWS, Docker, and Kubernetes. Designing stable and scalable service architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
