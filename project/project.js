// Авто-прокрутка слайдера2

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







$("#send1").click(function () {
	document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.querySelector("#happy").checked = false;

    var slapform = new Slapform();
    $("#send1").prop("disabled", true);
    slapform.submit({
        form: "vog0f58Vj"
        }).then(function () {
            alert("successful sending!");
        }).catch(function () {
            alert("sending failed");
        });
     return false;
});
