CreateCanvas()

const infosEl = document.querySelector("#infos")
CreateInfo(infosEl, "fps: ", "fps")
CreateInfo(infosEl, `n<sup>0</sup> frame: `, "frames")
CreateInfo(infosEl, `delay: `, "delay")
CreateInfo(infosEl, `resolution: `, "resolution")
CreateInfo(infosEl, `population: `, "population")

let delay = 15


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


function updateStats(fps) {
  handleFrame();
  handleFPS(fps);
  observeFPS(fps);
  UpdateInfo("delay", delay)
  UpdateInfo("resolution", resolution)
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
  UpdateInfo("frames", frame)
}

function observeFPS(fps) {

  if (fps < 10) {
    delay = 50
    resolution = 5
  }  else {
    delay = 15
    resolution = 3
  }
}

function Observer(callback) {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - lastTime;
  const fps = 1000 / elapsedTime;

  updateStats(fps);
  callback(currentTime);
}

setup()
