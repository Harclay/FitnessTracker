import React, { useEffect, useState } from "react";
import { getUserRoutines } from "../ajax-requests/Api";
import { useParams } from "react-router-dom";

function UserRoutines({ token }) {
  const { username } = useParams();
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function fetchUserRoutines() {
        try {
          const result = await getUserRoutines(token, username);
          if (Array.isArray(result)) {
            setRoutines(result);
          }
        } catch (err) {
          console.error(err);
        }
      }

    fetchUserRoutines();
  }, [token, username]);

  return (
    <div>
      <>
        <h1>Routines for {username}</h1>
        {routines.map((routine) => (
          <div key={routine.id}>
            <h3>{routine.name}</h3>
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
          </div>
        ))}
      </>
    </div>
  );}

export default UserRoutines;
