// Assignment 2: Callback Function and Advanced HTML DOM

function ajax(src, callback){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
            console.log(xhr.responseText);
        }
    }
    xhr.open('GET', 'https://appworks-school.github.io/Remote-Aassigiment-Data/products');
    xhr.send();
}
function render(data){
    const mainUl = document.getElementById("mainUl");
    const dataObject = JSON.parse(data)
    console.log(typeof dataObject);
    dataObject.forEach(data => {
        console.log(data);
        const ul = document.createElement("ul");
        for (const [key, value] of Object.entries(data)) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`${key}: ${value}`));
            ul.appendChild(li);
          }
        mainUl.appendChild(ul);
        const hr = document.createElement("hr");
        mainUl.appendChild(hr);
    });

} 
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
    function(response){
        render(response); 
    }
); // you should get product information in JSON format and render data in the page

