
function GenerateNumber() {

    const min = Math.ceil(document.querySelector(".input-1").value)

    const max = Math.floor(document.querySelector(".input-2").value)


    if (max > min) { 
        const Result = Math.floor(Math.random() * (max - min)) + min; 

         alert(Result) }

    else { alert('O valor minimo tem que ser MENOR que o valor maximo ') }

   

}



