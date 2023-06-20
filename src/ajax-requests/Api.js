const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

///////////////////////////////////////////// USER API CALLS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const fetchUser = async (user) => {
  const { username, password } = user;
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();

    console.log(result, "hello from fetchUser");

    return result;
  } catch (error) {
    console.error(error, "ERROR IN FETCHUSER");
  }
};

export const loginUser = async (user) => {
  const { username, password } = user;
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    console.log(result, "hello from loginUser");
    return result;
  } catch (error) {
    console.error(error, "ERROR IN loginUser");
  }
};

export const myData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error, "ERROR IN myData");
  }
};

export const getUserRoutines = async (token, username) => {

  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}


////////////////////////////////////////////////////////// ACTIVITIES API CALLS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const fetchActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createActivity = async (activity, token) => {
  const { activityName, activityDesc } = activity;

  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: activityName,
        description: activityDesc,
      }),
    });

    const result = await response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

//// routines ///
export const fetchRoutines = async () => {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
  }

  export const makeRoutine = async (newRoutine, token) => {
    try {
      const response = await fetch(`${BASE_URL}/routines`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: newRoutine.name,
          goal: newRoutine.goal,
          isPublic: newRoutine.isPublic
        })
        
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

//   export const patchRoutine = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/routines/6`, {
//         method: "PATCH",
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${TOKEN_STRING_HERE}`
//         },
//         body: JSON.stringify({
//           name: 'Long Cardio Day',
//           goal: 'To get your heart pumping!'
//         })
//       });
//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//  export const deleteRoutine = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/routines/6`, {
//         method: "DELETE",
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${TOKEN_STRING_HERE}`
//         },
//       });
//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (err) {
//       console.error(err);
//     }
// }