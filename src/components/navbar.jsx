import { IoMdSearch } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import { IoAddCircle } from "react-icons/io5";
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
        <div className="flex justify-between p-4  h-20 ">
            <div className={!darkMode ? "w-1/2 border flex justify-center align-center bg-yellow-50 rounded-full"
                                     : "w-1/2 border flex justify-center align-center bg-gray-900 rounded-full"
            } >
                <input type="text" 
                        name="search" 
                        placeholder="search notes .."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className=" w-3/4 p-4 rounded-full" ></input>
                <button className="w-1/4 flex items-center justify-center"><IoMdSearch className="text-xl"/></button>
            </div>
            <div className="w-1/3  flex justify-center gap-2">
                <button className="h-12 w-12  text-2xl flex items-center justify-center rounded-full" onClick={() => setDarkMode(!darkMode)}>{!darkMode ? <MdDarkMode />
                                                                                                                                                        :<MdLightMode />}</button>
                <button className="h-12 w-12  text-2xl flex items-center justify-center rounded-full" onClick={handleAddForm}><IoAddCircle /></button>
            </div>
                
        </div>
    )
}