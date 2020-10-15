class Bucket {
    constructor(x,y) {
        var options = {
            isStatic : true
        }
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.bottomBody = Bodies.rectangle(x,y,this.width,this.thickness,options);
        this.leftBody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
        this.rightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        
    }
    display(){
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        push();
        rectMode(CENTER);
        translate(bottomPos.x,bottomPos.y);
        fill("red");
        rect(0,0,this.width,this.thickness);
        pop();
        push();
        rectMode(CENTER);
        translate(leftPos.x,leftPos.y);
        fill("red");
        rect(0,0,this.thickness,this.height);
        pop();
        push();
        rectMode(CENTER);
        translate(rightPos.x,rightPos.y);
        fill("red");
        rect(0,0,this.thickness,this.height);
        pop();

    }
}