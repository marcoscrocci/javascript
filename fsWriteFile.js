var fs = require("fs");

var data = "New File Contents\nTeste";

fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
