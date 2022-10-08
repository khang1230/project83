var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var currentX, currentY, lastX, lastY
var color = "blue"
var lineWidth = 2
var mouseEvent = ""

if(screen.width<992)
{
    canvas.width = screen.width - 70
    canvas.height = screen.height - 300
}

canvas.addEventListener("touchstart", startdraw)
function startdraw(e)
{

    lastX = e.touches[0].clientX - canvas.offsetLeft
    lastY = e.touches[0].clientY - canvas.offsetTop

    color = document.getElementById("colorInput").value
    lineWidth = document.getElementById("widthInput").value
}

canvas.addEventListener("touchmove", draw)
function draw(e)
{

    currentX = e.touches[0].clientX - canvas.offsetLeft
    currentY = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokestyle = color
    ctx.lineWidth = lineWidth
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    lastX = currentX
    lastY = currentY
}

canvas.addEventListener("mousedown", downFunction)

function downFunction(e){
    mouseEvent="mousedown"
}

canvas.addEventListener("mouseup", upFunction)

function upFunction(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave", leaveFunction)

function leaveFunction(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove", moveFunction)

function moveFunction(e){
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop
    color = document.getElementById("colorInput").value
    lineWidth = document.getElementById("widthInput").value


    if (mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
    }

    lastX = currentX
    lastY = currentY
}

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}