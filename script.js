// Click to start animation
// Section 1 : Opening
var ball1 = document.getElementById('Ball1');
ball1.addEventListener('click', function() {

    ball1.style.opacity = 0;
    ball1.style.transition = 'opacity 1.5s ease';

    setTimeout(function() {
        var card = document.getElementById('card');
        card.style.opacity = 1;
        card.style.transition = 'opacity 2.0s ease';
    }, 2000);

    backgroundMusic = new Audio("AncientChina.mp3");
    backgroundMusic.play();
});

// Section 2 : The carp
var ball2 = document.getElementById('Ball2');
var redCarp = document.getElementById('redCarp');
ball2.addEventListener('click', function() {

    ball2.style.opacity = 0;
    ball2.style.transition = 'opacity 1.5s ease';
    redCarp.style.display = 'block';

    setTimeout(function() {
        var sea = document.getElementById('sea');
        sea.style.animation = 'zoomIn 1.5s ease-out forwards';
    }, 1500); 

    setTimeout(function() {
        redCarp.style.display = 'block';
        redCarp.style.opacity = 1;
        redCarp.style.transition = 'opacity 5.0s ease-out';
    }, 3000); 
});

// Red carp to Carp
var redCarpElement = document.getElementById('redCarp');
var carpElement = document.getElementById('carp');
redCarpElement.addEventListener('click', function() {
    redCarpElement.style.display = 'none';
    carpElement.style.display = 'block';
});

// Changing carp images
window.addEventListener('scroll', function() {
    var section3 = document.getElementById('Section3');
    var section4 = document.getElementById('Section4');
    var section5 = document.getElementById('Section5');
    var section6 = document.getElementById('Section6');
    var carp = document.getElementById('carp');

    // Get current scrolling position
    var scrollPosition = window.scrollY;

    // Get section2 till section5 offset
    var section3Offset = section3.offsetTop;
    var section4Offset = section4.offsetTop;
    var section5Offset = section5.offsetTop;
    var section6Offset = section6.offsetTop;

    if (scrollPosition <= section3Offset) {
        carp.src = "CNY_Images/Carp/a_leftCarp.png";
    } else if (scrollPosition <= section4Offset) {
        carp.src = "CNY_Images/Carp/a_rightCarp.png";
    } else if (scrollPosition <= section5Offset) {
        carp.src = "CNY_Images/Carp/a_leftCarp.png";
    } else if (scrollPosition <= section6Offset) {
        carp.src = "CNY_Images/Carp/a_rightCarp.png";
    } else {
        carp.style.opacity = '0';
        carp.style.transition = 'opacity 0.5s ease';
    } 
});

// Section 3 : Spring
var ball3 = document.getElementById('Ball3');
ball3.addEventListener('click', function() {

    ball3.style.opacity = 0;
    ball3.style.transition = 'opacity 1.5s ease';

    setTimeout(function() {
        var wS = document.getElementById('wSpring');
        wS.style.animation = 'fadeUp 3.0s ease-in forwards';
    }, 1500); 

    setTimeout(function() {
        var uS = document.getElementById('upperSpring');
        uS.style.animation = 'fadeDownLeft 3.0s ease-out forwards';
    }, 3000); 

    setTimeout(function() {
        var lS = document.getElementById('lowerSpring');
        lS.style.animation = 'fadeDownRight 3.0s ease-out forwards';
    }, 3500);

    setTimeout(function() {
        var sp = document.getElementById('spring');
        sp.style.animation = 'fadeIn 3.0s ease-out forwards';
    }, 6000);
});

// Section 4 : Summer
var ball4 = document.getElementById('Ball4');
ball4.addEventListener('click', function() {

    ball4.style.opacity = 0;
    ball4.style.transition = 'opacity 1.5s ease';

    setTimeout(function() {
        var wSu = document.getElementById('wSummer');
        wSu.style.animation = 'fadeLeft 3.0s ease-in forwards';
    }, 1500); 

    setTimeout(function() {
        var uSu = document.getElementById('upperSummer');
        uSu.style.animation = 'fadeDownRight 3.0s ease-out forwards';
    }, 3000); 

    setTimeout(function() {
        var lSu = document.getElementById('lowerSummer');
        lSu.style.animation = 'fadeDownLeft 3.0s ease-out forwards';
    }, 3500);

    setTimeout(function() {
        var su = document.getElementById('summer');
        su.style.animation = 'fadeIn 3.0s ease-out forwards';
    }, 6000);
});

