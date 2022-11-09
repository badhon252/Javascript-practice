function flow(param) {
  for (let i = 0; i <= param; i++) {
    if (i % 2 === 0) {
      document.write(i + " is even");
    } else {
      document.write(i + " is odd" + "<br>");
    }
  }
}

flow(10);
