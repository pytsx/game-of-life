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

function CreateBtn(label = "", id){
  const btn = document.createElement("button")
  btn.innerHTML = label
  btn.setAttribute("id", id + "_btn")
  return btn
}

function AppendFromArray(parent, arr = []){
  arr.forEach(el => {
    parent.appendChild(el)
  })
}

function BtnSetter(infoContainer, label, id){
  const container = document.createElement("div")
  container.classList.add("btns_container")

  const value = document.getElementById(id)
  
  const placeholder = document.createElement("span")
  placeholder.innerHTML = label

  const addbtn = CreateBtn("+", id + "_add" )
  const delbtn = CreateBtn("-", id + "_del")

  AppendFromArray(container, [delbtn, value, addbtn])
  AppendFromArray(infoContainer, [placeholder, container])

  return {addbtn, delbtn}
}

function UpdateBtn(id, newValue){
  const input = document.getElementById(id + "_btn")
  input.setAttribute("value", newValue)
}

function FPS(_lastTime){
  let currentTime = new Date().getTime()
  let elapsedTime = currentTime - _lastTime
  const fps = (1000 / elapsedTime).toFixed(0)
  return {currentTime, fps}
}
