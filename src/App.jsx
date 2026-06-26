import React, { useState } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/SideBar";
import DataView from "./components/DataView";
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [view, setView] = useState("all");
  const [error, setError] = useState({});
  const [darkMode,setDarkMode]= useState(false);
  const [search,setSearch] = useState("");

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const openForm = () => {
    setEditingNote(null);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className={darkMode 
                  ? "bg-gray-900 text-white min-h-screen"
                  : "bg-white text-black min-h-screen"}>
      <div className="flex w-full ">
        <SideBar
          setView={setView}
          view={view}
          darkMode={darkMode}
        />

        <div className="w-3/4">
          <NavBar
            className="p-4 border h-20"
            openForm={openForm}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            search={search}
            setSearch={setSearch}
          />

          <div className="flex flex-wrap m-1 min-h-screen text-black">
            <DataView
              notes={notes}          // Full notes array
              view={view}            // Current view
              setNotes={setNotes}
              setShowForm={setShowForm}
              setEditingNote={setEditingNote}
              search={search}
              setSearch={setSearch}
            />
          </div>

          <Form
            showForm={showForm}
            closeForm={closeForm}
            setNotes={setNotes}
            notes={notes}
            editingNote={editingNote}
            error={error}
            setError={setError}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
