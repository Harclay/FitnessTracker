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
