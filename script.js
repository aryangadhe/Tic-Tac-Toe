let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");
let turn0 = true; 
let count = 0;
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        } else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = winner();
        if(count === 9 && !isWinner)
        gameDraw();
    });
});
const gameDraw = () =>{
    msg.innerText = "Game Drawn";
    msgCont.classList.remove("hide");
    disable();

}
const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const show = (win) => {
    msg.innerHTML =`Winner is ${win}`;
    msgCont.classList.remove("hide");
    disable();
}
const winner = () =>{
    for(pattern of wins){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner", pos1);
                show(pos1);
        }
        

    }
    }}
const resetGame = () =>{
    turn0 = false;
    enable();
    msgCont.classList.add("hide");
}
newGameBtn.addEventListener("click", resetGame); 
resetBtn.addEventListener("click", resetGame);      