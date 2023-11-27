CreateCanvas()

let matriz2D = CreateMatriz2D(cols, rows)

function setup(){
  Observer((currentTime) => {
    generation++
    let population = 0
    const next = CreateMatriz2D(cols, rows)

    OpenMatriz(matriz2D, (x, y, state) => {
      population += state
      let neighbors = countNeighbor(matriz2D, x, y)

      // rules 
      if(state == 0 && (neighbors == 3)){
        next[x][y] = 1
      } else if(state == 1 && (neighbors < 2 || neighbors > 3)){
        next[x][y] = 0
      } else {
        next[x][y] = state
      }
    })
    matriz2D = next

    lastTime = currentTime
    UpdateInfo("population", population)
    animate()
  })
}

function animate(){
  DrawMatriz(matriz2D)
  setTimeout(()=> {
    requestAnimationFrame(setup)
  }, delay)
}

function Observer(callback) {
  const {currentTime, fps} = FPS(lastTime)
  updateStats(fps, currentTime);
  callback(currentTime);
}

setup()
