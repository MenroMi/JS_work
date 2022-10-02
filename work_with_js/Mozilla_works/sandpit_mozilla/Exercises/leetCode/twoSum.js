var twoSum = function(nums, target) {
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for(let k = i+1; k < nums.length; k++) {
            let second = nums[k];
            sum = first + second;
            
            if(sum === target) {
                return [i, k];
            }
            
        }
    }
};

twoSum([2,7,11,15]);
twoSum([3,3]);
twoSum([3,2,4]);