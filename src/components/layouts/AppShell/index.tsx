import React from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
    const disableNavbarPage = ['/auth/login', '/auth/register'];
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbarPage.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default AppShell;
