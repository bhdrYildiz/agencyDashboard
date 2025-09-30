'use client';

import { useState } from "react";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
