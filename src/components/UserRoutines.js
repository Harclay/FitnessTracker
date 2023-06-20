import React, { useEffect, useState } from "react";
import { getUserRoutines } from "../ajax-requests/Api";

function UserRoutines({ token, username }) {
  const [routines, setRoutines] = useState([]);

    async function fetchUserRoutines () {
        try{
           const result = await getUserRoutines(token)
           console.log(result, "from getUsersRoutines")
           return result
        } catch(err) {
            console.error(err)
        }
    }

    fetchUserRoutines();

//   const fetchRoutines = async () => {
//     try {
//       const result = await getUserRoutines(token);
//       setRoutines(result);
//       return result
//     } catch (error) {
//       console.error(error);
//     }}

//     useEffect(() => {
//         fetchRoutines()
//     }, [])

//   return (
//     <div>
//       <h1>Routines for {username}</h1>
//       {routines.map((routine) => (
//         <div key={routine.id}>
//           <h3>{routine.name}</h3>
//           <p>Goal: {routine.goal}</p>
//           <p>Creator: {routine.creatorName}</p>
//           <h4>Activities:</h4>
//           <ul>
//             {routine.activities.map((activity) => (
//               <li key={activity.id}>
//                 <div>
//                   <h5>{activity.name}</h5>
//                   <p>Description: {activity.description}</p>
//                   {activity.duration && (
//                     <p>Duration: {activity.duration} minutes</p>
//                   )}
//                   {activity.count && <p>Count: {activity.count}</p>}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
}

export default UserRoutines;
