import { PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }: PropsWithChildren) {
    return <div className="layout" >
        <Navbar>
            <Navbar.Item
                href={'/'}
                title={'Home'}
            />
            <Navbar.Item
                href={'/services'}
                title={'Services'}
            />
            <Navbar.Item
                href={'/about'}
                title={'About'}
            />
        </Navbar>
        {children}
        <Footer />
    </div>
}