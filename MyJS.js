var num = [];

for (var i = 1; i <= 49; i++) {
    num.push(i);
}

for (var i = num.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [num[i], num[rand]] = [num[rand], num[i]];
}

var lotto = num.slice(0, 6);

console.log(lotto);