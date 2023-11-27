function CreateArr2D(arrCols, arrRows){
  let arr = new Array(arrCols)
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(arrRows) 
  }
  return arr
}

function PopulateArr(arr = [[]]){
  for(let x = 0; x < arr[0].length; x++){
    for(let y = 0; y < arr.length; y++){
      arr[x][y] = RBinary()
    }
  }
  return arr
}

function OpenArr(arr = [[]], callback){
  arr.forEach((cols, x) => {
    cols.forEach((unity, y) =>{
      callback(x, y, unity)
    })
  })
}

function DrawArr(arr = [[]]) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  OpenArr(arr, (x, y, unity) =>{
    if(unity != 0){
      DrawCel(x, y)
    }
  })
}

function countNeighbor(arr, x, y){
  let sum = 0
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      const neighborX = (i + x + cols) % cols
      const neighborY = (j + y + rows) % rows
      sum += arr[neighborX][neighborY]
    }
  }

  sum -= arr[x][y]
  return sum
}
