let canvas = document.querySelector("#draw");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55";
var hue = 0;
ctx.lineWidth = 100;
ctx.lineCap = "round";
ctx.lineJoin = "round";
let isDrawing = false;
let initialX = 0;
let initialY = 0;
let direction = true;


function draw(e){
	if(isDrawing){
		ctx.beginPath();
		ctx.moveTo(initialX,initialY);
		ctx.lineTo(e.offsetX,e.offsetY);
		ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
		ctx.stroke();
		[initialX,initialY] = [e.offsetX,e.offsetY];
		hue ++;
		if(hue >= 360){
			hue = 0;
		}
		if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
			direction = !direction;
		}
		if(direction){
			ctx.lineWidth ++;
		}else{
			ctx.lineWidth --;
		}
		
	}return;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[initialX,initialY] = [e.offsetX,e.offsetY];
})
canvas.addEventListener("mouseout",() => isDrawing = false);
canvas.addEventListener("mouseup", () => isDrawing = false);