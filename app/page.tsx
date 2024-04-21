import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard";
import { Input } from "../components/ui/input";
import MessageBox from "./components/MessageBox";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <h4 className="flex-1 px-2 mx-2 scroll-m-20 text-4xl tracking-tight lg:text-4xl">Navbar Title</h4>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
                <li><a>Navbar Item 3</a></li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className="flex-grow flex-col items-center justify-stretch align-bottom">
            <MessageBox />
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full bg-base-300 py-4">
          {/* Footer content */}
        </footer>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Scribe</h1>
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 3</a></li>
          </ul>
        </div>

      </div>
    </main>
  );
}
