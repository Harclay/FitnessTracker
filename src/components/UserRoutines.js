import React, { useEffect, useState } from "react";
import { getUserRoutines, deleteRoutine, deleteRoutineActivity } from "../ajax-requests/Api";
import EditRoutines from "./EditRoutines";
import { useNavigate } from "react-router-dom";
import AddActivityForm from "./AddActivityForm";
import EditActivityForm from "./EditActivityForm";


function UserRoutines({ token, username, reloadRoutines, activities }) {
  const [routines, setRoutines] = useState([]);
  const [initialName, setInitialName] = useState("");
  const [initialGoal, setInitialGoal] = useState("");
  const [routineId, setRoutineId] = useState("");
  const [activityId, setActivityId] = useState("");
  const [routineActivityId, setRoutineActivityId] = useState("")
  

  const nav = useNavigate("");

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
    nav("/myroutines")
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
    try {
      await deleteRoutine(token, routineId);
      console.log("Delete routine with ID:", routineId);
      await fetchUserRoutines(); 
      nav("/myroutines");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectRoutine = async (routineId) => {
    const routine = routines.find((routine) => routine.id === routineId);
    if (routine) {
      setRoutineId(routineId);
    }
  };

  const handleEditActivity = (activityId, routineActivityId) => {
    setActivityId(activityId);
    setRoutineActivityId(routineActivityId)
    console.log(activityId, "activityId from button")
    console.log(routineActivityId, "routineActivityId from button")
  };

  const handleDeleteActivity = async (routineActivityId) => {
    try {
      await deleteRoutineActivity(routineActivityId, token);
      await fetchUserRoutines(); // Fetch user routines after deleting the activity
      console.log("Deleted activity with routineActivityId:", routineActivityId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Routines for {username}</h1>
      {initialName && initialGoal && (
        <EditRoutines
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
          <button onClick={() => handleDeleteRoutine(routine.id)}>
            Delete
          </button>
          <button onClick={() => handleSelectRoutine(routine.id)}>
            Select Routine
          </button>
          <h4>Activities:</h4>
          <ul>
            {routine.activities.map((activity) => (
              <li key={activity.id}>
                <div>
                  <h5>{activity.name}</h5>
                  <p>Description: {activity.description}</p>
                  {activity.duration && (
                    <p>Duration: {activity.duration} minutes</p>
                  )}
                  {activity.count && <p>Count: {activity.count}</p>}
                  {activityId === activity.id && (
                    <EditActivityForm
                      activity={activity}
                      fetchUserRoutines={fetchUserRoutines}
                      token={token}
                      username={username}
                      routineActivityId={routineActivityId}
                    />
                  )}
                  <button onClick={() => handleEditActivity(activity.id, activity.routineActivityId)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteActivity(activity.routineActivityId)}>
            Delete
          </button>
                </div>
              </li>
            ))}
          </ul>
          <AddActivityForm
            activities={activities}
            routineId={routineId}
            fetchUserRoutines={fetchUserRoutines}
            token={token}
            username={username}
          />
        </div>
      ))}
    </div>
  );
}

export default UserRoutines;
