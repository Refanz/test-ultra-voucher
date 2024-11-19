const arrayOfString = ["cook", "save", "taste", "aves", "vase", "state", "map"];

// [a, a]
// aab -> a || a ->
// abc

function compareWords(firstWord, secondWord) {

    if (firstWord.length !== secondWord.length) return false;

    let temp = [];

    let result = false;

    for (let i = 0; i < firstWord.length; i++) {
        for (let j = 0; j < secondWord.length; j++) {
            if (firstWord[i] === secondWord[j]) {
                temp.push(firstWord[i]);
            }
        }
    }

    return temp;
}

function generateAnagrams() {
    const result = [];

    let count = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
        const temp = []

        for (let j = count; j < arrayOfString.length; j++) {
            if (arrayOfString[i].length !== arrayOfString[j].length) continue;

            temp.push(arrayOfString[j]);
        }

        result.push(temp);

        count++;
    }

    return result;
}

// const result = generateAnagrams();?
// console.log(result);
//
console.log(compareWords("avea", "vase"));
//
// console.log(sortingWord("abac"))
