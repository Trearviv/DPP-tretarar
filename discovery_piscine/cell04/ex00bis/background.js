$(function () {
    const $button = $("#btn");
    let size = 16;

    function randomNumber() {
        return Math.floor(Math.random() * 256);
    }

    function changeColor() {
        const color = "rgb(" + randomNumber() + ", " +
            randomNumber() + ", " + randomNumber() + ")";
        $("body").css("background-color", color);
    }

    $button.on("click", function () {
        changeColor();
        size = size >= 40 ? 16 : size + 4;
        $button.css("font-size", size + "px");
    });

    changeColor();
});
