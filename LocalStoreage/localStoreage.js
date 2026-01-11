// // //Storing Data in localStorage

// localStorage.setItem("name","rashmika")
// localStorage.setItem("age",23)
// localStorage.setItem("salary",90000)

// //  //Updating data


//  localStorage.setItem("name","deepika")

// //  // Get the data by key

// console.log( localStorage.getItem("name"))



// // //Removing Data from localStorage

//  localStorage.removeItem("name")


//         // Clearing All Data in localStorage

//          localStorage.clear()


//        // Store an object


let user={
  name1:"rashmika",
  age:23
}

localStorage.setItem("user",JSON.stringify(user))
//  let user1=JSON.parse(localStorage.)