var bass = document.getElementById("Bass-drum");
var midTom = document.querySelector('.mid-tom-div')
var highTom = document.querySelector('.hig-tom-div')
var hiHat = document.querySelector('.hi-hat')
var floorTom = document.querySelector('.floor-tom-div')
var snareDrum = document.querySelector('.snare-drum-button ')
var sym = document.querySelector('.sym')



/*----------------------------------*/
/*----------------------------------*/
hiHat.addEventListener('click', function() {
    var audio = new Audio("hi-hat.mp3")
    audio.volume = 1.0;
    audio.play();
})

floorTom.addEventListener('click', function() {
    var audio = new Audio("floor-tom.mp3")
    audio.volume = 1.0;
    audio.play();
})

snareDrum.addEventListener('click', function() {
    var audio = new Audio("Snare-Drum.mp3")
    audio.volume = 1.0;
    audio.play();
})

/*-------*/
sym.addEventListener('click', function() {
    var audio = new Audio("crash-cymbal.mp3")
    audio.volume = 1.0;
    audio.play();
})

midTom.addEventListener('click', function() {
    var audio = new Audio("mid-tom (1).mp3")
    audio.volume = 1.0;
    audio.play();
})

highTom.addEventListener('click', function() {
    var audio = new Audio("high-tom (1).mp3")
    audio.volume = 1.0;
    audio.play();
})


/*----------------------------------*/
/*----------------------------------*/
/*----------------------------------*/
/*----------------------------------*/
/*----------------------------------*/
/*----------------------------------*/
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === ' ') {
        var audio = new Audio("bass.mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        bass.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === ' ') {

        /*-------------------*/

        bass.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);

bass.addEventListener('click', function() {
    var audio = new Audio("bass.mp3")
    volume = 1.0;
    audio.play();
})



document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'c') {
        var sym = document.querySelector('.sym')
        var audio = new Audio("crash-cymbal.mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        sym.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var sym = document.querySelector('.sym')
    var name = event.key;
    if (name === 'c') {

        /*-------------------*/

        sym.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);

/*-------------------------------------*/
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'z') {
        var midTom = document.querySelector('.mid-tom-div')
        var audio = new Audio("mid-tom (1).mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        midTom.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var midTom = document.querySelector('.mid-tom-div')
    var name = event.key;
    if (name === 'z') {

        /*-------------------*/

        midTom.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);
/*-------------------------------------*/
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'x') {
        var highTom = document.querySelector('.hig-tom-div')
        var audio = new Audio("high-tom (1).mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        highTom.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var highTom = document.querySelector('.hig-tom-div')
    var name = event.key;
    if (name === 'x') {

        /*-------------------*/

        highTom.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'v') {
        var hiHat = document.querySelector('.hi-hat')
        var audio = new Audio("hi-hat.mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        hiHat.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var hiHat = document.querySelector('.hi-hat')
    var name = event.key;
    if (name === 'v') {

        /*-------------------*/

        hiHat.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);

/*----------------------------------------*/
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'b') {
        var floorTom = document.querySelector('.floor-tom-div')
        var audio = new Audio("floor-tom.mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        floorTom.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var floorTom = document.querySelector('.floor-tom-div')
    var name = event.key;
    if (name === 'b') {

        /*-------------------*/

        floorTom.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'n') {
        var snareDrum = document.querySelector('.snare-drum-button ')
        var audio = new Audio("Snare-Drum.mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/

        snareDrum.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var snareDrum = document.querySelector('.snare-drum-button ')
    var name = event.key;
    if (name === 'n') {

        /*-------------------*/

        snareDrum.style.borderColor = 'Black';


        /*-----------------------*/
        console.log('back');
    }
}, false);



/*-------------------------------------*/
/*-------------------------------------*/


// var clickLoop = 0

// document.addEventListener('keydown', function() {
//     var name = event.key;
//     if (name === ' ' && clickloop < 1)
//         console.log('ok')
//     clickLoop = 2
// } else {

// })

/*-------------------------------------*/
/*-------------------------------------*/