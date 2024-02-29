import React from "react";

export default function Footer() {
    return (
        <>
            <div className="pb-20 relative block bg-gray-800">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="text-gray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4 lg:pt-15 lg:pb-64"></div>
            </div>

            <div className="relative block py-24 lg:pt-0 bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        Subscribe to our <br /> Newsletter!
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                                        Subscribe our newsletter to receive the last news and exclusive offers every
                                        week.
                                    </p>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-gray-200 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg className="absolute bottom-0 overflow-hidden" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-medium">Contact us.</h4>
                            <h4 className="text-3xl font-medium">Let's Talk.</h4>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button
                                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </button>
                                <button
                                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </button>
                                <button
                                    className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                                        Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                Github
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                                        Where we are
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                <i className="fa-solid fa-map-pin"></i> Street 123
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                Belgrade, Serbia
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                                        Our contact info
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                <i className="fa-regular fa-envelope"></i> email@digitalb.com
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                <i className="fa-solid fa-phone"></i> 123456789
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-500 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
