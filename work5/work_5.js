var document;
var alert;
var window;
var console;

function onClick() {
    var f1 = document.getElementById("price").value;
    var f2 = document.getElementById("num").value;
    var res = document.getElementById("result");
    res.innerHTML = "";

    if ((/\D/.test(f1)) || (/\D/.test(f2))) {
        alert("!!!Внимание!!! Поля должны содержать только целые числа");
        return;
    }

    res.innerHTML = f1 * f2;
}

window.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("but");
    console.log("DOM fully loaded and parsed");
    b.addEventListener("click", onClick);
});