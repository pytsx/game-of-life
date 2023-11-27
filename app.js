CreateCanvas()

const infosContainer = document.querySelector("#infos")
infos.forEach(info => CreateInfo(infosContainer, info.label, info.id))

const initDelay = 30
let delay = initDelay

let matriz2D = CreateMatriz2D(cols, rows)
let startAt = new Date().getTime()
let lastTime = startAt
let frame = 0

function setup(){
  let population = 0
  Observer((currentTime) => {
    const next = CreateMatriz2D(cols, rows)

    OpenMatriz(matriz2D, (x, y, state) => {
      population += state
      let neighbors = countNeighbor(matriz2D, x, y)
      // rules 
      if(state == 0 && neighbors == 3){
        next[x][y] = 1
      } else  if(state == 1 && (neighbors < 2 || neighbors > 3)){
        next[x][y] = 0
      } else {
        next[x][y] = state
      }
    })
    matriz2D = next

    lastTime = currentTime
  })
  UpdateInfo("population", population)
  animate()
}

let running = true
function animate(){
  if(running){
    DrawMatriz(matriz2D)
    setTimeout(()=> {
      requestAnimationFrame(setup)
    }, delay)
  }
}


function updateStats(fps, currentTime) {
  handleFrame();
  handleFPS(fps);
  observeFPS(fps);
  UpdateInfo("delay", delay)
  UpdateInfo("resolution", resolution)
  UpdateInfo("conter", Math.floor(Math.abs(startAt - currentTime) / 60))
}

function handleFPS(){
  let currentTime = new Date().getTime()
  let elapsedTime = currentTime - lastTime
  const fps = 1000 / elapsedTime
  UpdateInfo("fps", fps)

  return {currentTime, fps}
}

function handleFPS(fps) {
  UpdateInfo("fps", fps.toFixed(0))
}

function handleFrame(){
  frame++
  UpdateInfo("generation", frame)
}

function observeFPS(fps) {

  if (fps < 6) {
    delay = initDelay * 3
    resolution = initResolution * 3
  }  else {

    delay = initDelay 
    resolution = initResolution
  }
}

function Observer(callback) {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - lastTime;
  const fps = 1000 / elapsedTime;

  updateStats(fps, currentTime);
  callback(currentTime);
}

setup()
