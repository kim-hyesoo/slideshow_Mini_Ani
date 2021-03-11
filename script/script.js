$(function () {

    //    setInterval(커스텀함수명, 반복실행간격);
        setInterval(sample,3000);


    function sample() {

        $("#innerFrame").animate(
            {"margin-left": "-200px"},
            1000,
            "swing",
            function () {

                $("span:first-child").insertAfter("span:last-child");

                $("#innerFrame").css({"margin-left": "0" });
            }

        );

    } //커스텀 함수=사용자 정의 함수, 호출하기 전엔 실행 안됨

});
