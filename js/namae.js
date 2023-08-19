document.addEventListener("DOMContentLoaded", function() {
    const nameStorage = localStorage.getItem("nameStorage");
    if(nameStorage) {
        document.querySelector("#kiminonawa").value = nameStorage;
        inputWidth(document.querySelector("#kiminonawa"));
    }
});

document.querySelector("#kiminonawa").addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
        saveName();
    }
});

function saveName() {
    const name = document.querySelector("#kiminonawa");
    localStorage.setItem("nameStorage", name.value);
}

function inputWidth(inputText) {
    inputText.style.width = (inputText.value.length + 5) + "ch";
}


