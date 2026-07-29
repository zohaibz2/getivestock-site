import { Bricolage_Grotesque, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

// Bricolage Grotesque is a variable font, so no `weight` is needed.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Narejo Farms — Goats and buffalo, raised properly",
  description:
    "A working goat and buffalo farm on our own land in Mirpurkhas, Sindh, supplying Qurbani buyers in Karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
