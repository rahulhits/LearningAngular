function Demo() {
    var x;
    x = 10;
    if (x == 10) {
        var y = 20;
    }
    console.log("x" + x + "\n" + "Y" + y);
}
// Demo();
function varHoisting() {
    a = 10;
    console.log("x=" + a);
    var a;
}
varHoisting();
