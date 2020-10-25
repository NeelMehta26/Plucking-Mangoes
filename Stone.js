class Stone{
    constructor(x, y, r){
        var options = {
            'restitution': 0,
            'friction': 1,
            'density': 1.2,
            'isStatic': false
        }

        this.body = Bodies.circle(x, y, r, options);
        this.diameter = 2*r;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        push ();
        var pos = this.body.position;
        imageMode(CENTER);
        image (this.image, pos.x, pos.y, this.diameter);
        pop ();
    }
}