import { ReactNode } from "react"
import Navbar from "../Navbar"

type Props = {
    children?: ReactNode
}
export default function Layout({ children }: Props) {
    return <div>
        <Navbar>
            <Navbar.NavItem
                href="/about"
                title="About Us"
            />
            <Navbar.NavItem
                href="/login"
                title="Log In | Sign Up"
            />
        </Navbar>
        {children}
    </div>
}