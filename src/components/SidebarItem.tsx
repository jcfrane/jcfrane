import classNames from "classnames";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {SidebarItemInterface} from "../types";

export interface SidebarItemProps {
    item: SidebarItemInterface
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
    const linkClasses = classNames(
        item.current
            ? 'bg-brandUbuntuOrange-800'
            : 'hover:bg-brandUbuntuOrange-600',
        'group text-white font-thin flex items-center gap-x-3 rounded-lg p-3 text-md'
    );

    const iconClasses = classNames(
        'h-5 w-5 shrink-0 text-white'
    );

    return (
        <a href={item.href} className={linkClasses}>
            <item.icon className={iconClasses} />
            {item.name}
        </a>
    );
}

export default SidebarItem;
