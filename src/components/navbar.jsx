import { IoMdSearch } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import {
  MdDarkMode,
  MdLightMode
} from "react-icons/md";
export default function NavBar({openForm,
                                darkMode,
                                setDarkMode,
                                search,
                                setSearch}){
    const handleAddForm=(e)=>{
        openForm();
        e.preventDefault();
    }
    return (

        <div className="flex items-center justify-between gap-6 p-5">
            <div className={`flex items-center
            w-full md:w-[55%]
            rounded-full
            px-3
            border
            
            ${darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-300"
            }`}>
                <input type="text" 
                        name="search" 
                        placeholder="search notes .."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className={`w-full bg-transparent outline-none px-5 ${
                                    darkMode
                                        ? "text-white placeholder:text-gray-400"
                                        : "text-black placeholder:text-gray-500"
                                    }`}>
                            
                        </input>
                <button className="px-4 text-xl h-10 "><IoMdSearch className="text-xl"/></button>
            </div>
            <div className="w-1/2  flex justify-center gap-2">
                <button className="h-12 w-12  text-2xl flex items-center justify-center rounded-full hover:scale-110 transition-all duration-200" onClick={() => setDarkMode(!darkMode)}>
                    {!darkMode ? <MdDarkMode /> :<MdLightMode />}
                    </button>
                    <button className="size-11
                                        rounded-xl
                                        bg-indigo-600
                                        text-white
                                        text-3xl
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-indigo-700
                                        transition-all
                                        duration-200
                                        shadow-md"
                            onClick={handleAddForm}> 
                                    <IoMdAdd /> 
                    </button>               
            </div>        
        </div>
    )
}