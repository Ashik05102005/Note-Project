import { IoMdSearch } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";
export default function NavBar({openForm}){
    const handleAddForm=(e)=>{
        openForm();
        e.preventDefault();
    }
    return (
        <div className="flex justify-between p-4 border h-20">
            <div className="w-1/2 border flex justify-center align-center" >
                <input type="search" name="search" placeholder="search..."className=" w-3/4 p-4" ></input>
                <button className="w-1/4"><IoMdSearch /></button>
            </div>
            <div className="w-1/3  flex justify-center gap-2">
                <button className="h-12 w-12 border text-2xl flex items-center justify-center rounded-full"><GoMoon /></button>
                <button className="h-12 w-12 border text-2xl flex items-center justify-center rounded-full" onClick={handleAddForm}><IoAddCircle /></button>
            </div>
                
        </div>
    )
}