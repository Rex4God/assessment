const twoSum =(nums, target)=>{
    var sums =[];
    for(var i = 0 ; i < nums.length; i++){

        for(var j = i +1; j < nums.length; j++){

            if(nums[i] + nums[j] ===target){

                sums.push(nums[i], nums[j]);
            };
        };
    };
    return sums
};

console.log(twoSum([2,7,11,15],9)) // expected output [2,7]
console.log(twoSum([3, 2, 4],7))   // expected output [3,4]
console.log(twoSum([3,3],6))       // expected output [3,3]