
function RBinary(){
  return Math.floor(Math.random() * 2)
}

function DrawCel(x, y){
  Fill()
  Rect(x * resolution, y * resolution, resolution)
}

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

function AppendArray(parent, arr = []){
  arr.forEach(el => {
    parent.appendChild(el)
  })
}

function BtnSetter(infoContainer, label, id){
  const container = document.createElement("div")
  container.classList.add("btns_container")

  const value = document.createElement("span")
  value.setAttribute("id", id)
  
  const placeholder = document.createElement("span")
  placeholder.innerHTML = label

  const addbtn = CreateBtn("+", id + "_add" )
  const delbtn = CreateBtn("-", id + "_del")

  AppendArray(container, [delbtn, value, addbtn])
  AppendArray(infoContainer, [placeholder, container])

  return {addbtn, delbtn}
}

function UpdateBtn(id, newValue){
  const input = document.getElementById(id + "_btn")
  input.setAttribute("value", newValue)
}

function FPS(currentTime){
  let elapsedTime = currentTime - lastTime
  const fps = (1000 / elapsedTime).toFixed(2)
  return fps
}

function ClickListener(element, callback){
  element.addEventListener("click", callback)
}

function ControllerListener(controller){
  ClickListener(controller.element, ()=>{
    controller.action()
    UpdateInfo(controller.updateId, controller.variable)
  })
}
