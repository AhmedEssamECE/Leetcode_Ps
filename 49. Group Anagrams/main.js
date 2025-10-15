/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const mapAnswer = new Map();
    const ans = [];
    for (const str of strs) {
        const sortedStr = str.split("").sort().join('');
        if (mapAnswer.has(sortedStr)) {
         ans[mapAnswer.get(sortedStr)].push(str);
        }
        else {
            mapAnswer.set(sortedStr, ans.length);
            ans.push([str]);
        }
    }
    return ans;
};
