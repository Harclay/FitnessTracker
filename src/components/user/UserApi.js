// const COHORT_NAME = "2301-FTB-ET-WEB-PT";

const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

///////////////////////////////////////////// USER API CALLS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const fetchUser = async (user) => {

  const {username, password} = user
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
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

  const {username, password} = user
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    });

    const result = await response.json();
console.log(result, "hello from loginUser")
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
//////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\