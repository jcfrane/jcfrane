import {HeroIcon} from "./global";
import {IconType} from "react-icons";

export interface SidebarItemInterface {
    name: string;
    href: string;
    icon: IconType;
    count?: string;
    current: boolean;
}
