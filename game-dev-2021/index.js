'use strict';
// If your solution needs to add any
// listeners do so here
function init() {
    const nick = document.querySelector('#nick');
    nick.addEventListener("input", nickChanged);

    const angle = document.querySelector('#angle');
    angle.addEventListener("input", degreeupdate)
}


function degreeupdate(){
    const degrees = document.querySelector('degrees');
    degrees.value = parseInt(angle.value * 180 / Math.PI);
    console.log(1)
}

function nickChanged(){
    const input = document.querySelector('#nick');
    const name = document.querySelector('#playername');
    name.innerHTML = input.value;
}


function updateLeaderBoard(names, me){
    const leaderboard = document.getElementById('top10')
    leaderboard.innerHTML=""
    for (let i = 0; i < names.length && i < 10; i++){
        let li = document.createElement('li');
        li.append(names[i]);
        if (me === names[i]){
            li.classList.add('myself');
        }
        leaderboard.appendChild(li);
    }
}

function updateStep(){
    const scalerange = document.getElementById('scalerange');
    step = Number(scalerange.value);
}

function leaders(max){
    const top10 = document.querySelector('#top10');
    let namearr = [];
    let loopval = 0;

    if(max < top10.children.length){
        loopval = max;
    }
    else {
        loopval = top10.children.length;
    }
    for(let i = 0; i < loopval; i++){
        namearr.push(top10.children[i].innerHTML)
    }
    return namearr;
    }





// Here you should add any other
// code, functions, etc.

/** i.e. replace this line with your many lines of code */

// Don't edit below this line
window.addEventListener('load', init);

