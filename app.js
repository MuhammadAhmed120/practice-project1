var ironDiv = document.querySelectorAll(".iron-con")[0]
var ironChar = document.querySelectorAll(".iron")[0];
var spiderDiv = document.querySelectorAll(".spider-con")[0]
var spiderChar = document.querySelectorAll(".spider")[0];
var ironOriginal = ironChar.src;
var spiderOriginal = spiderChar.src;









function pressedKey(event) {
    var keyPressed = event.key;
    var parentWidth = ironDiv.parentElement.offsetWidth;



    // MOVEMENT - IRONMAN
    if(keyPressed === "d") {
        var currentLeft = parseFloat(getComputedStyle(ironDiv).left); // left value in pixels.
        var percentLeft = Math.floor((currentLeft / parentWidth) * 100); // converting px into percentage

        percentLeft += 3;
        ironDiv.style.left = `${percentLeft}%`;

        if(ironDiv.style.left === "81%"){
            ironDiv.style.left = "78%";
        }
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

    // COMBAT - IRONMAN
    if (keyPressed === "q") {
        setTimeout(function() {
            ironChar.classList = "iron"
            ironChar.src = ironOriginal;
        }, 1500);

        ironChar.className = "smart"
        ironChar.src = "gifs/ironman-smart.gif";
    }

    if (keyPressed === "e") {
        setTimeout(function() {
            ironChar.className = "iron";
            ironChar.src = ironOriginal;
        }, 2500);

        ironChar.className = "shield";
        ironChar.src = "gifs/ironman-shields.gif";
    }

    if (keyPressed === "f") {
        setTimeout(function() {
            ironChar.className = "iron";
            ironChar.src = ironOriginal;
        }, 5000);

        ironChar.className = "crouch";
        ironChar.src = "gifs/ironman-crouch.gif";
    }

    if (keyPressed === "w") {
        setTimeout(function() {
            ironChar.className = "iron"
            ironChar.src = ironOriginal;
        }, 3000);
        
        ironChar.className = "fly"
        ironChar.src = "gifs/ironman-fly.gif";
    }







    // MOVEMENT - SPIDERMAN
    if(keyPressed === "ArrowLeft"){
        var currentRight = parseFloat(getComputedStyle(spiderDiv).right);
        var percentRight = Math.floor((currentRight / parentWidth) * 100);
        percentRight += 3;
        spiderDiv.style.right = `${percentRight}%`;
        
        if(spiderDiv.style.right === "75%"){
            spiderDiv.style.right = "72%";
        }
    }

    if(keyPressed === "ArrowRight"){
        var currentLeft = parseFloat(getComputedStyle(spiderDiv).right);
        var percentLeft = Math.floor((currentLeft / parentWidth) * 100);
        percentLeft -= 3;
        spiderDiv.style.right = `${percentLeft}%`;

        if(spiderDiv.style.right === "-3%"){
            spiderDiv.style.right = "0%";
        }
    }



    // COMBAT - SPIDERMAN
    if(keyPressed === "1"){
        setTimeout(function(){
            spiderChar.className = "spider";
            spiderChar.src = spiderOriginal;
        }, 2250)

        spiderChar.className = "sting";
        spiderChar.src = "gifs/spiderman-sting.gif";
    }
    if(keyPressed === "2"){
        setTimeout(function(){
            spiderChar.className = "spider";
            spiderChar.src = spiderOriginal;
        }, 1000)

        spiderChar.className = "webball";
        spiderChar.src = "gifs/spiderman-webball.gif";
    }

    if(keyPressed === "3"){
        setTimeout(function(){
            spiderChar.className = "spider";
            spiderChar.src = spiderOriginal;
        }, 1000)

        spiderChar.className = "lowblock";
        spiderChar.src = "gifs/spiderman-lowblock.gif";
    }

    if(keyPressed === "ArrowDown"){
        setTimeout(function(){
            spiderChar.className = "spider";
            spiderChar.src = spiderOriginal;
        }, 2300)

        spiderChar.className = "usegem";
        spiderChar.src = "gifs/spiderman-usegem.gif";
    }
}

document.addEventListener("keyup", pressedKey);