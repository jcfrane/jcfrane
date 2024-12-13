import React from "react";
import {BsLayoutSidebarInset, BsLayoutSidebarInsetReverse} from "react-icons/bs";

interface SidebarToggleProps {
    onClick?: () => void;
    open: boolean;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({onClick, open}) => {
    return (
        <div className="relative group h-5 w-5 text-brandMidAubergine-500 cursor-pointer" onClick={onClick}>
            {open ? (
                <BsLayoutSidebarInsetReverse className="h-5 w-5 transition-transform duration-300"/>
            ) : (
                <BsLayoutSidebarInset className="h-5 w-5 transition-transform duration-300"/>
            )}
        </div>
    );
};

export default SidebarToggle;
