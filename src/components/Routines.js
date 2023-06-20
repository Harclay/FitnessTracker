import React from "react";
import { useState, useEffect } from "react";
import { fetchRoutines } from "../ajax-requests/Api";

function Routines() {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        const getRoutines = async () => {
            try {
                const result = await fetchRoutines();
                setRoutines(result)
            }catch (error){
                console.error('error fetching routines', error)
            }
        }
        getRoutines();
    }, [])

    return (
      <div>
        <h1>Routines</h1>
        <ul>
          {routines.map((routine) => (
            <li key={routine.id}>
              <div>
                <h3>{routine.name}</h3>
                <p>Goal: {routine.goal}</p>
                <p>Creator: {routine.creatorName}</p>
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
    
      
}

export default Routines