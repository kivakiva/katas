const numberOfVowels = function(data) {
  let answer = 0;
  let vowels = 'aeiou';
  data = data.toLowerCase();
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (data[i] == vowels[j]) {
        answer += 1
      }
    }
  }
  return answer;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));