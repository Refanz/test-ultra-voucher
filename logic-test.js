const arrayOfString = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function sortingWord(word) {
    let wordArray = [];

    for (let i = 0; i < word.length; i++) {
        wordArray.push(word[i]);
    }

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (wordArray[j] > wordArray[j + 1]) {
                const temp = wordArray[j];
                wordArray[j] = wordArray[j + 1];
                wordArray[j + 1] = temp;
            }
        }
    }

    return wordArray.join("");
}

function generateAnagrams(arrayOfWords) {
    const result = [];

    let count = 0;

    for (let i = 0; i < arrayOfWords.length; i++) {
        const temp = [];
        temp.push(arrayOfWords[i]);

        for (let j = i + 1; j < arrayOfWords.length; j++) {
            if (arrayOfWords[i].length !== arrayOfWords[j].length) continue;

            if (sortingWord(arrayOfWords[i]) === sortingWord(arrayOfWords[j])) {
                temp.push(arrayOfWords[j]);
                arrayOfWords[j] = "";
            }
        }

        if (arrayOfWords[i] === "") continue;
        result.push(temp);
        count++;
    }

    return result;
}

console.log(generateAnagrams(arrayOfString))

