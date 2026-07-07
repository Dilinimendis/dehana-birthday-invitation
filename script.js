function showEnvelope(){

    document.querySelector(".welcome").style.display="none";

    document.getElementById("envelopeScreen").style.display="flex";


    let music = document.getElementById("birthdayMusic");

    music.play();

}



function openCard(){

    document.getElementById("envelopeScreen").style.display="none";

    document.getElementById("invitation").style.display="flex";

}
let musicPlaying = false;


function toggleMusic(){

    let music = document.getElementById("birthdayMusic");


    if(musicPlaying){

        music.pause();

        musicPlaying = false;

        document.getElementById("musicBtn").innerHTML="🎵";

    }

    else{

        music.play();

        musicPlaying = true;

        document.getElementById("musicBtn").innerHTML="🔇";

    }

}
let birthdayDate = new Date("July 10, 2026 18:30:00").getTime();



setInterval(function(){


    let now = new Date().getTime();


    let distance = birthdayDate - now;



    let days = Math.floor(distance / (1000 * 60 * 60 * 24));


    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    let minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    let seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;



},1000);