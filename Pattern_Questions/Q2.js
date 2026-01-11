for (let i = 1; i <= 5; i++) {
  let row = "";

  if (i === 1) {
    row = "*";
  } 
  else if (i === 2) {
    row = "**";
  } 
  else if (i === 5) {
    row = "*****";
  } 
  else {
    row = "*"; 
    for (let s = 1; s < i-1; s++) {
      row += "@"; 
    }
    row += "*";
  }

  console.log(row);
}
