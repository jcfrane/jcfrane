import {useMediaQuery} from "react-responsive";
import React from "react";

interface BreakpointProps {
    children: React.ReactNode;
}

const MobileBreakPoint: React.FC<BreakpointProps> = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return isMobile ? children : null
}

export default MobileBreakPoint;
