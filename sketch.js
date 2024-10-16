function setup() {
  createCanvas(600, 600);
  noStroke()
}


function draw() {
  background("#8A916A");
  fill(240,230,140)
  arc(300,600,600,450,PI,2*PI)
  
 //sword
  fill(205,133,63)
  beginShape()
  vertex(150,410)
  vertex(150,430)
  vertex(170,430)
  vertex(420,180)
  vertex(400,160)
  endShape()
  
  quad(330,190,
       350,170,
       410,230,
       390,250)
  
  //face
  fill(255,228,196)
  ellipse(300,125,75,100)
  fill("black")
  arc(300,125,75,100,0,PI)

  
  //hat
  fill(139,69,19)
  triangle(200,100,300,50,400,100)
  //body
  fill(105,105,105)
  quad(250,175,
       350,175,
       375,225,
       225,225);
  
  fill(220,20,60)
  quad(235,225,
       295,225,
      295,400,
      180,400) 
  quad(305,225,
       365,225,
       415,400,
       305,400)
  
  fill(225,225,225)
  rect(295,225,10,175)
  fill(0,139,139)
  square(295,305,10)
  
   
 
  
  //leaves
  myshape(100,200,2,10)
  myshape(150,100,3,15)
  myshape(500,300,5,10)
  myshape(550,50,6,12)

}
  

function myshape(x,y,w,h){
  fill(255,140,0)
  beginShape()
  vertex(x,y)
  vertex(x+h,y+3/2*w)
  vertex(x+h,y+w+h)
  vertex(x+2*h,y+w/2)
  vertex(x+3*h,y+w/2)
  vertex(x+3*h,y-w/2)
  vertex(x+2*h,y-w/2)
  vertex(x+h,y-w-h)
  vertex(x+h,y-w)
  endShape()
  
  
  
}