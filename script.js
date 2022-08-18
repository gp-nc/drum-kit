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
        bass.style.width = '16rem';
        bass.style.height = '16rem';
        bass.style.borderColor = 'gold';


        /*-----------------------*/
        console.log('pressed');
    }
}, false);

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === ' ') {

        /*-------------------*/
        bass.style.width = '15rem';
        bass.style.height = '15rem';
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
        sym.style.width = '16rem';
        sym.style.height = '16rem';
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
        sym.style.width = '15rem';
        sym.style.height = '15rem';
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
        midTom.style.width = '16rem';
        midTom.style.height = '16rem';
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
        midTom.style.width = '15rem';
        midTom.style.height = '15rem';
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
        highTom.style.width = '16rem';
        highTom.style.height = '16rem';
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
        highTom.style.width = '13rem';
        highTom.style.height = '15rem';
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
        hiHat.style.width = '16rem';
        hiHat.style.height = '16rem';
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
        hiHat.style.width = '10rem';
        hiHat.style.height = '15rem';
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
        floorTom.style.width = '16rem';
        floorTom.style.height = '16rem';
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
        floorTom.style.width = '13rem';
        floorTom.style.height = '15rem';
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
        snareDrum.style.width = '16rem';
        snareDrum.style.height = '16rem';
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
        snareDrum.style.width = '14rem';
        snareDrum.style.height = '15rem';
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