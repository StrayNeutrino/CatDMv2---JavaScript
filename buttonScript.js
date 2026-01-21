
function d20Function() {
    let num = document.getElementById("d20").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            result2 = result2 + die + ",  ";
        }
        let die2 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d20Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        document.getElementById("d20Result").innerHTML=die;
    }

}

function d4Function() {
    let num = document.getElementById("d4").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (4 - 1 + 1) + 1);
            result2 = result2 + die + ",  ";
        }
        let die2 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d4Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        document.getElementById("d4Result").innerHTML=die;
    }

}

function d6Function() {
    let num = document.getElementById("d6").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            result2 = result2 + die + ",  ";
        }
        let die2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d6Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        document.getElementById("d6Result").innerHTML=die;
    }

}

function d8Function() {
    let num = document.getElementById("d8").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            result2 = result2 + die + ",  ";
        }
        let die2 = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d8Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        document.getElementById("d8Result").innerHTML=die;
    }

}

function d10Function() {
    let num = document.getElementById("d10").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            result2 = result2 + die + ",  ";
        }
        let die2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d10Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        document.getElementById("d10Result").innerHTML=die;
    }

}

function d12Function() {
    let num = document.getElementById("d12").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            result2 = result2 + die + ",  ";
        }
        let die2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d12Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        document.getElementById("d12Result").innerHTML=die;
    }

}

function d20Refresh() {
    document.getElementById("d20Result").innerHTML = "";
    document.getElementById("d20").selectedIndex = 0;
}

function d4Refresh() {
    document.getElementById("d4Result").innerHTML = "";
    document.getElementById("d4").selectedIndex = 0;
}

function d6Refresh() {
    document.getElementById("d6Result").innerHTML = "";
    document.getElementById("d6").selectedIndex = 0;
}

function d8Refresh() {
    document.getElementById("d8Result").innerHTML = "";
    document.getElementById("d8").selectedIndex = 0;
}

function d10Refresh() {
    document.getElementById("d10Result").innerHTML = "";
    document.getElementById("d10").selectedIndex = 0;
}

function d12Refresh() {
    document.getElementById("d12Result").innerHTML = "";
    document.getElementById("d12").selectedIndex = 0;
}