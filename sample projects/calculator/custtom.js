//clear
document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#display').value = " ";
})

//backspace
const backspace = () => {
    const num = document.querySelector('#display').value.slice(0, -1);
    document.querySelector('#display').value = num;
}

//one func
const one = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "1";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "1";
    }
}

//two func
const two = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "2";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "2";
    }
}

//three func
const three = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "3";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "3";
    }
}

//four func
const four = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "4";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "4";
    }
}

//five func
const five = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "5";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "5";
    }
}

//six func
const six = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "6";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "6";
    }
}

//seven func
const seven = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "7";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "7";
    }
}

//eight func
const eight = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "8";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "8";
    }
}

//nine func
const nine = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "9";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "9";
    }
}

//zero func
const zero = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "0";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + "0";
    }
}

//point func
const point = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = ".";
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + ".";
    }
}