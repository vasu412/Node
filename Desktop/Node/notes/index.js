const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

fs.readFile("tasks.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  if (data) {
    arr = [...JSON.parse(data.toString())];
  }
  askForTask();
});

function askForTask() {
  rl.question("Enter your Task ", (ans) => {
    arr.push({
      [arr.length]: ans,
    });
    fs.writeFileSync("tasks.json", JSON.stringify(arr), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
    arr.map((x, idx) => console.log(x[idx]));
    askForDelete();
  });
}

function askForDelete() {
  rl.question("Delete a task ", (ans) => {
    const filteredData = arr.filter((x, idx) => x[idx] !== ans);
    fs.writeFile("tasks.json", JSON.stringify(filteredData), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("deleted task successfully");
    });
    rl.close();
  });
}
