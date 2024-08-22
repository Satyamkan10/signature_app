const colorpicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor");
const canvas = document.getElementById("mycanvas");
const clear = document.getElementById("clearButton");
const save = document.getElementById("savebutton");
const font = document.getElementById("fontSize");
const retrieve = document.getElementById("retrieve");

const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

colorpicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;  
    lastY = e.offsetY;   
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);  
        ctx.stroke();

        lastX = e.offsetX;  
        lastY = e.offsetY;  
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;  
});

canvasColor.addEventListener('change', (e) => {
   ctx.fillStyle = e.target.value;
   ctx.fillRect(0,0,800,500)
});

font.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value;
});

clear.addEventListener('click',(e)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
});

save.addEventListener('click',()=>{
        localStorage.setItem('canvasContents',canvas.toDataURL());

        let link = document.createElement('a');

        link.download = 'my-canvas.png'

        link.href = canvas.toDataURL();

        link.click();
});

retrieve.addEventListener('click',()=>{
    let savedCanvas= localStorage.getItem('canvasContents');

    if(savedCanvas){
        let img = new Image()
        img.src = savedCanvas;
        ctx.drawImage(img,0,0)
    }
})
