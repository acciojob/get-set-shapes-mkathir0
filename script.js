//complete this code
class Rectangle {
	constructor(width,height)
	{
		this._width=width;
		this._height=height;
	}

	get width()
	{
		return this._width;
	}

	get height()
	{
		return this._height;
	}

	getArea()
	{
		const result=this._width*this._height;
		return result;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
		
	}

	getPerimeter()
	{
		const results=4*this._width;
		return results
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
