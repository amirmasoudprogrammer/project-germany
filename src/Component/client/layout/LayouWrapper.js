"use client";
import { usePathname } from "next/navigation";
import Layouts from "@/Component/client/layout/Layouts";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    const noLayoutPages = [
        "/Login",
        "/Signup",
        "/About",
        "/Contact",
        "/Products",
        "/Blog",
        "/dashboard",
        "/cart",
        "/order",
    ];

    const noLayout =
        noLayoutPages.includes(pathname) ||
        pathname.startsWith("/Products/") ||
        pathname.startsWith("/Blog/") ||
        pathname.startsWith("/dashboard/") ||
        pathname.startsWith("/cart/");

    return noLayout ? children : <Layouts>{children}</Layouts>;
}
