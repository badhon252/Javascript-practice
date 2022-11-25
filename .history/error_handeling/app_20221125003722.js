const api = 0;
try {
  if (api) {
    console.log("API is running");
  }
} catch {
  throw new Error(console.log("API is not running"));
}
