class Polygon{
     constructor(x,y,r){
     var options={
         isStatic :false,
         restitution:0.5,
         friction:0.3
         
     }
     this.x=x
     this.y=y
     this.r=r
     this.body = Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    this.image = loadImage("polygon.png")
   
     

     }
     display(){
         var pos = this.body.position
         var angle = this.body.angle
         push()
         translate(pos.x,pos.y)
         rotate(angle)
         imageMode(CENTER)
         image(this.image,0,0,40,40)
         pop()
     }

}