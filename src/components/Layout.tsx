import React, {useState} from 'react';

import {
    Bars3Icon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {IoCodeSlash, IoHome, IoLeaf} from "react-icons/io5";
import {SidebarItemInterface} from "../types";
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from "./MobileSidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const navigation: SidebarItemInterface[] = [
    {name: 'dashboard.', href: '#', icon: IoHome, count: '5', current: true},
    {name: 'development.', href: '#', icon: IoCodeSlash, current: false},
    {name: 'life.', href: '#', icon: IoLeaf, count: '12', current: false},
];

const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
];

function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            {/* Mobile sidebar */}
            <MobileSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                navigation={navigation}
            />

            {/* Static sidebar for desktop */}
            <DesktopSidebar navigation={navigation}/>

            {/* Navbar */}
            <div className="lg:pl-72">
                <div
                    className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                    </button>

                    {/* Separator */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form action="#" method="GET" className="relative flex flex-1">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            />
                            <input
                                id="search-field"
                                name="search"
                                type="search"
                                placeholder="Search"
                                className="block h-full w-full border-0 bg-transparent pl-8 pr-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </form>
                    </div>
                </div>

                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8 text-brandUbuntuOrange-1000">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
