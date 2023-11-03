import React, { ReactNode } from 'react'; // Import ReactNode

import Sidebar from "./drawer";

interface RootLayoutProps {
    children: ReactNode; // Specify the type of children prop
}

function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="">
            <Sidebar />
            <main className="">{children}</main>
        </div>
    );
}

export default RootLayout;
