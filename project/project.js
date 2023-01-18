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
    $(".second").slideToggle(400);
});

$("#mobile-menu-btn").on("click", function(e) {
    e.preventDefault;
    $(".menu").slideToggle(400);
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

$("#na").change(function () {
	    
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
$("#em").change(function () {
	    
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
$("#me").change(function () {
	    
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
$("#ph").change(function () {
	    
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
$("#check").change(function () {
	    
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
    $('#send11').text('Идет отправка формы...')
    $('#send11').attr('disabled', true);
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

//



$("#send11").click(function (e) {
    e.preventDefault();
	let newForm = {
    name: localStorage.getItem("name"),
    phone: localStorage.getItem("tele"),
    email: localStorage.getItem("emai"),
    message: localStorage.getItem("mess"),
    checkbox: localStorage.getItem("check")
}
    if(num_err == 0){
        return fetch('https://formcarry.com/s/5xsi9IFHt7/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json;charset=utf-8'},
            body: JSON.stringify(newForm),
        })
        .then(function (response) { // Функция срабатывает при успешной отправке
            alert('Форма отправлена', response);
            $('#send11').text('Отправить');
            $('#send11').attr('disabled', false);
        })
        .catch(function (Error) { // Функция срабатывает при ошибке
            alert('Ошибка отправки!', Error);
            $('#send11').text('Отправить');
            $('#send11').attr('disabled', false);
        })
    }
    document.querySelector("#check").checked = false;
});


