function myfunc() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;
}
if (b1.toLowerCase() == 'x' && b2.toLowerCase() == 'x' && b3.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b4.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b6.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b7.toLowerCase() == 'x' && b8.toLowerCase() == 'x' && b9.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b1.toLowerCase() == 'x' && b4.toLowerCase() == 'x' && b7.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b2.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b8.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b3.toLowerCase() == 'x' && b6.toLowerCase() == 'x' && b9.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b1.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b9.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
} else if (b3.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b7.toLowerCase() == 'x') {
    window.alert('You are a winner');
    reset();
}
if (b1.toLowerCase() == 'o' && b2.toLowerCase() == 'o' && b3.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b4.toLowerCase() == 'o' && b5.toLowerCase() == 'o' && b6.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b7.toLowerCase() == 'o' && b8.toLowerCase() == 'o' && b9.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b1.toLowerCase() == 'o' && b4.toLowerCase() == 'o' && b7.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b2.toLowerCase() == 'o' && b5.toLowerCase() == 'o' && b8.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b3.toLowerCase() == 'o' && b6.toLowerCase() == 'o' && b9.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b1.toLowerCase() == 'o' && b5.toLowerCase() == 'o' && b9.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
} else if (b3.toLowerCase() == 'o' && b5.toLowerCase() == 'o' && b7.toLowerCase() == 'o') {
    window.alert('You are a winner');
    reset();
}

function reset() {
    location.reload();
    resetElementValue("b1");
    resetElementValue("b2");
    resetElementValue("b3");
    resetElementValue("b4");
    resetElementValue("b5");
    resetElementValue("b6");
    resetElementValue("b7");
    resetElementValue("b8");
    resetElementValue("b9");
}

function resetElementValue(elementId) {
    document.getElementById(elementId).value = "";
}

let flag = 1;

function setValue() {
    if (flag === 1) {
        this.value = "X";
        this.disabled = true;
        flag = 0;
    } else {
        this.value = "0";
        this.disabled = true;
        flag = 1;
    }
}