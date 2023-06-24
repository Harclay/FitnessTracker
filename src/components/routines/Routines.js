import React from "react";
import { useState, useEffect } from "react";
import { fetchRoutines } from "../../ajax-requests/Api";

function Routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getRoutines = async () => {
      try {
        const result = await fetchRoutines();
        setRoutines(result);
      } catch (error) {
        console.error("error fetching routines", error);
      }
    };
    getRoutines();
  }, []);

  return (
    <div>
      <h1 className="pagetitle">Routines</h1>
      <div className="routines">
        {routines.map((routine) => (
          <div key={routine.id}>
            <div className="routine">
              <h3 className="routineTitle">{routine.name}</h3>
              <p>Goal: {routine.goal}</p>
              <p>Creator: {routine.creatorName}</p>
              <h4>Activities:</h4>
              <div>
                {routine.activities.map((activity) => (
                  <div key={activity.id}>
                    <div>
                      <h5>{activity.name}</h5>
                      <p>Description: {activity.description}</p>
                      {activity.duration && (
                        <p>Duration: {activity.duration} minutes</p>
                      )}
                      {activity.count && <p>Count: {activity.count}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routines;
