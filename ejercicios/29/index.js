'use strict'
//En el array nums = [6,13, 1, 15, 5 ] usando un for y un if muestra los elementos que estén en índices impares
const nums = [6, 13, 1, 15, 5];
for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
        alert(nums[i]);
    }
}
