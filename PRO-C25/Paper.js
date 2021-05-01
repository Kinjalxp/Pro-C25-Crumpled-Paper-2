class Paper{
   
    constructor(x,y,radius){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density :  1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
       // this.body.image = loadImage("CrumpledPaper.png");
        this.image= loadImage("CrumpledPaper.png");
        World.add(myWorld,this.body);
        
        console.log(this.body.x);
    }
     
    display(){
        
        console.log("tet");
        
        console.log(this.body.x);
        var pos = this.body.position;
        var angles = this.body.angle;
        console.log("oo"+this.body.position.x);
        
        fill("Pink");
        push();
        translate(pos.x,pos.y);
        rotate (angles);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
        
    }
}