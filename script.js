function abrir_figura(){

let figura = document.getElementById("img_revol01");
let imagem = "";
let pagina = figura.textContent;

// console.log(pagina);

if(pagina == "pag1"){
    imagem = `<button type="submit" onclick="fechar_figura()">X</button>
    <br>
    <img src="https://tm.ibxk.com.br/materias/10309/42772.jpg?ims=fit-in/800x500">`
}else{
    imagem = `<button type="submit" onclick="fechar_figura()">X</button>
    <br>
    <img src="https://autosorfaos.wordpress.com/wp-content/uploads/2010/10/fiat-147-bege.jpg?w=840">`
}


figura.innerHTML = imagem;

}

function fechar_figura(){

let figura = document.getElementById("img_revol01");
figura.innerHTML = "";

}