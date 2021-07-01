canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var screen_size = screen.width;
var new_width = screen_width - 70;
var new_height = screen_height - 300;
var xpos = 20;
var ypos = 20;
var color = "black";
var line_width = 1;
if (screen_size < 992) {
    document.getElementById("myCanvas").height=new_height;
    document.getElementById("myCanvas").width=new_width;
}

canvas.addEventListener("touchstart",myTouchStart);

function myTouchStart(e) {
    color = document.getElementById("input1").value;
    line_width = document.getElementById("input2").value;
    xpos = e.touches[0].clientX - canvas.offsetLeft;
    ypos = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",myTouchMove);

function myTouchMove(e) {
    CurrentX = e.touches[0].clientX - canvas.offsetLeft;
    CurrentY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(xpos, ypos);
        ctx.lineTo(CurrentX, CurrentY);
        //ctx.arc(CurrentX, CurrentY, 10, 0, 2*Math.PI);
        //ctx.rect(CurrentX, CurrentY, 200, 200);
        ctx.stroke();
        xpos = CurrentX;
        ypos = CurrentX;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}