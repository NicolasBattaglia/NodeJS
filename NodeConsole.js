
//Add 10 + 10.
10 + 10;

//Use console.log('hello world') to output hello world.
console.log("Hello world");

//Make a timeTillChristmas program that tells you how many seconds there are until Christmas.
var actual = new Date();
var christmas = new Date(2016,12,25);

console.log("Seconds between dates : " + (christmas-actual)/1000);
console.log("Days between dates : " + (christmas-actual)/(1000*60*60*24));
