let canvas
let ctx
let canvasWidth
let canvasHeight 
let initResolution
let resolution
let cols
let rows
let padding = 400

function CreateCanvas(w = window.innerWidth - padding, h = window.innerHeight - padding, canvasResolution = 3){
  resolution = canvasResolution
  initResolution= canvasResolution
  

  document.body.appendChild(document.createElement("canvas"))
  canvas = document.querySelector("canvas")
  
  canvasWidth = canvas.width = w
  canvasHeight = canvas.height = h
  
  cols = Math.floor(canvasWidth / canvasResolution);
  rows = Math.floor(canvasHeight / canvasResolution);

  ctx = canvas.getContext("2d")
  
}

function Rect(x, y, size){
  ctx.fillRect(x, y, size, size)
}

function Fill(){
  const r = 255
  const g = 255
  const b = 255
  const a = 1
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
}

function RBinary(){
  return Math.floor(Math.random() * 2)
}

function DrawCel(x, y){
  Fill()
  Rect(x * resolution, y * resolution, resolution)
}

const domParser = new DOMParser()

function CreateInfo(infoContainer, label = "", id){
  const p = document.createElement("p")
  p.innerHTML = label
  const span = document.createElement("span")
  span.setAttribute("id", id)
  p.appendChild(span)
  infoContainer.appendChild(p)
  return span
}

function UpdateInfo(id, value){
  const element = document.querySelector(`#${id}`)
  element.innerText = value
}
