
module("About Assignment (topics/about_assignment.js)");

test("local variables", function() {
    var temp = 2;
    equal(temp, 2, "Assign a value to the variable temp");
});

test("global variables", function() {
    temp = 1; // Not using var is an example. Always use var in practise.
    equal(window.temp, temp, 'global variables are assigned to the window object');
});
