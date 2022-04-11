const btn = document.getElementById("enterBtn");

const sumAfterClick =() => {
    const showAnswer = document.querySelector("h2");
    const input = document.getElementById("enterNumber");

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            const answerText = xhr.responseText.replace("<h1>","").replace("</h1>","");
            console.log(answerText);
            if(inputValue > 3){
                showAnswer.innerText = `1+2+...+${inputValue} = ${answerText}`;
            }else if(inputValue === 3){
                showAnswer.innerText = `1+2+3 = ${answerText}`;
            }else if(inputValue === 2){
                showAnswer.innerText = `1+2 = ${answerText}`;
            }else if(inputValue === 1){
                showAnswer.innerText = "1";
            }
        }
    }
    xhr.open('GET',`http://localhost:3000/getData?number=${input.value}`);
    xhr.send();
    const inputValue = Number(input.value);
    input.value = "";
}

btn.addEventListener("click", sumAfterClick);