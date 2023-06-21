import React, { useState } from "react";
import { patchRoutine } from "../ajax-requests/Api";
import { useNavigate } from "react-router-dom";

function EditRoutines({ initialName, initialGoal, routineId, token, fetchUserRoutines, username }) {
  const [name, setName] = useState(initialName);
  const [goal, setGoal] = useState(initialGoal);
    const nav = useNavigate("")
    
  const handleEditRoutine = async (event) => {
    event.preventDefault();

    try {
        await patchRoutine(routineId, name, goal, token)
        setName("")
        setGoal("")
        fetchUserRoutines(token, username)
        nav("/myroutines")
    } catch (error) {
        console.error("error updating routines", error)
    }
  };


  return (
    <div>
      <h2>Edit Routine</h2>
      <form onSubmit={handleEditRoutine}>
        <input
          placeholder="Routine Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Routine Goal"
          type="text"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditRoutines;
