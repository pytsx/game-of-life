function CreateCanvas(w = window.innerWidth - padding, h = window.innerHeight  - padding, canvasResolution = 2){
  resolution = canvasResolution

  document.body.appendChild(document.createElement("canvas"))
  canvas = document.querySelector("canvas")
  
  canvasWidth = canvas.width = w 
  canvasHeight = canvas.height = h
  
  cols = Math.floor(canvasWidth / canvasResolution);
  rows = Math.floor(canvasHeight / canvasResolution);

  ctx = canvas.getContext("2d")
}

function Rect(x, y, size){
  size-= size < 2 ? 0 : 1
  ctx.fillRect(x, y, size, size)
}

function Fill(){
  const r = Math.floor(Math.random() * 100)
  const g = Math.floor(Math.random() * 255)
  const b = 255
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
}
