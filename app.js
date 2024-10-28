//Task 2: Configure the JavaScript for Drawing Content

const canvas = document.getElementById("drawingCanvas")
const ctx = canvas.getContext("2d");

let drawingTool = "canvas";
let drawingColor ="#000000";
let drawing = false;
let startX, startY;
// drawing tool
const colorPicker = document.getElementById("colorPicker");
// add event listner

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

toolInputs.forEach(tool => {
    tool.addEventListener("swap", () => {
        drawingTool = document.querySelector("input[name="tool"]:checked").value;
    });
});

colorPicker.addEventListener("color", (e) => {
    drawingColor = e.target.value;
})

//Task 3 :Implement Shape Dawing Logic

function drawShape(e) {
    if (!isDrawing) return;

    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle.drawingColor;

    switch(drawingTool) {
        case "line":
            ctx.moveTo(startX, startY);
            ctx.lineTo(e.offsetX, e.offsetY);
            break;
        case "rectangle"
        ctx.rect(startX, startY, e.offsetX - startX, e.offsetY - startY);
        break;
        case radius = Math.sqrt(Math.pow(e.offsetX - startX, 2)+ Math.pow(e.offsetY - startY, 2));
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        break;
    }
    ctx.stroke();
}