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
    <div className="min-h-screen w-full">
      <div className="flex w-full">
        <SideBar
          setView={setView}
          view={view}
        />

        <div className="w-3/4">
          <NavBar
            className="p-4 border h-20"
            openForm={openForm}
          />

          <div className="flex flex-wrap m-1 min-h-screen">
            <DataView
              notes={notes}          // Full notes array
              view={view}            // Current view
              setNotes={setNotes}
              setShowForm={setShowForm}
              setEditingNote={setEditingNote}
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;