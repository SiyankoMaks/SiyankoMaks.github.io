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


function changePrice() {
    var num2 = document.getElementById("num2").value;
    var s = document.getElementsByName("prod_type");
    var select = s[0];
    var price = 0;
    var prices = getPrices();
    var price_i = parseInt(select.value) - 1;
    var radio_div = document.getElementById("rad");
    var rad = document.getElementsByName("prod_option");
    var option_price;
    var check_div = document.getElementById("ch_box");
    var ch_box = document.querySelectorAll("#ch_box input");
    var prop_price;
    var prod_price = document.getElementById("result1");

    if (price_i >= 0) {
        price = prices.prod_types[price_i];
    }

    if (select.value === "3" || select.value === "1") {
        radio_div.style.display = "none";
    } else {
        radio_div.style.display = "block";
    }

    rad.forEach(function (radio) {
        if (radio.checked) {
            option_price = prices.prod_options[radio.value];
            if (option_price !== undefined) {
                price += option_price;
            }
        }
    });

    if (select.value === "2" || select.value === "1") {
        check_div.style.display = "none";
    } else {
        check_div.style.display = "block";
    }

    ch_box.forEach(function (checkbox) {
        if (checkbox.checked) {
            prop_price = prices.prod_properties[checkbox.name];
            if (prop_price !== undefined) {
                price += prop_price;
            }
        }
    });

    prod_price.innerHTML = (price * num2);
    if (/\D/.test(num2)) {
        prod_price.innerHTML = "! Данные некорректны !";
    }

}

function getPrices() {
    return {
        prod_options: {
            opt2: 10,
            opt3: 20
        },
        prod_properties: {
            prop: 5
        },
        prod_types: [100, 300, 50]
    };
}

window.addEventListener("DOMContentLoaded", function () {

    var radio_div = document.getElementById("rad");
    var s = document.getElementsByName("prod_type");
    var select = s[0];
    var rad = document.getElementsByName("prod_option");
    var ch_box = document.querySelectorAll("#ch_box input");
    var num2 = document.getElementById("num2");

    radio_div.style.display = "none";

    select.addEventListener("change", function () {
        changePrice();
    });

    rad.forEach(function (radio) {
        radio.addEventListener("change", function () {
            changePrice();
        });
    });
    ch_box.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            changePrice();
        });
    });

    num2.oninput = function () {
        changePrice();
    };

    changePrice();
});
