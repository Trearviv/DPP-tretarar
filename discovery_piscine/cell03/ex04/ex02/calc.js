document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        alert("Please, use me...");
    }, 30000);

    const form = document.getElementById('calcForm');
    if (!form) {
        console.error('Form with id="calcForm" not found. Check your HTML.');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const leftInput = document.getElementById('leftMember').value.trim();
        const rightInput = document.getElementById('rightMember').value.trim();
        const operator = document.getElementById('operator').value;

        if (!/^\d+$/.test(leftInput) || !/^\d+$/.test(rightInput)) {
            alert("Error :(");
            return;
        }

        const left = Number(leftInput);
        const right = Number(rightInput);

        if ((operator === '/' || operator === '%') && right === 0) {
            alert("It’s over 9000!");
            return;
        }

        let result;
        switch (operator) {
            case '+': result = left + right; break;
            case '-': result = left - right; break;
            case '*': result = left * right; break;
            case '/': result = left / right; break;
            case '%': result = left % right; break;
            default:
                alert("Error :(");
                return;
        }

        alert(result);
        console.log(result);
    });
});