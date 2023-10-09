function idName() {
  let splitText = this.toLowerCase().split(" ");
  let aResult = [];

  for (let text of splitText) {
    aResult.push(text[1])
  };

  return aResult.join("")
};

String.prototype.idName = idName