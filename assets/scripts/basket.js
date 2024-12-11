function Basket() {
    this.x = 0;
    this.y = 0;
    this.sprite = null; // Basket sprite
    this.speed = 0; 
    this.topSpeed = 7;   
    this.inertia = 0.5;

    this.MoveBasket = function() {
        this.x = mouseX;

        image(this.sprite, this.x, this.y);
    } 

}