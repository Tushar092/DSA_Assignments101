//  Question Leet Code Link --> https://leetcode.com/problems/first-bad-version/description/

let nver = 5;
let verar = [1, 2, 3, 4, 5];
let badver = 4;

// for(let i = 0; i <= n - 1; i++) {
//     verar.push(i + 1);
// }

function firstBadVersion (verar, badver) {
    let l = 0;
    let h = nver - 1;
    // let mid = l + Math.floor((h - l) / 2);
    while(l <= h) {
        let mid = l + Math.floor((h - l) / 2);
        if(verar[mid] === badver) {
            console.log(verar[mid]);
            return;
        } else if(verar[mid] < badver) {
            l = mid + 1;
        } else if(verar[mid] > badver) {
            h = mid - 1;
        }
    }
    return -1;   // If the version is not found (By default used in Binary Search Algorightms);
    // console.log(mid);
}

console.log(firstBadVersion(verar, badver));