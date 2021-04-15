/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let m=-10000;
    let p=-1000;
    let c=nums.length;
    for(let i=0;i<c ;i++){
        if(m<nums[i]){
            m=nums[i];
        }
    }
    for(let q=0;q<c ;q++){
        if(nums[q]!=m){
            if(p<nums[q])
            {
                p=nums[q];
            }
        }
    }
    return p;
    
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
