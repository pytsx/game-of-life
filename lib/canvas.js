function CreateCanvas(w = window.innerWidth, h = window.innerHeight, canvasResolution = 1){
  resolution = canvasResolution + 1

  document.body.appendChild(document.createElement("canvas"))
  canvas = document.querySelector("canvas")
  
  canvasWidth = canvas.width = w - padding
  canvasHeight = canvas.height = h - padding
  
  cols = Math.floor(canvasWidth / canvasResolution);
  rows = Math.floor(canvasHeight / canvasResolution);

  ctx = canvas.getContext("2d")
}

function Rect(x, y, size){
  size -= size <= 1 ? 0 : .8
  ctx.fillRect(x, y, size, size)
}

function Fill(){
  const r = 255
  const g = 255
  const b = 255
  const a = 1
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
}
