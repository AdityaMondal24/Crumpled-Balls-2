class Ground
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display()
    {
        var locus = this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(locus.x,locus.y,this.width,this.height);
    }
}