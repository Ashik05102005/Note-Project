import React from "react";
import {
  MdDelete,
  MdEdit,
  MdArchive,
  MdPushPin
} from "react-icons/md";
export default function DataView({
    notes,
    view,
    setNotes,
    setShowForm,
    setEditingNote,
    }) {
      let filteredNotes = notes ;
      if(view=== "all"){
        filteredNotes = notes.filter((note) => !note.archive);
      }
      if(view=== "pinned"){
        filteredNotes = notes.filter((note) => note.pinned && !note.archive);
      }
      if(view=== "archive"){
        filteredNotes = notes.filter((note) => note.archive);
      }
      //delete
      const deleteNote=(id)=>{
        if(confirm("do you want to delete"))
          { 
        //filter the all data excluding the the data with id
            const updateNote=notes.filter((data)=>data.id!==id);
            setNotes(updateNote);

        localStorage.setItem(
          "notes",
          JSON.stringify(updateNote)
        );}
        else {
          console.log("not gone for delete")
        }
      }

      const archiveNote=(id)=>{
        const updatedNotes=notes.map((note)=>{
          if(note.id===id){
            return {
              ...note,
              archive: !note.archive
            };
          }
          return note;
        });
        setNotes(updatedNotes);
        localStorage.setItem(
          "notes",
          JSON.stringify(updatedNotes)
        )
      }
      //edit
      const editNote=(id)=>{
        //to find the specified obj to edit
        const nodeToEdit=notes.find(note=>note.id===id);
        setEditingNote(nodeToEdit);
        
        setShowForm(true);
      };
      //pin
      const pinNotes=(id)=>{
        const updateNote=notes.map((note)=>{
          return note.id===id 
          ? {
            ...note,
            pinned :!note.pinned
          } 
          : note
        })
        const sortedNotes = [...updateNote].sort(
      (a, b) => b.pinned - a.pinned
    );
        setNotes(sortedNotes);
        localStorage.setItem(
          "notes",
          JSON.stringify(updateNote)
        );
      }
      return (
        <div className="m-2 p-2  w-full h-full flex gap-10 flex-wrap">
          {
            filteredNotes.map((data,index)=>{
              return (
                
                <div
                  key={data.id}
                  className={`w-72 min-h-48 p-4 m-3 rounded-xl shadow-md border  hover:shadow-lg transition-all duration-200 ${data.color} `}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-lg font-bold break-words">
                      {data.title}
                    </h2>

                    <button onClick={()=>pinNotes(data.id)}>
                      <MdPushPin
                          className={`text-xl hover:scale-110 transition ${
                              data.pinned
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }`}
                          />
                    </button>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-sm mb-4 break-words">
                    {data.content}
                  </p>

                  {/* Tag */}
                  <span className='inline-block px-3 py-1 text-xs rounded-full bg-amber-50 text-black'>
                    {data.tags}
                  </span>

                  {/* Time */}
                  <p className="text-xs text-gray-400 mt-3">
                    {data.time}
                  </p>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 mt-4 border-t pt-3">
                    <button onClick={()=>editNote(data.id)}>
                      <MdEdit className="text-xl text-gray-500 hover:text-blue-500" />
                    </button>

                    <button onClick={()=>archiveNote(data.id)}>
                      <MdArchive className="text-xl text-gray-500 hover:text-green-500" />
                    </button>

                    <button onClick={()=>deleteNote(data.id)}>
                      <MdDelete className="text-xl text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              )
          })}

        </div>
      );
}
