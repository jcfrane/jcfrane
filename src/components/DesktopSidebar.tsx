import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarToggle from "./SidebarToggle";
import { SidebarItemInterface } from "../types";
import Initials from "./Initials";

interface DesktopSidebarProps {
    label: string;
    navigation: SidebarItemInterface[];
    open: boolean;
    onToggle: () => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ label, navigation, open, onToggle }) => {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300"
             style={{width: open ? '18rem' : '6.8rem'}}  // 72 (width) vs 20 (collapsed)
        >
            {/* Sidebar content */}
            <div className={`
                flex grow flex-col gap-y-5 overflow-y-auto
                bg-gradient-to-tr from-[#E95420] to-[#772165]
                px-6 pb-4
                transition-all duration-300
                ${open ? '' : 'items-center pt-2'}
            `}>
                <div className="flex justify-between h-16 shrink-0 items-center">
                    {open && (
                        <>
                            <h4 className="text-white font-bold text-2xl transition-opacity duration-300">
                                {label}
                            </h4>
                            <SidebarToggle onClick={onToggle} open={open}/>
                        </>
                    )}

                    {!open && (
                        <Initials initials={'JC'}
                                  classes={`w-12 h-12`}
                                  backgroundClass={'bg-brandUbuntuOrange-1000'} />
                    )}
                </div>
                <nav className="mt-5 flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-4 px-4">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <SidebarItem item={item} collapsed={!open}/>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                </nav>
            </div>
        </div>
    );
};

export default DesktopSidebar;
