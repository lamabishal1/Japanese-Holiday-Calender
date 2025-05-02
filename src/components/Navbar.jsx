import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="flex justify-center space-x-6 bg-[#A3D3FF] py-2">
            <Link href="/" className="border-1 p-1.5 rounded-full hover:bg-[#BADFFF] border-[#579ddf] text-[#2C3E50]">Home</Link>
            <Link href="/" className="border-1 p-1.5 rounded-full hover:bg-[#BADFFF] border-[#579ddf] text-[#2C3E50]">About</Link>
        </nav>
    );
}
export default Navbar;