//  Leet Code Question Link --> https://leetcode.com/problems/search-insert-position/description/

let nums = [1, 3, 5, 6];
// let target = 5;
// let target = 2;
let target = 7;


function findInsertPosition (nums, target) {
    let l = 0;
    let h = nums.length - 1;
    // let mid = 0;

    while(l <= h) {
        mid = l + Math.floor((h - l) / 2);

        if(target == nums[mid]) {
            return mid;
        } else if(target > nums[mid]) {
            l = mid + 1;
        } else if (target < nums[mid]) {
            h = mid - 1;
        }
    }
    return (mid + 1);
}

console.log(findInsertPosition(nums, target));