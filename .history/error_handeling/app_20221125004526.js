const api = true;

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
  console.log("finally");
}
