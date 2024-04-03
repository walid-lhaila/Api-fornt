import React from 'react';
import {Link} from "react-router-dom";

const AllAnnounces = () => {
    return (
        <div className="mt-16 px-10">
            <div className="flex justify-center">
                <h1 className="text-black font-bold text-3xl font-serif underline">All Announcements</h1>
            </div>

            <div className="flex flex-wrap gap-5 w-[80%] mx-auto mt-14">

                <div className=" w-[470px] max-w-2xl px-8 py-4 bg-white rounded-md shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600 dark:text-gray-600">Mar 10, 2019</span>
                        <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                           abIndex="0" role="button">Design</p>
                    </div>

                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-700   hover:underline" tabIndex="0"
                           role="link">Accessibility tools for designers and developers</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-700">Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto
                            eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione
                            libero!</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <button className="text-white bg-black px-10 py-1 rounded hover:bg-gray-800 duration-300">Apply</button>

                        <div className="flex items-center">
                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                 src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                 alt="avatar"/>
                            <p className="font-bold text-gray-700 cursor-pointer" tabIndex="0" role="link">Khatab
                                wedaa</p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default AllAnnounces;