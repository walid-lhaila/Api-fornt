import React from 'react';

const MyVolunteers = () => {
    return (
        <div>
            <div className="flex justify-center mt-20">
                <h1 className="text-black font-bold text-3xl font-serif underline">My Volunteers</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-[80%] mx-auto mt-10">

                <div className="flex flex-col justify-center relative overflow-hidden py-1">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative group">
                            <div
                                className="absolute -inset-0 bg-gradient-to-r from-black  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div
                                className="relative px-7 py-6 bg-white w-[500px] rounded-lg leading-none flex items-top justify-start space-x-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5"
                                          d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                </svg>
                                <div className="space-y-4">
                                    <div className="flex gap-5">
                                        <p className="text-slate-800"><span className="font-bold">Organized By: </span>Lhaila Walid</p>
                                        <p className="text-slate-800"><span className="font-bold">Date: </span>14 March 20h30</p>
                                    </div>
                                    <p className="text-slate-800"><span className="font-bold">Announcement: </span>Event
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyVolunteers;