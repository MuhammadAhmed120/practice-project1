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
            ironChar.className = "iron";
            ironChar.src = ironOriginal;
            console.log(ironChar.src);
        }, 2500);

        ironChar.className = "shield";
        ironChar.src = "gifs/ironman-shields.gif";
        console.log(ironChar.src);
    }
    if (keyPressed === "q") {
        setTimeout(function() {
            ironChar.src = ironOriginal;
            console.log(ironChar.src);
        }, 1500);

        ironChar.src = "gifs/ironman-smart.gif";
        console.log(ironChar.src);
    }

    var parentWidth = ironDiv.parentElement.offsetWidth;

    if(keyPressed === "d") {
        var currentLeft = parseFloat(getComputedStyle(ironDiv).left); // left value in pixels.
        var percentLeft = Math.floor((currentLeft / parentWidth) * 100); // converting px into percentage

        percentLeft += 3;
        ironDiv.style.left = `${percentLeft}%`;

        if(ironDiv.style.left === "81%"){
            ironDiv.style.left = "78%";
        }
        console.log(percentLeft)
    }

    if(keyPressed === "a") {
        var currentRight = parseFloat(getComputedStyle(ironDiv).left); // left value in pixels
        var percentRight = Math.floor((currentRight / parentWidth) * 100);
        percentRight -= 3;
        ironDiv.style.left = `${percentRight}%`;

        if(ironDiv.style.left === "-3%"){
            ironDiv.style.left = "0%"
        }

    }
}

document.addEventListener("keyup", pressedKey);