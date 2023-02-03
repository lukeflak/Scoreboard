let scorehomepoints = 0;
let scoreguestpoints = 0;



function plusonehome () {
    scorehomepoints += 1;
    if (scorehomepoints < 10) {
            document.getElementById('scorehome').innerText = "0" + scorehomepoints;
    }else {
            document.getElementById('scorehome').innerText = scorehomepoints;
    };  
    leader()
}

function plustwohome () {
    scorehomepoints += 2;
    if (scorehomepoints < 10) {
            document.getElementById('scorehome').innerText = "0" + scorehomepoints;
    }else {
            document.getElementById('scorehome').innerText = scorehomepoints;
    };  
    leader()
}

function plusthreehome () {
    scorehomepoints += 3;
    if (scorehomepoints < 10) {
            document.getElementById('scorehome').innerText = "0" + scorehomepoints;
    }else {
            document.getElementById('scorehome').innerText = scorehomepoints;
    };  
    leader()        
}

function plusoneguest () {
    scoreguestpoints += 1;
    if (scoreguestpoints < 10) {
            document.getElementById('scoreguest').innerText = "0" + scoreguestpoints;
    }else {
            document.getElementById('scoreguest').innerText = scoreguestpoints;
    };  
    leader()        
}

function plustwoguest () {
    scoreguestpoints += 2;
    if (scoreguestpoints < 10) {
            document.getElementById('scoreguest').innerText = "0" + scoreguestpoints;
    }else {
            document.getElementById('scoreguest').innerText = scoreguestpoints;
    }; 
    leader()         
}

function plusthreeguest () {
    scoreguestpoints += 3;
    if (scoreguestpoints < 10) {
            document.getElementById('scoreguest').innerText = "0" + scoreguestpoints;
    }else {
            document.getElementById('scoreguest').innerText = scoreguestpoints;
    };  
    leader()        
}


function over () {
    scoreguestpoints = 0;
    scorehomepoints = 0;
    document.getElementById('scoreguest').innerText = scoreguestpoints;
    document.getElementById('scorehome').innerText = scorehomepoints;
    document.getElementById('h3home').style.textShadow =  'yellow 0px 0px 0px';
    document.getElementById('h3guest').style.textShadow = 'yellow 0px 0px 0px';
}



function leader () {
    if (scorehomepoints > scoreguestpoints) {
            document.getElementById('h3home').style.textShadow = 'yellow 0px 0px 45px';
            document.getElementById('h3guest').style.textShadow = 'yellow 0px 0px 0px';

    } else if (scorehomepoints < scoreguestpoints) {
            document.getElementById('h3home').style.textShadow = 'yellow 0px 0px 0px';
            document.getElementById('h3guest').style.textShadow = 'yellow 0px 0px 45px';

    } else {
            document.getElementById('h3home', 'h3guest').style.textShadow = 'yellow 0px 0px 45px';
    }   
}





