$(function () {
    const $balloon = $("#balloon");
    const colors = ["red", "green", "blue"];
    let size = 200;
    let colorIndex = 0;

    function updateBalloon() {
        $balloon.css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    }

    $balloon.on("click", function () {
        size += 10;
        if (size > 420) {
            size = 200;
        }
        colorIndex = (colorIndex + 1) % colors.length;
        updateBalloon();
    });

    $balloon.on("mouseleave", function () {
        if (size > 200) {
            size -= 5;
        }
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    });

    updateBalloon();
});
