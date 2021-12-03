console.log('hello');
let music = new Audio('music.wav')
let ting = new Audio('ting.wav')
let gameover = new Audio('gameover.wav')
let anywin=false
let turn = 'X'
const changeTurn= () => {
    return turn==="X"?"0":"X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,-17,5,0],
        [3,4,5,-17,15,0],
        [6,7,8,-17,25,0],
        [0,3,6,-27,15,90],
        [1,4,7,-17,15,90],
        [2,5,8,-7,15,90],
        [0,4,8,-17,15,45],
        [2,4,6,-17,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!=='')
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won"
            anywin=true
            gameover.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            console.log("hey there")
            document.querySelector(".line").style.width = "23vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            
        }
    })
}


let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '' && anywin===false)
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            ting.play();
            checkWin();
            if(!anywin)
                document.getElementsByClassName('info')[0].innerText='Turn for '+turn;
        }
    })
})

reset.addEventListener('click',(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText='';
    })
    turn='X'
    anywin=false
    document.getElementsByClassName('info')[0].innerText='Turn for '+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.querySelector(".line").style.width = "0px"
})

