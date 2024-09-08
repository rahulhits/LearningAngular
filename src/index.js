var Product = /** @class */ (function () {
    function Product() {
        this.Name = "TV";
        this.Price = 45.000;
        this.Qty = 2;
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Name".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty));
    };
    return Product;
}());
var obj = new Product();
obj.Print();
