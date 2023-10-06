var len = document.querySelectorAll(".drum").length;
//Adding mouse event listener to all 
for(var i = 0; i < len; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
                        var key = this.innerHTML;
                        findingSound(key);
                        addingAnimation(key);
                    }
            );
}

//Adding key event listener to the document 
document.addEventListener("keypress", function(event){
        findingSound(event.key);
        addingAnimation(event.key);
        });


//Created a function for finding what type of sound is that key makes
function findingSound(key){

    switch (key) {
        case "w":
            const audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            break;

        case "a":
            const audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
    
        case "s":
            const audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            const audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            const audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            const audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            const audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
            break;
    
    default: alert("Wrong One !!");
            
    
    }


}



/* Animating the drums by using setTimeout and arrow function
   And adding CSS properties by using classList methods  */
function addingAnimation(currentKey){
    var activateBtn = document.querySelector("." + currentKey);

    activateBtn.classList.add("pressed");

    setTimeout(  myfun = () => { 
        activateBtn.classList.remove("pressed");
    },150);
}





// document.querySelector(".w").addEventListener("keypress",function(){
//     const audio = new Audio("./sounds/crash.mp3");
//     audio.play();
// });

// document.querySelector(".a").addEventListener("click",function(){
//     const audio = new Audio("./sounds/kick-bass.mp3");
//     audio.play();
// });

// document.querySelector(".s").addEventListener("click",function(){
//     const audio = new Audio("./sounds/snare.mp3");
//     audio.play();
// });

// document.querySelector(".d").addEventListener("click",function(){
//     const audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// });

// document.querySelector(".j").addEventListener("click",function(){
//     const audio = new Audio("./sounds/tom-2.mp3");
//     audio.play();
// });

// document.querySelector(".k").addEventListener("click",function(){
//     const audio = new Audio("./sounds/tom-3.mp3");
//     audio.play();
// });

// document.querySelector(".l").addEventListener("click",function(){
//     const audio = new Audio("./sounds/tom-4.mp3");
//     audio.play();
// });

