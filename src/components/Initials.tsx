import React from "react";

interface ShortNameProps {
    initials: string;
    classes?: string;
    backgroundClass?: string;
}

const Initials: React.FC<ShortNameProps> = ({initials, classes, backgroundClass}) => {
    return (
        <div className={`
            rounded-full p-4 text-white flex items-center justify-center
            ${classes ? classes : ''}
            ${backgroundClass ? backgroundClass : 'bg-black'}
        `}>
            {initials}
        </div>
    );
}

export default Initials;
