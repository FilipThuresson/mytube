import Logo from "@/components/logo";
import { Squash as Hamburger } from 'hamburger-react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faBell, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
export default function Header({toggleSideBar}) {

    const { data: session } = useSession()

    if (!session) {
        return (
            <div className="min-h-[75px] px-4 py-2 flex items-center justify-between">
                <span className="flex items-center">
                    <Hamburger rounded color="#ededed" onToggle={toggleSideBar}/>
                    <Logo />
                </span>
                    <span className="rounded-full">
                    <form method="get" action="#">
                        <input type="text" name="search_query" className="
                            w-96 text-text bg-transparent
                            text-opacity-100 px-4 py-2
                            rounded-l-full border-secondary
                            border-2 border-r-0 outline-none focus:border-accent focus:border-r-2
                        "/>
                        <button type="submit" className="bg-secondary px-4 py-2 border-2 border-secondary border-l-0 rounded-r-full">
                            <FontAwesomeIcon icon={faSearch} color={"#ededed"} size={"xl"}/>
                        </button>
                    </form>
                </span>
                <button onClick={()=> signIn('google')} className="border-accent border-2 px-4 py-2 flex items-center gap-1 text-accent rounded-full">
                    <FontAwesomeIcon icon={faUser} style={{color: "#2a1ed4",}} className="border-2 border-accent p-1.5 rounded-full"/>
                    <p className="underline">Sign in</p>
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-[75px] px-4 py-2 flex items-center justify-between ">
            <span className="flex items-center w-[33%]">
                <Hamburger rounded color="#ededed" onToggle={toggleSideBar}/>
                <Logo />
            </span>
            <span className="rounded-full w-[33%] flex justify-center">
                <form method="get" action="#">
                    <input type="text" name="search_query" className="
                        w-96 text-text bg-transparent
                        text-opacity-100 px-4 py-2
                        rounded-l-full border-secondary
                        border-2 border-r-0 outline-none focus:border-accent focus:border-r-2
                    "/>
                    <button type="submit" className="bg-secondary px-4 py-2 border-2 border-secondary border-l-0 rounded-r-full">
                        <FontAwesomeIcon icon={faSearch} color={"#ededed"} size={"xl"}/>
                    </button>
                </form>
            </span>
            <span className="w-[33%] flex justify-end items-center gap-6">
                <FontAwesomeIcon icon={faBell} size={"xl"} color={"#ededed"}/>
                <Image src={session.user.image} alt={"profilepicture"} width={32} height={32} className="rounded-full"/>
                <button onClick={()=>signOut()}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} size={"xl"} color={"#ededed"}/>
                </button>
            </span>
        </div>
    );
}