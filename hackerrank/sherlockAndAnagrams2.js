
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {

    const strLength = s.length;
    let count = 0;

    for (let i = 0; i < strLength; i++) {
        for (let windowSize =  1; windowSize < strLength - i; windowSize++) {
            let targetWord = {};

            // making dictionary
            for (let j = 0; j < windowSize; j++) {
                if (targetWord[s[i + j]] === undefined) {
                    targetWord[s[i + j]] = 1;
                }
                else {
                    targetWord[s[i + j]] += 1;
                }
            }
            for (let walker = i + 1; walker + windowSize - 1 < strLength; walker++) {

                let isAnagram = true;
                let tmpWord = {};
                Object.assign(tmpWord, targetWord);

                for (let incIdx = 0; incIdx < windowSize; incIdx++) {
                    const compChar = s[walker + incIdx];
                    if (tmpWord[compChar] === undefined || tmpWord[compChar] === 0) {
                        // not found
                        isAnagram = false;
                        break;
                    }
                    else {
                        // found
                        tmpWord[compChar] -= 1;
                    }
                }

                if (isAnagram) {
                    count++;
                }
            }
        }
    }
    return count;
}

const str1 = "abba";        // 4
const str2 = "abcd";        // 0
const str3 = "ifailuhkqq";  // 3
const str4 = "kkkk";        // 10
const str5 = "cdcd";        // 5

console.log(sherlockAndAnagrams(str5));
