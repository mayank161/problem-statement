// logic
// n = max_value
// take sqrt of n and run a loop from 2 to n
//ex - i = 5 so x = 25
// run loop from 2 to i/2 because sum of root of 5 is always smaller then 5
// used i/2 to stop the repetion like 3,4 and 4,3
//if squre of 5 - square of 3 == convert proper integer value then print them

const z = document.getElementById('ss')
let n = Math.sqrt(10000000),x,y;
for(let i=2; i<=n; i++) {
    x = i*i;
    for(let j=2; j<i/2; j++) {
        y = x - (j*j);
        y = Math.sqrt(y)
        if(Number.isInteger(y)) {
            z.innerHTML += `<button class="zz">${j+","+y+","+x}</button>`
        }
    }
}
