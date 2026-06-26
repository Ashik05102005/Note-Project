import React from "react";
import logo from '../assets/image.png'
import { FaNoteSticky } from "react-icons/fa6";
import { VscPinned } from "react-icons/vsc";
import { BiArchiveIn } from "react-icons/bi";
import { FaTags } from "react-icons/fa";



export default function SideBar({setView,
                                 view,
                                 darkMode }){
    return (
            <div
            className={`min-h-screen
                        w-20 sm:w-64
                        border-r
                        ${
                            darkMode
                            ? "bg-gray-900 border-gray-800"
                            : "bg-white border-gray-200"
                        }`}>
                <div className="flex items-center font-bold h-20  pr-2">
                    <h1 className="w-20"><img src={logo}   className="w-15 h-10"></img></h1>
                    <h1 className="hidden sm:block text-2xl font-bold">Notes</h1>
                </div>
                <div className="flex
                                flex-col
                                items-center
                                gap-3
                                px-5
                                mt-5
                                border-b">
                    <button
                    onClick={() => setView("all")}
                    className={`flex  items-center gap-3 w-full justify-center py-3 rounded-xl transition-all duration-200 ${
                        view === "all"
                        ? "bg-indigo-100 text-indigo-600"
                        : "hover:bg-gray-100"
                    } hover:translate-x-1`}
                    >
                            <p><FaNoteSticky className="text-xl"></FaNoteSticky ></p><p className="hidden sm:block ">All Notes</p>
                    </button>
                    <button
                        onClick={() => setView("pinned")}
                        className={`flex items-center gap-3 w-full justify-center py-3 rounded-xl transition-all duration-200 ${
                            view === "pinned"
                            ? "bg-indigo-100 text-indigo-600"
                            : "hover:bg-gray-100"
                        } hover:translate-x-1`}
                        >
                        <p><VscPinned className="text-xl"></VscPinned></p><p className="hidden sm:block ">Pinned Notes</p>
                    </button>
                     <button
                        onClick={() => setView("archive")}
                        className={`flex items-center gap-3 justify-center w-full py-3 rounded-xl transition-all duration-200 ${
                            view === "archive"
                            ? "bg-indigo-100 text-indigo-600"
                            : "hover:bg-gray-100"
                        } hover:translate-x-1`}
                        >
                        <p><BiArchiveIn className="text-xl"></BiArchiveIn></p><p className="hidden sm:block">Acheived Notes</p>
                    </button>
                </div>
                
                <div className="my-3  py-3">
                    <div className="flex items-center gap-3 px-5 mb-3 mt-4">
                        <FaTags className="text-lg text-gray-500" />
                        <h2 className="hidden sm:block font-semibold text-gray-500 uppercase text-sm">
                            Tags
                        </h2>
                    </div>
                    <button className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-2
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition-all
                                    duration-200
                                    w-full
                                    ">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span className="hidden sm:block">Study</span>
                    </button>
                    <button className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-2
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition-all
                                    duration-200
                                    w-full
                                    ">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="hidden sm:block">work</span>
                    </button>
                    <button className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-2
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition-all
                                    duration-200
                                    w-full
                                    ">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span className="hidden sm:block">idea</span>
                    </button>
                    <button className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-2
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition-all
                                    duration-200
                                    w-full
                                    ">
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        <span className="hidden sm:block">Personal</span>
                    </button>
                    <button className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-2
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition-all
                                    duration-200
                                    w-full
                                    ">
                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                        <span className="hidden sm:block">Others</span>
                    </button>
                    </div>
                </div>
                
            
    )
}