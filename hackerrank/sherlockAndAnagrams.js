function removeAt(str, index) {
    return str.substring(0, index) + str.substring(index + 1, str.length);
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {

    const strLength = s.length;
    let count = 0;

    for (let i = 0; i < strLength; i++) {
        console.log(i,") input : ", s);
        for (let windowSize =  1; windowSize < strLength - i; windowSize++) {
            console.log("windowSize : ", windowSize);
            for (let walker = i + 1; walker + windowSize - 1 < strLength; walker++) {
                //console.log("target : ", s[i], "walker : ", s[walker]);
                //console.log("target : ", s.substr(i, windowSize), "walker : ", s.substr(walker, windowSize));

                let isAnagram = true;
                let targetWord = s.substr(i, windowSize);
                for (let incIdx = 0; incIdx < windowSize; incIdx++) {
                    /*
                        if (s[targetLastIdx - incIdx] !== s[walker + incIdx]) {
                            isAnagram = false;
                        }
                        */
                    const compareChar = s[walker + incIdx];
                    console.log("compareChar ", compareChar, " : ", walker, " + ", incIdx);
                    if (targetWord.includes(compareChar)) {
                        // found
                        targetWord = removeAt(targetWord, targetWord.indexOf(compareChar));
                    }
                    else {
                        // not found
                        isAnagram = false;
                        break;

                    }
                }

                if (isAnagram) {
                    count++;
                    console.log("FOUND target : ", s.substr(i, windowSize), "walker : ", s.substr(walker, windowSize));
                }
                else {
                    console.log("isn't Found");
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

console.log(sherlockAndAnagrams(str1));
