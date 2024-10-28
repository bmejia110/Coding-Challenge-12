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
