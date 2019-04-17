function commonChild(s1, s2) {
    console.log(s1, ", ", s2);
    let str1 = "";
    let str2 = "";

    // remove not contain value
    const s1length = s1.length;
    const s2length = s2.length;

    for (let i = 0; i < s1length; i++) {
        for (let j = 0; j < s2length; j++) {
            if (s1[i] === s2[j]) {
                str1 += s1[i];
                break;
            }
        }
    }

    for (let i = 0; i < s2length; i++) {
        for (let j = 0; j < s1length; j++) {
            if (s2[i] === s1[j]) {
                str2 += s2[i];
                break;
            }
        }
    }
    console.log("str1 : ", str1);
    console.log("str2 : ", str2);

    // counting size
    let longestSize = str1.length - 1;

    while (longestSize > 0) {

        console.log("longestSize :", longestSize);
        longestSize -= 1;
    }


}



const data1 = ["HARRY", "SALLY"];
const data2 = ["ABCGDE", "GCFDHK"];
const data3 = ["HARRY", "SALLY"];

let data = data2;


commonChild(data[0], data[1]);


