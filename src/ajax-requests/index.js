const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api/`


// Activities
 export const myData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      console.log("result from ajax request", result);
      return result
    } catch (err) {
      console.error(err);
    }
  }