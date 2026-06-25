import React,{useState } from "react";
import { useEffect } from "react";
export default function Form({showForm,
    closeForm,
    setNotes,
    notes,
    editingNote,
    error,
    setError,
    darkMode
}){

    const [input,setInput]=useState({
        id:'',
        title:'',
        content:'',
        tags:'',
        time:'',
        color:'',
        pinned:false,
        archive:false
    })
    useEffect(()=>{
        if(editingNote){
            setInput(editingNote)
        }
        else {
            setInput({
            id: "",
            title: "",
            content: "",
            tags: "",
            time: "",
            color: "",
            pinned: false,
            archive: false,
            });
        }
    },[editingNote]);
        
    if(!showForm) return null;
    

    const changeHandler=(event)=>{
        const { name, value } = event.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
    }));
    
    };

    const submitHandler=(event)=>{
        const validationError={}
            event.preventDefault();
            if(!input.title.trim()){
                validationError.title="title is required"
            }
            if(input.title.length>100){
                validationError.title="character exceeded"

            }
            if(!input.content.trim()){
                validationError.content="content is required"
            }
            if(!input.color){
                validationError.color="select a color"
            }
            if(!input.tags){
                validationError.tags="select a tag"
            }
            if(Object.keys(validationError).length > 0){
                setError(validationError);
                return;
            }
            console.log({error})
            setError({});
            if(editingNote){
                const updateNote=notes.map((note)=>note.id===input.id ? input :note);
                setNotes(updateNote);
                localStorage.setItem("notes",JSON.stringify(updateNote));
            }
            else{
                const newNote={
                ...input,
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                };
            
                //to add new notes 
                const updateNotes=[...notes,newNote];

                setNotes(updateNotes);

                //add the updated array to local storage
                localStorage.setItem(
                    "notes",
                    JSON.stringify(updateNotes)
                );
                setInput({
                    id: "",
                    title: "",
                    content: "",
                    tags: "",
                    time: "",
                    color: "",
                    pinned: false,
                    archive: false,
                    });
            }


                
                closeForm();
  };
    
    return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <form
        onSubmit={submitHandler}
        className={darkMode ? "bg-gray-900 p-6 rounded-lg shadow-lg w-[500px] flex flex-col gap-4"
                            :"bg-white p-6 rounded-lg shadow-lg w-[500px] flex flex-col gap-4"
        }>
        <h2 className="text-2xl font-bold text-center">
          {editingNote ? "Edit Note" : "Add Note"}
        </h2>

        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={changeHandler}
            className="w-full border rounded p-2"
            placeholder="Enter title"
          />
          {error?.title && <p className="text-red-600">{error.title}</p>}
        </div>

        <div>
          <label className="block mb-1"  maxlength="500">Content</label>
          <textarea
            name="content"
            value={input.content}
            onChange={changeHandler}
            className="w-full border rounded p-2 h-28"
            placeholder="Enter content"
          />
          {error?.content && <p className="text-red-600">{error.content}</p>}
        </div>

        <div>
          <label className="block mb-1">Tags</label>
          <select
            name="tags"
            value={input.tags}
            onChange={changeHandler}
            className="w-full border rounded p-2"
            >
            <option value="">Select Tag</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Ideas">Ideas</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
          {error?.tags && <p className="text-red-600">{error.tags}</p>}
        </div>

        <div>
          <label className="block mb-2">Color</label>

          <div className="flex justify-around">
            <button
              type="button"
              className="bg-red-200 h-10 w-10 rounded-full hover:border transition"
              onClick={() =>
                setInput({ ...input, color: "bg-red-50" })
            }
            />

            <button
              type="button"
              className="bg-green-200 h-10 w-10 rounded-full hover:border transition"
              onClick={() =>
                setInput({ ...input, color: "bg-green-50" })
            }
            />

            <button
              type="button"
              className="bg-yellow-200 h-10 w-10 rounded-full hover:border transition"
              onClick={() =>
                setInput({ ...input, color: "bg-yellow-50" })
            }
            />

            <button
              type="button"
              className="bg-blue-200 h-10 w-10 rounded-full hover:border transition"
              onClick={() =>
                setInput({ ...input, color: "bg-blue-50" })
            }
            />
          </div>
            {error?.color && <h1 className="text-red-600">{error.color}</h1>}
        </div>

        <div className="flex justify-end gap-3 mt-3">
          <button
            type="button"
            onClick={closeForm}
            className="px-4 py-2 border rounded "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}