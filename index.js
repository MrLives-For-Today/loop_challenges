// 1. Print the Odds
console.log("");
console.log("1. Print the Odds")
console.log("");
for(i = 1; i <= 20; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}
console.log("");
console.log("");

// Decrease Mutliples of 3 (while loop will be used)
console.log("2. Decreasing Multiples of 3")
console.log("");
var i = 100;

while(i > 0) {
    console.log(i);
    i -= 3;
}
console.log("");
console.log("");

// Printing the sequence (For loop will be used)
console.log("3. Print The Sequence");
console.log("");

var num = "4";

for(i = 0; i < 6; i ++) {
    console.log(num);
    num -= 1.5;
}
console.log("");
console.log("");

// Sigma (For loop will be used)
console.log("4. Sigma");
console.log("");

var sum = 1

for(i = 2; i <= 100; i ++) {
    sum += i
}
console.log(sum);
console.log("");
console.log("");

// Factorial (Again, For loop)
console.log("5. Factorial");
console.log("");

var product = 1

for(i = 2; i <= 12; i ++) {
    product *= i
}
console.log(sum);