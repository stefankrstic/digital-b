import React, { useState } from "react";

export default function Landing() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
            <div className="container mx-auto px-4 pb-20">
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fa-solid fa-user-group text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-medium leading-normal text-gray-600">
                            Impressing our <br />
                            <span className="font-bold">customers</span>
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                                (openTab === 1 ? "text-white bg-gray-600" : "text-gray-600 bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            href="#link1"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                                (openTab === 2 ? "text-white bg-gray-600" : "text-gray-600 bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            href="#link2"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="tab-content tab-space">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the 1500s, when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen book.
                                                    <br />
                                                    <br /> It has survived not only five centuries, but also the leap
                                                    into electronic typesetting, remaining essentially unchanged.
                                                </p>
                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <p>
                                                    It was popularised in the 1960s with the release of Letraset sheets
                                                    containing Lorem Ipsum passages, and more recently with desktop
                                                    publishing software like Aldus PageMaker.
                                                    <br />
                                                    <br /> Lorem Ipsum has been the industry's standard dummy text ever
                                                    since the 1500s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                className="w-full align-middle rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
