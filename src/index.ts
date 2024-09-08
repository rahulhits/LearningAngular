class Product
{
    public Name:string="TV";
    public Price:number=45.000;
    public Qty:number=2
    public Total():number{
        return this.Qty * this.Price;
    }
    public Print():void{
        console.log(`Name${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}`);
            }
}
let obj=new Product();
obj.Print();