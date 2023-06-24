import React, { useState } from "react";
import { attachActivity } from "../ajax-requests/Api";
import { useNavigate } from "react-router-dom";

function AddActivityForm({
  activities,
  routineId,
  fetchUserRoutines,
  token,
  username,
}) {
  const [activityId, setActivityId] = useState("");
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const nav = useNavigate("");

  const handleActivityChange = (event) => {
    setActivityId(event.target.value);
    console.log(event.target.value, "selected activity id");
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    attachActivity(routineId, activityId, count, duration);
    setActivityId("");
    setCount(0);
    setDuration(0);
    fetchUserRoutines(token, username);
    nav("/myroutines");
  };

  return (
    <div>
      <h3>Add Activity</h3>
      <form onSubmit={handleSubmit}>
        <select value={activityId} onChange={handleActivityChange}>
          <option value="">Select an activity</option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={count}
          onChange={handleCountChange}
          placeholder="Count"
        />
        <input
          type="number"
          value={duration}
          onChange={handleDurationChange}
          placeholder="Duration"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddActivityForm;
