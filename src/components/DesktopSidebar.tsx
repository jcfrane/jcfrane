import React from "react";
import SidebarItem from "./SidebarItem";
import {BsLayoutSidebarInset, BsLayoutSidebarInsetReverse} from "react-icons/bs";
import {SidebarItemInterface} from "../types";

interface DesktopSidebarProps {
    navigation: SidebarItemInterface[];
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({navigation}) => {
    return (
        <>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar content */}
                <div className="
                      flex grow flex-col gap-y-5 overflow-y-auto
                      bg-gradient-to-tr
                      from-[#E95420]
                      to-[#772165]
                      px-6 pb-4
                    ">
                    <div className="flex justify-between  h-16 shrink-0 items-center">
                        <h4 className="text-white font-bold text-2xl">jcfrane.</h4>
                        <div className="relative group h-5 w-5 text-brandMidAubergine-500 cursor-pointer">
                            <BsLayoutSidebarInsetReverse
                                className="absolute h-5 w-5 inset-0 transition-transform duration-300 opacity-100 group-hover:opacity-0"/>

                            <BsLayoutSidebarInset
                                className="absolute h-5 w-5 inset-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"/>
                        </div>
                    </div>
                    <nav className="mt-5 flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-4 px-4">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                        <SidebarItem item={item}/>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default DesktopSidebar;
