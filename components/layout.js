import Nav from "@/components/nav";
import Header from "@/components/header";
import {useState} from "react";

export default function Layout({ children }) {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((current) => !current);
    };

    return (
      <>
        <Header toggleSideBar={toggle}/>
          <div className="flex min-h-screen bg-accent">
              <Nav open={open} />
              <main className="px-4 py-2">{children}</main>
          </div>
      </>
    );
}