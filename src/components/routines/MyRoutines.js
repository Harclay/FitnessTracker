import React, { useState } from "react";
import { makeRoutine } from "../../ajax-requests/Api";
import UserRoutines from "./UserRoutines";

function MyRoutines({ token, signedIn, username, activities }) {
  const [newRoutineName, setNewRoutineName] = useState("");
  const [newRoutineGoal, setNewRoutineGoal] = useState("");
  const [reloadRoutines, setReloadRoutines] = useState(false);

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

      setReloadRoutines(true);
    } catch (error) {
      console.error("Error creating routine", error);
    }
  };

  const handleReloadRoutines = () => {
    setReloadRoutines(false);
  };

  return (
    <>
      <h1 className="pagetitle">My Routines</h1>
      {signedIn ? (
        <>
          <div className="myroutines">
            <div className="createroutine">
              <h2>Create Routine</h2>
              <form
                onSubmit={handleCreateRoutine}
                className="createroutineform"
              >
                <input
                  placeholder="Routine Name"
                  type="text"
                  className="crf"
                  value={newRoutineName}
                  onChange={(event) => setNewRoutineName(event.target.value)}
                />
                <input
                  placeholder="Routine Goal"
                  type="text"
                  className="crf"
                  value={newRoutineGoal}
                  onChange={(event) => setNewRoutineGoal(event.target.value)}
                />
                <button type="submit" className="crf">
                  Create
                </button>
              </form>
            </div>
            <UserRoutines
              token={token}
              username={username}
              reloadRoutines={reloadRoutines}
              handleReloadRoutines={handleReloadRoutines}
              activities={activities}
            />
          </div>
        </>
      ) : (
        <h2>Login or Sign Up</h2>
      )}
    </>
  );
}

export default MyRoutines;
