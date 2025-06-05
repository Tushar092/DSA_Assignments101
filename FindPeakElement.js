// Question Link --> https://leetcode.com/problems/find-peak-element/description/

let nums = [1,2,3,1]

function findPeakElement (arr) {
    let low = 0;
    let high = arr.length - 1;
    // let mid = high + Math.floor((low - high) / 2);
    while(low < high) {
        let mid = high + Math.floor((low - high) / 2);

        if(arr[mid] > arr[mid + 1]) {
            high = mid;
        } else if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        }
    }
    console.log(arr[low]);
}

findPeakElement(nums);