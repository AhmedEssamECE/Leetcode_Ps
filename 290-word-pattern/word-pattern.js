var wordPattern = function(pattern, s) {
    let charToWord = new Map();
    let wordToChar = new Map();

    let words = s.split(" ");
    if (words.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        let word = words[i];

        if (charToWord.has(ch)) {
            if (charToWord.get(ch) !== word) {
                return false;
            }
        } else {
            charToWord.set(ch, word);
        }
        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== ch) {
                return false;
            }
        } else {
            wordToChar.set(word, ch);
        }
    }

    return true;
};
