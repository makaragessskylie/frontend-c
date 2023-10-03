// 2. Fetch
export default function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        return data.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error; 
      });
  }
