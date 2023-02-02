const displayComentario = document.querySelector(".none");

// class cometario {
//     constructor(text, id) {
//         this.text = text;
//         this.id = id
//     }
// }



// let array = []

// let id = 0;
// let lista = document.getElementById("comentarios")
// let valorIngresado = document.getElementById("newCommet").value;
// function nComentario() {
//     array.push(new cometario(valorIngresado, id++))
//     array.forEach((e) => {
//         let li = document.createElement("li");
//         li.innerText(e.text)
//         lista.appendChild(li);
//     })

//     if (valorIngresado === "") {
//         console.log("no da");
//         Swal.fire("Ingrese un comentario");
//     } else {
//         displayComentario.classList.remove("none"),
//             document.getElementById("comentarios").appendChild(li);
//     }


// }

function nComentario() {
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("newCommet").value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if (valorIngresado === "") {
        Swal.fire("Ingrese un comentario");
    } else
        displayComentario.classList.remove("none"),
            document.getElementById("comentarios").appendChild(li);

    document.getElementById("newCommet").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = "Borrar";
    borrar.className = "close";
    li.appendChild(borrar);
    let close = document.getElementsByClassName('close')
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
            if (i == "") {
                displayComentario.classList.add("none");
            } else {
                console.log("mkldmfkl;m");
            }
        }
    }


}
