import React from "react";
import logo from '../assets/image.png'
import { FaNoteSticky } from "react-icons/fa6";
import { VscPinned } from "react-icons/vsc";
import { BiArchiveIn } from "react-icons/bi";
import { FaTags } from "react-icons/fa";



export default function SideBar({setView,view}){
    return (
            <div className="min-h-screen bg-amber-50 w-1/4  ">
                <div className="flex items-center font-bold h-20 border pr-2">
                    <h1 className="w-20"><img src={logo}></img></h1>
                    <h1>Notes</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <button onClick={() => setView("all")}
                            className={`p-2 rounded btn-sidebar ${
                                view === "all"
                                ? "bg-yellow-200 "
                                : "hover:bg-yellow-100"
                            }`} >
                            <p><FaNoteSticky className="text-2xl"></FaNoteSticky></p><p className="hidden sm:block ">All Notes</p>
                    </button>
                    <button onClick={() => setView("pinned")}
                            className={`p-2 rounded btn-sidebar ${
                                view === "pinned"
                                ? "bg-yellow-200 "
                                : "hover:bg-yellow-100"
                            }`} >
                        <p><VscPinned className="text-2xl"></VscPinned></p><p className="hidden sm:block ">Pinned Notes</p>
                    </button>
                    <button onClick={() => setView("archive")}
                            className={`p-2 rounded btn-sidebar ${
                                view === "archive"
                                ? "bg-yellow-200 "
                                : "hover:bg-yellow-100"
                            }`} >
                        <p><BiArchiveIn className="text-2xl"></BiArchiveIn></p><p className="hidden sm:block">Acheived Notes</p>
                    </button>
                </div>
                
                <div className="my-3 border-t py-3">
                    <div className="flex items-center px-5 gap-3 ">
                        <FaTags className="text-xl sm:text-center"/>
                        <h2 className=" font-bold text-xl hidden sm:block">Tags</h2>
                    </div>
                    <div className="py-2">
                        <div className="btn-sidebar px-5">
                            <button>study</button>
                        </div>
                        <div className="btn-sidebar px-5">
                            <button>work</button>
                        </div>
                        <div className="btn-sidebar px-5">
                            <button>Ideas</button>
                        </div>
                        <div className="btn-sidebar px-5">
                            <button>Personal</button>
                        </div>
                        <div className="btn-sidebar px-5">
                            <button>Others</button>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}