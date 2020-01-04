class A  
  {  
     display()  
    {  
      document.writeln("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
var b=new B();  
b.display();

///////////////////////

class A  
  {  
     display()  
    {  
      document.writeln("A is invoked<br>");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      document.writeln("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
  msg.display();  
});  

/////////////////////////////////////////////////////////////////

var shape = function (){};
shape.prototype.draw = function(){
	return "i am generic shape";
}
//circle
var circle = function(){}
circle.prototype = Object.create(shape.prototype);
circle.prototype.draw= function(){
	return "i am a circle";
}
//triangle
var triangle = function (){}
triangle.prototype = Object.create(shape.prototype);
triangle.prototype.draw= function(size){
	return "this is triangle";
}
//printing shapes
var shapes = [new shape(), new circle(), new triangle(23)];
shapes.forEach (function (shapeList){
	console.log(shapeList.draw());
});