// Section 5 : Autumn
var ball5 = document.getElementById('Ball5');
ball5.addEventListener('click', function() {

    ball5.style.opacity = 0;
    ball5.style.transition = 'opacity 1.5s ease';

    setTimeout(function() {
        var wA = document.getElementById('wAutumn');
        wA.style.animation = 'fadeRight 3.0s ease-in forwards';
    }, 1500); 

    setTimeout(function() {
        var uA = document.getElementById('upperAutumn');
        uA.style.animation = 'fadeDownLeft 3.0s ease-out forwards';
    }, 3000); 

    setTimeout(function() {
        var lA = document.getElementById('lowerAutumn');
        lA.style.animation = 'fadeUpRight 3.0s ease-out forwards';
    }, 3500);

    setTimeout(function() {
        var a = document.getElementById('autumn');
        a.style.animation = 'fadeIn 3.0s ease-out forwards';
    }, 6000);
});

// Section 6 : Winter
var ball6 = document.getElementById('Ball6');
ball6.addEventListener('click', function() {

    ball6.style.opacity = 0;
    ball6.style.transition = 'opacity 1.5s ease';

    setTimeout(function() {
        var wW = document.getElementById('wWinter');
        wW.style.animation = 'fadeDown 3.0s ease-in forwards';
    }, 1500); 

    setTimeout(function() {
        var uW = document.getElementById('upperWinter');
        uW.style.animation = 'fadeDownRight 3.0s ease-out forwards';
    }, 3000); 

    setTimeout(function() {
        var lW = document.getElementById('lowerWinter');
        lW.style.animation = 'fadeUpLeft 3.0s ease-out forwards';
    }, 3500);

    setTimeout(function() {
        var a=w = document.getElementById('winter');
        w.style.animation = 'fadeIn 3.0s ease-out forwards';
    }, 6000);
});

// Section 7 : Dragon gate
var ball7 = document.getElementById('Ball7');
ball7.addEventListener('click', function() {

    ball7.style.opacity = 0;
    ball7.style.transition = 'opacity 1.5s ease';

    setTimeout(function() {
        var wDG = document.getElementById('wDragonGate');
        wDG.style.animation = 'fadeUp 3.0s ease-in forwards';
    }, 1500); 

    setTimeout(function() {
        var dG = document.getElementById('dragonGate');
        dG.style.animation = 'fadeUp 3.0s ease-out forwards';

        setTimeout(function() {
            dG.style.animation = 'floating 3.0s infinite';
        }, 2500);
    }, 5000); 

    setTimeout(function() {
        waterSplash = new Audio("waterSplash.mp3");
        waterSplash.play();
        waterSplash.onended = function() {
        waterSplash.pause();
        };
    }, 8500);

    setTimeout(function() {
        var bC = document.getElementById('bounceCarp');
        bC.style.animation = 'fadeDown 0.5s ease-in forwards';

        setTimeout(function() {
            bC.style.animation = 'floating 3.0s infinite';
        }, 1500);
    }, 9000);
});

// Section 8 : Dragon
var Dragon1 = document.getElementById('Dragon1');
var Dragon2 = document.getElementById('Dragon2');
var dragon = document.getElementById('dragon');

var cloud = document.getElementById('aCloud');
cloud.addEventListener('click', function() {
    cloud.style.opacity = 0;
    cloud.style.transition = 'opacity 1.5s ease';
    
    dragonHowl = new Audio("dragonSound.mp3");
    dragonHowl.play();
    dragonHowl.onended = function() {
        dragonHowl.pause();
    };

    setTimeout(function() {
        var wDragon = document.getElementById('wDragon');
        wDragon.style.opacity = 1;
        wDragon.style.transition = 'opacity 2.0s ease';
    }, 2000); 

    setTimeout(function() {
        var Dragon1 = document.getElementById('Dragon1');
        Dragon1.style.opacity = 1;
        Dragon1.style.transition = 'opacity 3.0s ease';
    }, 4500);

    setTimeout(function() {
        var Dragon2 = document.getElementById('Dragon2');
        Dragon2.style.opacity = 1;
        Dragon2.style.transition = 'opacity 4.0s ease';
    }, 7000); 

    setTimeout(function() {
        var dragon = document.getElementById('dragon');
        dragon.style.opacity = 1;
        dragon.style.transition = 'opacity 5.0s ease';

        setTimeout(function() {
            dragon.style.animation = 'floating 3.0s infinite';
        }, 5000);
        
    }, 11000);

    setTimeout(function() {
        var text = document.getElementById('text');
        text.style.opacity = 1;
        text.style.transition = 'opacity 6.0s ease';
    }, 16000); 
});

// Section 9 : Share E-card to WhatsApp
function sendToWhatsapp() {
    let recipient = document.getElementById('recipient').value;
    let number = document.getElementById('number').value;

    var url = window.location.href;
    var message = encodeURIComponent("Gong Xi Fa Cai! Happy CNY! Click this link to reveal the surprise: " + url + "\n");
    var whatsappUrl = 'https://wa.me/' + encodeURIComponent(number) + "?text=" + message;

    window.open(whatsappUrl, '_blank');

    // Adding the recipient name into greetings text
    var greetingText = document.getElementById("text");
    greetingText.innerHTML = "To: " + recipient + " " + greetingText;
    }
