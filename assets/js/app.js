const display = document.querySelector('.display');
console.log(display);

//Consultar ususario específico
//Fetch trabaja con el método then
fetch('https://api.github.com/users/natalbornoz')
//En caso de que esta petición se ejecute se hará lo siguiente:
.then(function(response) {
    console.log(response);
    //Hacer parseo para que retorne la respuesta aplicando .json y fue recibido por el siguiente then
    return response.json();
})
.then(function(data) {
    console.log(data);
    showInfo(data);
})

function showInfo(info) {
    let information = `<h3>${info.name}</h3><h4>Seguidores: ${info.followers}</h4><h4>Repositorios: ${info.public_repos}</h4><h4>Gists: ${info.public_gists}</h4><img src="${info.avatar_url}">`;
    display.innerHTML = information;
}