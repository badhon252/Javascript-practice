//! I made this Closures for Better/Secure code!
//! In this @count function, I have use closures, callback, eventlistener, conditions and etc!
function count() {
  let count = 0;
  let res = document.getElementById("res");

  function increase() {
    document.getElementById("btn").addEventListener("click", function () {
      let result = !(count < 0) ? ++count : "Value can't be a negetive number";
      res.innerHTML = result;
      console.log(result);
      return result;
    });
  }
  increase();

  function decrease() {
    // let count = 0;
    document.getElementById("btn1").addEventListener("click", function () {
      let result = count > 0 ? --count : "Value can't be a negetive number";
      res.innerText = result;
      console.log(`${result}`);
      console.log(typeof result);
      return result;
    });
  }
  decrease();
  //   increase(() => typeof result);

  //   decrease(() => typeof result);
  // function x() {
  //   console.log(typeof result);
  // }
}

// count();

//! I have to measure the performance.now(), to check the speed of this context. For every eventlistener and functions to verify the speed of closures or callback !

function object(param1) {
  let obj = {
    name: "Khalid",
    age: 22,
    job: "Frontend Web Developer",
    married: false,
    hobbies: ["Coding", "Gaming", "Reading", "Watching Movies"],
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  };
  // console.log(obj);

  let { name, age, job, married, hobbies, address } = obj;

  console.log(
    name,
    age,
    job,
    married,
    hobbies.map((item) => (item == "Reading" ? "Books" : "string")),
    address.city
  );

  // console.log(name);
  // console.log(job);
}

object();
