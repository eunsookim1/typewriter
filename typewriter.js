let text = "Hello there from lighthouse labs. \n";

let type = function(sentence) {
  let newStr = "";
  for (let i = 0; i < sentence.length; i++) {
    newStr += sentence[i];
    setTimeout(()=> process.stdout.write(newStr[i]), i * 50);
  }
};

type(text);
// how to remove the % at the end?

const sentence = "My name is EunSoo. Nice to meet you. \n";

let delay = 2000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}