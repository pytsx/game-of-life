CreateCanvas()

let arr2D = PopulateArr(CreateArr2D(cols, rows))

function setup(){
  Observer((currentTime) => {
    generation++
    let population = 0
  
    let next = CreateArr2D(cols, rows)
    OpenArr(arr2D, (x, y, state) => {
      population += state
      let neighbors = countNeighbor(arr2D, x, y)

      // rules 
      if(state == 0 && (neighbors == 3)){
        next[x][y] = 1
      } else if(state == 1 && (neighbors < 2 || neighbors > 3)){
        next[x][y] = 0
      } else {
        next[x][y] = state
      }
    })
    arr2D = next
    lastTime = currentTime
    
    UpdateInfo("population", population)
    animate()
  })

}

function animate(){
  DrawArr(arr2D)
  setTimeout(()=> {
    requestAnimationFrame(setup)
  }, delay)
}

function Observer(callback) {
  let currentTime = new Date().getTime()
  const fps = FPS(currentTime)
  updateStats(fps, currentTime);
  callback(currentTime);
}

setup()
