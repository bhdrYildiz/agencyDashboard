'use client';

import {
    Squares2X2Icon,
    CalendarDaysIcon,
    ClipboardDocumentListIcon,
    PlusCircleIcon,
    HeartIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Dashboard', href: '/', icon: Squares2X2Icon },
    { name: 'My Booking', href: '/bookings', icon: CalendarDaysIcon },
    { name: 'Calendar', href: '/calendar', icon: ClipboardDocumentListIcon },
    { name: 'Tasks', href: '/tasks', icon: HeartIcon },
    { name: 'Add Bookings', href: '/addBookings', icon: PlusCircleIcon },
    { name: 'Messages', href: '/messages', icon: ChatBubbleOvalLeftEllipsisIcon },
    { name: 'My Profile', href: '/profile', icon: UserCircleIcon },
    { name: 'Logout', href: '/logout', icon: ArrowRightOnRectangleIcon },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    const pathname = usePathname();

    return (
        <aside
            className={`h-screen bg-[#0a1448] text-white flex flex-col transition-all duration-400
        ${isOpen ? 'w-64' : 'w-20'}`}
        >
            {/* Logo */}
            <div className="h-16 flex items-center justify-center px-2 border-b border-white/10">
                <Image
                    src="/logo-light.png"
                    alt="Logo"
                    width={isOpen ? 120 : 32}
                    height={32}
                    className="object-contain transition-all"
                />
            </div>

            {/* Menü */}
            <nav className="flex-1 px-2 py-6 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href; // startsWith yerine tam eşleşme

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isActive
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <item.icon className="w-6 h-6" />
                            {isOpen && <span>{item.name}</span>}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
