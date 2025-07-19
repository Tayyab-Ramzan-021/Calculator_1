function append(val) {
    document.getElementById("inputBox").value += val;
}

function delAll() {
    document.getElementById("inputBox").value = "";
}

function backSpace() {
    const result = document.getElementById("inputBox");
    result.value = result.value.slice(0, -1);
}

function result() {
    try {
        const result = document.getElementById("inputBox");
        result.value = eval(result.value);
    } catch {
        alert("Invalid Expression");
    }
}
