$(function () {
    function calculate() {
        const leftText = $("#left-number").val();
        const rightText = $("#right-number").val();
        const operator = $("#operator").val();
        const left = Number(leftText);
        const right = Number(rightText);

        if (leftText === "" || rightText === "" ||
            !Number.isInteger(left) || !Number.isInteger(right) ||
            left < 0 || right < 0 || left > 10 || right > 10) {
            alert("Error : (");
            return;
        }

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch (operator) {
            case "+":
                result = left + right;
                break;
            case "-":
                result = left - right;
                break;
            case "*":
                result = left * right;
                break;
            case "/":
                result = left / right;
                break;
            case "%":
                result = left % right;
                break;
            default:
                alert("Error : (");
                return;
        }

        alert(String(result));
        console.log(result);
    }

    $("#calculate").on("click", calculate);

    $(document).on("keydown", function (event) {
        if (event.key === "Enter") {
            calculate();
        }
    });

    window.setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
