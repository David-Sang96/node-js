const fs = require("fs");

// writeFile readFile deleteFile all operations are async function

// fs.readFile("./docs/coder.txt",(err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });

// fs.writeFile("./docs/coder.txt", "hello david", (err,) => {
//   if (err) console.log(err);
// });

// writeFile gonna create a new file if doesn't exit but can't create a new folder
// fs.writeFile("./docs/coder1.txt", "hello david", (err) => {
//   if (err) console.log(err);
// });

//existsSync is to make sure file exited or not.if not exited then create new file
if (!fs.existsSync("./docs/coder1.txt")) {
  fs.writeFile("./docs/coder1.txt", "hello david", (err) => {
    if (err) console.log(err);
    console.log("file created");
  });
} else {
  delete fs.unlink("./docs/coder1.txt", (err) => {
    if (err) console.log(err);
    console.log("file deleted");
  });
}

console.log("hello");

//create folder
// fs.mkdir("./new-folder", (err) => {
//   if (err) console.log(err);
//   console.log("folder created");
// });

// delete folder
// fs.rmdir("./new-folder", (err) => {
//   if (err) console.log(err);
//   console.log("folder deleted");
// });

//existsSync is to make sure folder exited or not.if not exited then create a new folder
if (!fs.existsSync("./new-folder")) {
  fs.mkdir("./new-folder", (err) => {
    if (err) console.log(err);
    console.log("folder created");
  });
} else {
  fs.rmdir("./new-folder", (err) => {
    if (err) console.log(err);
    console.log("folder deleted");
  });
}
