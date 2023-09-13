import Image from "next/image";
export default function Logo() {
    return (
        <span className="flex items-center text-text">
            <Image src="img/logo/icon.svg" alt="logo" width={64} height={64}/>
            <h2 className="text-2xl font-bold">MyTube</h2>
        </span>
    )
}