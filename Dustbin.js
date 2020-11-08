class Dustbin
{
    constructor(x,y)
    {
        var options={
            isStatic: true
        }
       
        this.height = 200;
        this.width = 200;
        this.thickness = 20;
        this.x = x;
        this.y = y;

        this.bottom = Bodies.rectangle(x,y+(this.height+this.thickness)/2,this.width,this.thickness,options);
        this.left = Bodies.rectangle(x-(this.width-this.thickness)/2,y,this.thickness,this.height,options);
        this.right = Bodies.rectangle(x+(this.width - this.thickness)/2,y,this.thickness,this.height,options);

        this.image = loadImage("sprites/dustbingreen.png");

        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);
    }

    display()
    {
        var bottomPos = this.bottom.position;
        rectMode(CENTER);
        fill(255);
        rect(bottomPos.x,bottomPos.y,this.width,this.thickness);

        var leftPos = this.left.position;
        rectMode(CENTER);
        fill(255);
        rect(leftPos.x,leftPos.y,this.thickness,this.height);

        var rightPos = this.right.position;
        rectMode(CENTER);
        fill(255);
        rect(rightPos.x,rightPos.y,this.thickness,this.height);

        image(this.image,bottomPos.x-this.width/2,bottomPos.y-this.height - (this.thickness)/2 ,this.width,this.height + this.thickness);
        
    }
}