import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session } = useSession()
    return (
        <h2>This is the main</h2>
    )
}