const cose = [
    "banane",
    "latte",
    "funghi",
    "pane",
    "carote",
];

const lista = document.getElementById("lista")

let i = 0;
while (i < cose.length) {
    const item = cose[i];
    console.log(item, i);
    i++;

    lista.innerHTML = lista.innerHTML + `<li>${item}</li>`
}



