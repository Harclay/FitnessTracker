import React, { useState } from "react";
import { makeRoutine, getUserRoutines } from "../ajax-requests/Api";
import UserRoutines from "./UserRoutines";


function MyRoutines({ token, signedIn }) {
  const [newRoutineName, setNewRoutineName] = useState("");
  const [newRoutineGoal, setNewRoutineGoal] = useState("");

  const handleCreateRoutine = async (event) => {
    event.preventDefault();
    try {
      const newRoutine = {
        name: newRoutineName,
        goal: newRoutineGoal,
        isPublic: true,
      };
      const result = await makeRoutine(newRoutine, token);
      console.log(result);
    } catch (error) {
      console.error("Error creating routine", error);
    }
  };

  

  return (
    <>
      <h1>My Routines</h1>
      {signedIn ? (
        <>
          <h2>Create Routine</h2>
          <form onSubmit={handleCreateRoutine}>
            <input
              placeholder="Routine Name"
              type="text"
              value={newRoutineName}
              onChange={(event) => setNewRoutineName(event.target.value)}
            />
            <input
              placeholder="Routine Goal"
              type="text"
              value={newRoutineGoal}
              onChange={(event) => setNewRoutineGoal(event.target.value)}
            />
            <button type="submit">Create</button>
          </form>
          
        </>
      ) : (
        <h2>Login or Sign Up</h2>
      )}
    </>
  );
}

export default MyRoutines;
