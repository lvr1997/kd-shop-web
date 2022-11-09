var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = document.getElementById("img");


// 图片被放大区域的中心点，也是放大镜的中心点
var centerPoint = {};
// 图片被放大区域的半径
var originalRadius = 100;
// 图片被放大区域
var originalRectangle = {};
// 放大倍数
var scale = 2;
// 放大后区域
var scaleGlassRectangle

centerPoint.x = 200;
centerPoint.y = 200;


window.onload = function () {
    addListener();
    draw();

}


function drawBackGround() {
    context.drawImage(img, 0, 0);
}


function calOriginalRectangle(point) {
    originalRectangle.x = point.x - originalRadius;
    originalRectangle.y = point.y - originalRadius;
    originalRectangle.width = originalRadius * 2;
    originalRectangle.height = originalRadius * 2;
}

function drawMagnifyingGlass() {

    scaleGlassRectangle = {
        x: centerPoint.x - originalRectangle.width * scale / 2,
        y: centerPoint.y - originalRectangle.height * scale / 2,
        width: originalRectangle.width * scale,
        height: originalRectangle.height * scale

    }
    context.save();
    context.beginPath();
    context.arc(centerPoint.x, centerPoint.y, originalRadius, 0, Math.PI * 2, false);
    context.clip();

    context.drawImage(canvas,
        originalRectangle.x, originalRectangle.y,
        originalRectangle.width, originalRectangle.height,
        scaleGlassRectangle.x, scaleGlassRectangle.y,
        scaleGlassRectangle.width, scaleGlassRectangle.height
    )
    context.restore();

    context.beginPath();
    var gradient = context.createRadialGradient(
        centerPoint.x, centerPoint.y, originalRadius - 5,
        centerPoint.x, centerPoint.y, originalRadius);
    gradient.addColorStop(0, 'rgba(0,0,0,0.2)');
    gradient.addColorStop(0.80, 'silver');
    gradient.addColorStop(0.90, 'silver');
    gradient.addColorStop(1.0, 'rgba(150,150,150,0.9)');

    context.strokeStyle = gradient;
    context.lineWidth = 5;
    context.arc(centerPoint.x, centerPoint.y, originalRadius, 0, Math.PI * 2, false);
    context.stroke();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackGround();
    calOriginalRectangle(centerPoint);
    drawMagnifyingGlass();
}


function addListener() {
    canvas.onmousemove = function (e) {
        centerPoint = windowToCanvas(e.clientX, e.clientY);
        draw();
    }
}

function windowToCanvas(x, y) {
    var bbox = canvas.getBoundingClientRect();
    var bbox = canvas.getBoundingClientRect();
    return { x: x - bbox.left, y: y - bbox.top }
}