import classNames from "classnames";
import React from 'react';
import {SidebarItemInterface} from "../types";

export interface SidebarItemProps {
    item: SidebarItemInterface;
    collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, collapsed = false }) => {
    const linkClasses = classNames(
        item.current ? 'bg-brandUbuntuOrange-800' : 'hover:bg-brandUbuntuOrange-600',
        'group text-white font-thin flex items-center gap-x-3 rounded-lg p-3 text-md'
    );

    const iconClasses = classNames(
        'h-5 w-5 shrink-0 text-white transition-all duration-300'
    );

    const textClasses = classNames(
        'whitespace-nowrap overflow-hidden transition-opacity duration-300',
        collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
    );

    return (
        <a href={item.href} className={linkClasses}>
            <item.icon className={iconClasses} />
            {!collapsed && (
                <span className={textClasses}>{item.name}</span>
            )}
        </a>
    );
}

export default SidebarItem;
