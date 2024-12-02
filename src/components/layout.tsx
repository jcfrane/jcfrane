import React, {useState, Fragment} from 'react';
import {
    Dialog,
    Transition,
} from '@headlessui/react';

import {
    Bars3Icon,
    CodeBracketIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {HeroIcon} from "../types";


interface LayoutProps {
    children: React.ReactNode;
}

interface NavigationItem {
    name: string;
    href: string;
    icon: HeroIcon;
    count?: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    {name: 'Home', href: '#', icon: HomeIcon, count: '5', current: true},
    {name: 'Development', href: '#', icon: CodeBracketIcon, current: false},
    {name: 'Fitness', href: '#', icon: HeartIcon, count: '12', current: false},
];


const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
];

function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

const Layout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            {/* Mobile sidebar */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity duration-300 ease-linear"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300 ease-linear"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80"/>
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition duration-300 ease-in-out transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition duration-300 ease-in-out transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel
                                className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-600 px-6 pb-4">
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button
                                        type="button"
                                        onClick={() => setSidebarOpen(false)}
                                        className="-m-2.5 p-2.5"
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white"/>
                                    </button>
                                </div>
                                {/* Sidebar content */}
                                <div className="flex h-16 shrink-0 items-center">
                                    <h4 className="text-white font-bold text-2xl">jcfrane.</h4>
                                </div>
                                <nav className="mt-5 flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-indigo-700 text-white'
                                                                    : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold',
                                                            )}
                                                        >
                                                            <item.icon
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'text-white'
                                                                        : 'text-indigo-200 group-hover:text-white',
                                                                    'h-6 w-6 shrink-0',
                                                                )}
                                                            />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar content */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <h4 className="text-white font-bold text-3xl">jcfrane.</h4>
                    </div>
                    <nav className="mt-5 flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-indigo-700 text-white'
                                                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-white'
                                                            : 'text-indigo-200 group-hover:text-white',
                                                        'h-6 w-6 shrink-0',
                                                    )}
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

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
                    <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
