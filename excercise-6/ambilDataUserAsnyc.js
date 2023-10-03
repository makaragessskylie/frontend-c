// 3. Async Await
export async function ambilDataUserAsync() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Propagates the error to the caller
    }
  }
