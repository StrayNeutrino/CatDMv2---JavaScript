
function d20Function() {
    let num = document.getElementById("d20").value;
    
    if (num >1) {
        var result2 = "";
        for (let i=0; i<num-1; i++) {
            let die = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            result2 = result2 + die + ", ";
        }
        let die2 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        let result = result2 + die2;
        document.getElementById("d20Result").innerHTML=result;
    } else {        
        let die = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        document.getElementById("d20Result").innerHTML=die;
    }

}

function refresh() {
    document.getElementById("d20Result").innerHTML = "";
    document.getElementById("d20").selectedIndex = 0;
}