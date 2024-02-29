import React from "react";

export default function Hero() {
    return (
        <>
            <div className="relative pt-36 pb-44 flex content-center items-center justify-center min-h-screen-75">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                >
                    <span className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-bold text-5xl">
                                    We make digital <br /> business simple
                                </h1>
                                <p className="mt-4 text-lg text-gray-200">
                                    In everything we do, we simply want to inspire people. Through our ideas, brands and
                                    inspire customers. We create great business for visitors.
                                </p>
                                <button
                                    className="mt-10 bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Explore now <i className="fa-solid fa-arrow-right"></i>
                                </button>
                                <button
                                    className="mt-10 bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Watch video <i className="fa-solid fa-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-24">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <i className="fa-solid fa-award"></i>
                                </div>
                                <h6 className="text-xl font-medium">Customer</h6>
                                <p className="mt-2 mb-4 text-gray-500">Lorem Ipsum has been the industry's.</p>
                                <button
                                    className="bg-gray-600 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    View details <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                    <i className="fa-solid fa-retweet"></i>
                                </div>
                                <h6 className="text-xl font-medium">Content</h6>
                                <p className="mt-2 mb-4 text-gray-500">Lorem Ipsum has been the industry's.</p>
                                <button
                                    className="bg-gray-600 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Learn more <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                    <i className="fa-solid fa-fingerprint"></i>
                                </div>
                                <h6 className="text-xl font-medium">Touchpoints</h6>
                                <p className="mt-2 mb-4 text-gray-500">Lorem Ipsum has been the industry's.</p>
                                <button
                                    className="bg-gray-600 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    View details <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
