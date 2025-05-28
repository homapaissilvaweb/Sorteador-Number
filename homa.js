
function GenerateNumber() {

    const min = Math.ceil(document.querySelector(".input-1").value)

    const max = Math.floor(document.querySelector(".input-2").value)

    const Result = Math.floor(Math.random() * (max - min )) + min;

    alert (Result)
}   




