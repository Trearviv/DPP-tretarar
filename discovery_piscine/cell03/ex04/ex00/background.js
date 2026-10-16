const btn =document.getElementById("btn");
let size = 16
let randomNum = () => {
    return Math.floor(Math.random() * 256);
}
let changeColor = () => {
    let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
}
btn.addEventListener("click", () => {
    changeColor();
    size = size >= 40 ? 16 : size + 4;
    btn.style.fontSize = size + "px";
});
window.addEventListener("load", changeColor);
