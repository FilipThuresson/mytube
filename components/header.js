import Logo from "@/components/logo";
import { Squash as Hamburger } from 'hamburger-react'
export default function Header({toggleSideBar}) {

    return (
        <div className="min-h-[75px] px-4 py-2 flex items-center">
            <Hamburger rounded color="#ededed" onToggle={toggleSideBar}/>
            <Logo />
        </div>
    );
}