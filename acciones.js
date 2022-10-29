// Obtenemos los datos
fetch("https://fakestoreapi.com/products/19")
  .then((response) => response.json())
  //.then(json => console.log(json))
  .then((json) => {
    printRopa(json);
  });


// insertando un HTML dentro del #container
function printRopa(listaropa) {
  const container = document.getElementById("container");
  listaropa.forEach((ropa) => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <p> </p>
    <img src="${ropa.image}"/>
    <span>Nº.${ropa.url}</span>
    <h2>${ropa.title}</h2>
    </card>
  `;
  });

  listaropa.forEach((ropa) => {
    console.log("Ropa: " + `${ropa.title}`);
  });
}
