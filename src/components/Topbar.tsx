'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    BellIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline';

export default function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
    const [query, setQuery] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('Search:', query);
    }

    return (
        <header className="h-16 bg-white flex items-center justify-between px-3 sm:px-6 shadow-sm">
            {/* Sol taraf */}
            <div className="flex items-center gap-4">
                {/* Hamburger */}
                <button
                    aria-label="Toggle sidebar"
                    className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={onToggleSidebar}
                >
                    <Bars3Icon className="w-6 h-6 text-gray-700" />
                </button>

                {/* Arama */}
                <form onSubmit={handleSubmit} className="relative hidden sm:block">
                    <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search"
                        className="w-[520px] max-w-[40vw] xl:max-w-[500px] pl-10 pr-4 py-2 rounded-lg border border-gray-500 bg-white text-sm placeholder:text-gray-500 focus:outline-none text-gray-900 focus:ring-1 focus:ring-gray-400"
                    />
                </form>
            </div>

            {/* Sağ taraf */}
            <div className="flex items-center gap-3">
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                    <EnvelopeIcon className="w-5 h-5 text-gray-600" />
                </button>

                <button className="relative p-2 rounded-full hover:bg-gray-100">
                    <BellIcon className="w-5 h-5 text-gray-600" />
                    <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white bg-red-500 rounded-full">
                        3
                    </span>
                </button>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                        <Image
                            src="/avatar.jpg"
                            alt="Profil"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
