/* function myTask(count) {
  const words = ["One", "Two", "Three"];
  return new Promise(resolve => {
    setTimeout(() => resolve(words[count - 1]), 3000);
  });
}

async function run() {
  console.log("Start");

  console.log(await myTask(1));
  console.log(await myTask(2));
  console.log(await myTask(3));

  console.log("End");
}

run();
 */


/* console.log("START");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

function normal1() {
  console.log("Normal 1");
}
normal1();

async function asyncFunc() {
  console.log("Async Start");
}
asyncFunc();

function normal2() {
  console.log("Normal 2");
}
normal2();

async function asyncFunc2() {
  console.log("Async 2");
}
asyncFunc2();

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("END");
 */



/* setInterval(()=>{
console.log("Set Interval")
},1000)

setTimeout(()=>console.log("Set Time Out 1"),4000)
setTimeout(()=>console.log("Set Time Out 1"),6000) */
