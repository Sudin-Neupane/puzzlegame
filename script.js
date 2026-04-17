const puzzle = document.getElementById("puzzle")

let tiles = [
0,1,2,3,
4,5,6,7,
8,9,10,11,
12,13,14,""
]

function drawBoard(){
puzzle.innerHTML=""

tiles.forEach((value,index)=>{
let tile=document.createElement("div")
tile.classList.add("tile")

if(value===""){
tile.classList.add("empty")
}else{
let row=Math.floor(value/4)
let col=value%4

tile.style.backgroundPosition =
`${-col*100}px ${-row*100}px`

tile.addEventListener("click",()=>moveTile(index))
}

puzzle.appendChild(tile)
})
}

function moveTile(index){
let emptyIndex=tiles.indexOf("")
let valid=[index-1,index+1,index-4,index+4]

if(valid.includes(emptyIndex)){
[tiles[index],tiles[emptyIndex]] =
[tiles[emptyIndex],tiles[index]]

drawBoard()
checkWin()
}
}

function shuffle(){
tiles.sort(()=>Math.random()-0.5)
drawBoard()
}

function checkWin(){
let win=[
0,1,2,3,
4,5,6,7,
8,9,10,11,
12,13,14,""
]

if(JSON.stringify(tiles)===JSON.stringify(win)){
document.getElementById("message").innerText="🎉 Puzzle Completed!"
}
}

drawBoard()