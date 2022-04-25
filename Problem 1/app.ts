const main = () => {
  const somestr = "Lightning McQueen";
  //   console.log(somestr);
  const doneChar: string[] = [];
  somestr.split("").forEach(function (char) {
    if (char.match(/\W/g) || doneChar.includes(char.toUpperCase())) {
      //   console.log(`Skipping ${char}`);
      return;
    }
    doneChar.push(char.toUpperCase());
    const regx = new RegExp(char, "gi");
    const count = (somestr.match(regx) || []).length;
    console.log(`${char.toUpperCase()}-${count}`);
  });
};

main();
