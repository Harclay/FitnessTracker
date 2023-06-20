import React from "react";
import { useState, useEffect } from "react";
import { myData } from "../ajax-requests";


function Activities() {
    const [activities, setActivites] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await myData();
                setActivites(result)
            }catch (error){
                console.error('error fetching activites', error)
            }
        }
        fetchData();
    }, [])

    return (
      <div>
        <h1>Activities</h1>
        <ul>
            {activities.map((activity) => (
                <li key={activity.id}>
                    <div>
                        <h3>{activity.name}</h3>
                        <p>{activity.description}</p>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    );
  }

  export default Activities;