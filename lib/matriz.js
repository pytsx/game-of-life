function CreateMatriz2D(matrizCols, matrizRows){
  let arr = new Array(matrizCols)
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(matrizRows) 
  }
  return arr
}

function PopulateMatriz(matriz = [[]]){
  for(let x = 0; x < matriz[0].length; x++){
    for(let y = 0; y < matriz.length; y++){
      matriz[x][y] = RBinary()
    }
  }
  return matriz
}

function OpenMatriz(matriz = [[]], callback){
  matriz.forEach((cols, x) => {
    cols.forEach((unity, y) =>{
      callback(x, y, unity)
    })
  })
}

function DrawMatriz(matriz = [[]]) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  OpenMatriz(matriz, (x, y, unity) =>{
    if(unity != 0){
      DrawCel(x, y)
    }
  })
}

function countNeighbor(matriz, x, y){
  let sum = 0
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      const neighborX = (i + x + cols) % cols
      const neighborY = (j + y + rows) % rows
      sum += matriz[neighborX][neighborY]
    }
  }

  sum -= matriz[x][y]
  return sum
}
