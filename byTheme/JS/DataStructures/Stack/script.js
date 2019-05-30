let word = 'racecar';
let storage = [];
let newWord = '';

for(let i = 0; i < word.length; i++) {
    storage.push(word[i]);
}

for(let i = 0; i < word.length; i++) {
    newWord += storage.pop();
}
