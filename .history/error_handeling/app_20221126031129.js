/* const api = true;

if (api) {
  //   throw new Error("API is running");
}

try {
  if (api) {
    throw new Error("API is running");
  }
} catch (error) {
  //   throw new Error(error);
  console.log("error");
} finally {
  console.log("Try catch handler checked!");
}
 */

const loadData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
