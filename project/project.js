/*global $, Slapform */
// Авто-прокрутка слайдера 1

$(function(){
    $(".slayder_body1").jCarouselLite({
		circular: true,
		visible: 7,
        auto: 2000,
        speed: 1000
    });
});

// Авто-прокрутка слайдера 2
$(function(){
    $(".slayder_body2").jCarouselLite({
		circular: true,
		visible: 8,
        auto: 2000,
        speed: 1000
    });
});




/* 8. Блок - Отзывы */
$(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});

// Блок - подвал
$("#send1").click(function () {
    document.querySelector("#happy").checked = false;

    let slapform = new Slapform();
    $("#send1").prop("disabled", true);
    slapform.submit({
        form: "vog0f58Vj"
        }).then(function () {
            alert("successful sending!");
        }).catch(function () {
            alert("sending failed");
        });
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    return false;
});

$("#nav").on("click", function() {
    $(".second").toggle();
});


// Блок - фиксированная форма

function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

$("#open-form").on("click", function() {
		if (document.querySelector(".form11").style.display == "none")
		openForm();
	else
		openHome();
	
    $(".form11").toggle(400);
	   document.querySelector("#na").value = localStorage.getItem("name");
            document.querySelector("#em").value = localStorage.getItem("emai");
            document.querySelector("#me").value = localStorage.getItem("mess");        
	    document.querySelector("#ph").value = localStorage.getItem("tele");
});

$("#na, #em, #me, #ph, #check").change(function () {
	    
    var nam = $("#na").val();
    var email = $("#em").val();
    var mes = $("#me").val();
    var tel = $("#ph").val();
    var check = $("#check").prop("checked");
    localStorage.setItem("name", nam);
    localStorage.setItem("emai", email);
    localStorage.setItem("mess", mes);
	localStorage.setItem("tele", tel);
    if (check) {
        localStorage.setItem("check", true);
    } else {
        localStorage.setItem("check", false);
    } 
    return false;
});

// Работа с выпадающей формой с помощью fetch

// Отработка ошибок

var click_form = document.getElementById('send11');
var num_err = 0;
click_form.onclick = function() {
    num_err = 0;
    let str_err='';
    var nam = document.getElementById('na');
    if(!nam.value){str_err = 'Заполните поле - Имя\n'; num_err++;}
    var phon = document.getElementById('ph');
    if(!phon.value){str_err += 'Заполните поле - Номер\n'; num_err++;}
    var mail = document.getElementById('em');
    if(!mail.value){str_err += 'Заполните поле - Email\n'; num_err++;} 
    var comm = document.getElementById('me');
    if(!comm.value){str_err += 'Заполните поле - Сообщение\n'; num_err++;}
    var box = document.getElementById('check');
    if(!box.checked){str_err += 'Заполните поле - Согласие на обработку данных\n'; num_err++;}
    if(num_err!=0){alert('!!!Исправьте ошибки!!!\n' + str_err); return false;}    
}

let newForm = {
    name: document.getElementById('na').value,
    phone: localStorage.getItem("tele"),
    email: localStorage.getItem("Email"),
    message: localStorage.getItem("comment"),
    checkbox: localStorage.getItem("check")
}

$("#send11").click(function (e) {
    e.preventDefault();
    if(num_err == 0){
        return fetch('https://formcarry.com/s/E0yn0irn5E/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json;charset=utf-8'},
            body: JSON.stringify(newForm),
        })
        .then(function (response) { // This function runs only on success
            alert('Форма отправлена', response);
            alert(JSON.stringify(newForm));
        })
        .catch(function (Error) { // This function runs only on error
            alert('Ошибка отправки!', Error);
        })
    }
    document.querySelector("#check").checked = false;
});
