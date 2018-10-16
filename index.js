var w = window.innerWidth;
var h = window.innerHeight;


function draw() {
    var c = document.getElementById("myCanvas");

    var ctx = c.getContext("2d");


    ctx.canvas.width = w;

    ctx.canvas.height = h;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, (w * 0.9), (h * 0.9));


    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText(h, 10, 50);
    ctx.fillText(w, 100, 50);
    ctx.fillText(screen.availWidth, 100, 500);
    ctx.fillText(screen.availHeight, 10, 500);


}
draw();