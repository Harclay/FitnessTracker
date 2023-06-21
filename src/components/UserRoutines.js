import React, { useEffect, useState } from "react";
import { getUserRoutines, deleteRoutine } from "../ajax-requests/Api";
import EditRoutines from "./EditRoutines";
import { useNavigate } from "react-router-dom";


function UserRoutines({ token, username, reloadRoutines }) {
  const [routines, setRoutines] = useState([]);
  const [initialName, setInitialName] = useState("");
  const [initialGoal, setInitialGoal] = useState("");
  const [routineId, setRoutineId] = useState("");
  const nav = useNavigate("")


  const fetchUserRoutines = async () => {
    try {
      const result = await getUserRoutines(token, username);
      if (Array.isArray(result)) {
        setRoutines(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserRoutines();
  }, [token, username, reloadRoutines]);

  const handleEditRoutine = async (routineId) => {
    const routine = routines.find((routine) => routine.id === routineId);
    if (routine) {
      setInitialName(routine.name);
      setInitialGoal(routine.goal);
      setRoutineId(routine.id);
      console.log("Edit routine with ID:", routineId);
    }
  };

  const handleDeleteRoutine = async (routineId) => {
    const routine = routines.find((routine) => routine.id === routineId);
    if (routine) {
      await deleteRoutine(token, routineId)
      console.log("Delete routine with ID:", routineId);
      fetchUserRoutines(token, username)
      nav("/myroutines")
    }
  }

  return (
    <div>
      <h1>Routines for {username}</h1>
      {initialName && initialGoal && (
        <EditRoutines
          initialName={initialName}
          initialGoal={initialGoal}
          routineId={routineId}
          token={token}
          fetchUserRoutines={fetchUserRoutines}
          username={username}
        />
      )}
      {routines.map((routine) => (
        <div key={routine.id}>
          <h3>{routine.name}</h3>
          <p>Goal: {routine.goal}</p>
          <p>Creator: {routine.creatorName}</p>
          <button onClick={() => handleEditRoutine(routine.id)}>Edit</button>
          <button onClick={() => handleDeleteRoutine(routine.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserRoutines;
