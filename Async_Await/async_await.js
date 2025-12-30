function myTask(count) {
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
