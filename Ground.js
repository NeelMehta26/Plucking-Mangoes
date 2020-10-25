class Ground{
    constructor(x, y, w, h){
        var options = {isStatic: true}
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    
    }

    display(){
        push ();
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(2);
        stroke ('black');
        fill (89, 5, 5);
        rect(pos.x, pos.y, this.width, this.height);
        Pop ();
    }
}