import "./globals.css";
import LayoutWrapper from "@/Component/client/layout/LayouWrapper";


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="bg-gradient-to-t from-white to-[#B3E8F3]  ">
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        </body>
        </html>
    );
}
