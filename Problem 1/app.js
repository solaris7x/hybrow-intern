var main = function () {
  var somestr = "Lightning McQueen";
  //   console.log(somestr);
  var doneChar = [];
  somestr.split("").forEach(function (char) {
    if (char.match(/\W/g) || doneChar.includes(char.toUpperCase())) {
      //   console.log(`Skipping ${char}`);
      return;
    }
    doneChar.push(char.toUpperCase());
    var regx = new RegExp(char, "gi");
    var count = (somestr.match(regx) || []).length;
    console.log("".concat(char.toUpperCase(), "-").concat(count));
  });
};
main();
