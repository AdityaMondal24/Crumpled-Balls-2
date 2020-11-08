class Ball
{
    constructor(x,y,diameter)
    {
        var options={
            restitution:0.3,
			friction:0.5,
			density:1.2
        }

        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);
    }

    display()
    {
        var locus = this.body.position;
        var angle = this.body.angle;

        push();
        translate(locus.x,locus.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter+20,this.diameter+20);
        pop();
    }

}