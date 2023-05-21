var ironDiv = document.querySelectorAll(".iron-con")[0]
var ironChar = document.querySelectorAll(".iron")[0];
var spiderDiv = document.querySelectorAll(".spider-con")[0]
var spiderChar = document.querySelectorAll(".spider")[0];
var ironOriginal = ironChar.src;
var spiderOriginal = spiderChar.src;




// else if (keyPressed === "w") {
    //     setTimeout(function() {
    //         ironChar.className = "iron"
    //         ironChar.src = ironOriginal;
    //         console.log(ironChar.src);
    //     }, 3000);
        
    //     ironChar.className = "fly"
    //     ironChar.src = "gifs/ironman-fly.gif";
    //     console.log(ironChar.src);
    // }




function pressedKey(event) {
    var keyPressed = event.key;

    if (keyPressed === "e") {
        setTimeout(function() {
            ironChar.className = "iron"
            ironChar.src = ironOriginal;
            console.log(ironChar.src);
        }, 2500);

        ironChar.className = "shield"
        ironChar.src = "gifs/ironman-shields.gif";
        console.log(ironChar.src);
    }
    else if (keyPressed === "q") {
        setTimeout(function() {
            ironChar.src = ironOriginal;
            console.log(ironChar.src);
        }, 1500);

        ironChar.src = "gifs/ironman-smart.gif";
        console.log(ironChar.src);
    }
    if(keyPressed === "d") {
        var currentLeft = parseFloat(ironDiv.style.left) || 0;

        console.log(ironDiv.style.left);

        currentLeft += 2;
        ironDiv.style.left = `${currentLeft}%`;

        if(ironDiv.style.left === "80%"){
            ironDiv.style.left = "78%";
        }

    }
    if(keyPressed === "a") {
        var currentRight = parseInt(ironDiv.style.left) || 0;

        console.log(ironDiv.style.left);

        currentRight -= 2;
        ironDiv.style.left = `${currentRight}%`;

        if(ironDiv.style.left === "-2%"){
            ironDiv.style.left = "0%"
        }

    }
}

document.addEventListener("keyup", pressedKey);
