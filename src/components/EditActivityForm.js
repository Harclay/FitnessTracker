import React, { useState } from "react";
import { updateRoutineActivites } from "../ajax-requests/Api";


function EditActivityForm({ activity, fetchUserRoutines, token, username, routineActivityId }) {
  const [duration, setDuration] = useState(activity.duration || "");
  const [count, setCount] = useState(activity.count || "")
  

  const handleUpdateActivity = async () => {
    try {
      await updateRoutineActivites(token, routineActivityId, count, duration);

      await fetchUserRoutines(token, username);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h5>{activity.name}</h5>
      <p>Description: {activity.description}</p>
      <label>
        Duration:
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <label>
        Count:
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </label>
      <button onClick={handleUpdateActivity}>Update</button>
    </div>
  );
}

export default EditActivityForm;
