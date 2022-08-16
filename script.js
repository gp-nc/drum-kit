var bass = document.getElementById("Bass-drum");


document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === ' ') {
        var audio = new Audio("bass.mp3")
        audio.volume = 1.0;
        audio.play();
        /*-------------------*/



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