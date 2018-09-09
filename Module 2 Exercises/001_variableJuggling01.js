// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z; // x = 17 = 8(y) + 9(z)
z = x; // z = 17 = 17(x)
x = y; // x = 8 = 8(y)
z = x + y; // z = 16 = 8 + 8
y = z - x; // y = 8 = 16 - 8
z = y; // z = 8
x = y * z; // x = 64
z = y / z; // z = 1
x = (z - x) / (y + z); // (1 - 64) // (8 + 1) = -63/9 = -7

/////////////////

var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};

// Finished in 13:39
