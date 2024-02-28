import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            href="/"
                            className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        >
                            Digital B
                        </Link>
                        <button
                            type="button"
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? "block rounded shadow-lg" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <Link
                                    href="/"
                                    className="lg:text-white text-gray-700 px-3 py-4 lg:hover:text-gray-200 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    href="/"
                                    className="lg:text-white text-gray-700 px-3 py-4 lg:hover:text-gray-200 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    href="/"
                                    className="lg:text-white text-gray-700 px-3 py-4 lg:hover:text-gray-200 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    href="/"
                                    className="lg:text-white text-gray-700 px-3 py-4 lg:hover:text-gray-200 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <button
                                    type="button"
                                    className="bg-white text-gray-700 text-xs font-bold uppercase px-4 py-2 rounded active:bg-gray-50 shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                >
                                    <i className="fa-solid fa-phone"></i> 123456789
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
