var s = new Array;
s = [3, 2.5, 4, 3];
var m = new Array;
m = [5, 6, 7, 9];
var d = new Array;
d = [3.5, 3, 4.5, 3.5];
var b = new Array;
b = [3, 2.5, 5, 4];
function starter(w, x, y, z) {
    return w*s[0] + x*s[1] + y*s[2] + z*s[3];
};
function maindish(w, x, y, z) {
    return w*m[0] + x*m[1] + y*m[2] + z*m[3];
};
function dessert(w, x, y, z) {
    return w*d[0] + x*d[1] + y*d[2] + z*d[3];
};
function beverage(w, x, y, z) {
    return w*b[0] + x*b[1] + y*b[2] + z*b[3];
};
function calculateInvoice(
    startersPrice,
    maindishPrice,
    dessertPrice,
    beveragePrice
  ) {
    let Total = startersPrice + maindishPrice + dessertPrice + beveragePrice;
    console.log("Total Price = " + Total.toFixed(2) + "€");
};
function calculateInvoiceSt(
    starterPrice,
    maindishPrice,
    dessertPrice,
    beveragePrice
  ) {
    let student = starterPrice + maindishPrice + dessertPrice;
    let TotalStudent = student - (10/100)*student + beveragePrice;
    console.log("Total Price for Students = " + TotalStudent.toFixed(2) +  "€" );
    return TotalStudent;
};
var starterPrice = starter(1, 0, 0, 0);
var maindishPrice = maindish(1, 0, 0, 0);
var dessertPrice = dessert(1, 0, 0, 0);
var beveragePrice = beverage(1, 0, 0, 0);
calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);
calculateInvoiceSt(starterPrice, maindishPrice, dessertPrice, beveragePrice);
var starterPrice = starter(0, 0, 0, 1);
var maindishPrice = maindish(0, 0, 1, 0);
var dessertPrice = dessert(1, 0, 0, 0);
var beveragePrice = beverage(0, 1, 0, 0);
calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);
calculateInvoiceSt(starterPrice, maindishPrice, dessertPrice, beveragePrice);
var starterPrice = starter(0, 1, 0, 0);
var maindishPrice = maindish(0, 1, 0, 0);
var dessertPrice = dessert(0, 0, 0, 1);
var beveragePrice = beverage(0, 0, 0, 1);
calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);
calculateInvoiceSt(starterPrice, maindishPrice, dessertPrice, beveragePrice);
var starterPrice = starter(7, 1, 5, 2);
var maindishPrice = maindish(0, 1, 3, 2);
var dessertPrice = dessert(2, 2, 2, 1);
var beveragePrice = beverage(15, 3, 4, 1);
calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);
calculateInvoiceSt(starterPrice, maindishPrice, dessertPrice, beveragePrice);