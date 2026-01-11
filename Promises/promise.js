console.log("HELLO Everyone")

const myPromise = new Promise((resolve, reject) => {
  let marks = 35;

  if (marks >= 40) {
    resolve("Passed the exam! 🎉");
  } else {
    reject("Failed the exam! ❌");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
  
console.log("Byee EVERYONE")