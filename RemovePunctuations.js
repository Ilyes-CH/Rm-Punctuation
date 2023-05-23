// Simple method to remove punctuations when working with strings


function RemovePunctuation(sentence){ //constructor function 

    this.sentence = sentence;
}


RemovePunctuation.prototype.apply = function() {

    let result = '';

let dots = [',', '?', ';', '.', ':', '/', '!', '§', '%', '$', '£', '*', '_', '-', '#', '&', '+', '=', '@'];

for (let j of this.sentence) {
  
    let matchFound = false;

  for (let i in dots) {
  
    if (j === dots[i]) {
  
        matchFound = true;
  
        break;
    }
  }
  
  if (!matchFound) {
  
    result += j;
  
    }

}

this.sentence = result;

console.log(this.sentence);
};
// const test1 = new RemovePunctuation('s.enten,?.ce');
// test1.apply();