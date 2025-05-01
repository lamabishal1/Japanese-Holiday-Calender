import React from "react";

const Navbar = () => {

    return (
        <nav className="flex justify-center space-x-6 bg-blue-500 py-1">
            <a href="/" className="border-1 p-1.5 rounded-full hover:bg-gray-300 border-black">Home</a>
            <a href="/" className="border-1 p-1.5 rounded-full hover:bg-gray-300 border-black">About</a>
        </nav>
    );
}
export default Navbar;