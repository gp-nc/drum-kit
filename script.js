var bass = document.getElementById("Bass-drum");


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