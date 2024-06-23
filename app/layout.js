import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/flaticon.css";
import "@/assets/css/fontawesome-all.min.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/nice-select.css";
import "@/assets/css/slick.css";
import "@/assets/css/slicknav.css";
import "@/assets/css/style.css";
import "@/assets/css/themify-icons.css";
import "@/assets/css/ticker-style.css";
import { AuthProvider } from "@/provider/AuthProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FPTU - Technology",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
