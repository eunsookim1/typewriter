let sentence = "hello there from lighthouse labs";

let type = function() {
  let newStr = "";
  for (let i = 0; i < sentence.length; i++) {
    newStr += sentence[i];
    setTimeout(()=> process.stdout.write(newStr[i]), i * 50);
  }
};

type();

// how to remove the % at the end?