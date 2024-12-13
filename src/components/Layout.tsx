import React, {useEffect, useState} from 'react';

import {IoCodeSlash, IoHome, IoLeaf} from "react-icons/io5";
import {SidebarItemInterface} from "../types";
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from "./MobileSidebar";
import SidebarToggle from "./SidebarToggle";
import MobileBreakPoint from "./MobileBreakPoint";
import {useMediaQuery} from "react-responsive";

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

const Layout: React.FC<LayoutProps> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mounted, setMounted] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        setMounted(true);
        if (isMobile) {
            setSidebarOpen(false);
        }
    }, []);

    return (
        <div>
            {/* Mobile sidebar */}
            <MobileBreakPoint>
                {mounted && (<MobileSidebar
                    navigation={navigation}
                    open={sidebarOpen}
                    onToggle={() => {
                        setSidebarOpen(!sidebarOpen);
                    }}
                />)}
            </MobileBreakPoint>

            {/* Static sidebar for desktop */}
            <DesktopSidebar
                label={'jcfane.'}
                navigation={navigation}
                open={sidebarOpen}
                onToggle={() => {
                    setSidebarOpen(!sidebarOpen)
                }}
            />

            <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:pl-72' : 'lg:pl-20'}`}>
                <div
                    className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className={`p-2 text-gray-700 ${sidebarOpen ? 'hidden' : ''}`}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <SidebarToggle open={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}/>
                    </button>

                    {/* Separator */}
                    {/*<div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>*/}

                    {/*<div className={`flex flex-1 gap-x-4 self-stretch lg:gap-x-6 ${!sidebarOpen ? 'px-2' : ''}`}>*/}
                    {/*    <form action="#" method="GET" className="relative flex flex-1">*/}
                    {/*        <label htmlFor="search-field" className="sr-only">*/}
                    {/*            Search*/}
                    {/*        </label>*/}
                    {/*        <MagnifyingGlassIcon*/}
                    {/*            aria-hidden="true"*/}
                    {/*            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"*/}
                    {/*        />*/}
                    {/*        <input*/}
                    {/*            id="search-field"*/}
                    {/*            name="search"*/}
                    {/*            type="search"*/}
                    {/*            placeholder="Search"*/}
                    {/*            className="block h-full w-full border-0 bg-transparent pl-8 pr-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"*/}
                    {/*        />*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>

                <main className={`py-10 ${!sidebarOpen ? 'px-2 lg:px-4' : ''}`}>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
