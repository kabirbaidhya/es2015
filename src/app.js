
var a = 10;

for (let i = 0; i < 10; i++) {
    let x = i + a;
    var y = i + a;
    console.log(x, i, a);
}

console.log(x, y);
console.log(i, a);
