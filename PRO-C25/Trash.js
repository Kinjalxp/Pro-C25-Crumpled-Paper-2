class Trash {
    constructor (x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       // World.add(myWorld,this.body);
        this.image = loadImage("dustbingreen.png");
    }
    display(){
        imageMode(CENTER);
        fill ("Yellow");    
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}