import React from "react";
import Link from "next/link";
import moment from "moment";

export default function Cards() {
    return (
        <>
            <div className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-medium">News and trends</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="border-2">
                                <Link href="https://www.youtube.com/" target="_blank">
                                    <div className="px-6">
                                        <img
                                            src="/YouTube-unsplash.jpg"
                                            className="shadow-lg mx-auto max-w-330-px mt-6"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-medium">How Web app works</h5>
                                            <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                                                YouTube
                                            </p>
                                            <div className="mt-6 mb-6">{moment().format("ll")}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="border-2">
                                <Link href="https://www.instagram.com/" target="_blank">
                                    <div className="px-6">
                                        <img
                                            src="/Instagram-unsplash.jpg"
                                            className="shadow-lg mx-auto max-w-330-px mt-6"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-medium">How Web app works</h5>
                                            <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                                                Instagram
                                            </p>
                                            <div className="mt-6 mb-6">{moment().format("ll")}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="border-2">
                                <Link href="https://twitter.com/?lang=en" target="_blank">
                                    <div className="px-6">
                                        <img
                                            src="/Twitter-unsplash.jpg"
                                            className="shadow-lg  mx-auto max-w-330-px mt-6"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-medium">How Web app works</h5>
                                            <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                                                Twitter
                                            </p>
                                            <div className="mt-6 mb-6">{moment().format("ll")}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div className="border-2">
                                <Link href="https://www.facebook.com/" target="_blank">
                                    <div className="px-6">
                                        <img
                                            src="/Facebook-unsplash.jpg"
                                            className="shadow-lg  mx-auto max-w-330-px mt-6"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-medium">How Web app works</h5>
                                            <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                                                Facebook
                                            </p>
                                            <div className="mt-6 mb-6">{moment().format("ll")}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
