let urlApi= ("https://mindhub-xj03.onrender.com/api/amazing");
async function getData(){
  await fetch(urlApi)
  .then(respuesta => respuesta.json())
  .then(json => data=json)
  localStorage.setItem("data",JSON.stringify(data))
}
getData();

function tarjeta(event) {
    let tarjeta = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
    <div class="card shadow">
      <img src="${event.image}" height="160" class="card-img-top" alt="personas mirando">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
      </div>
      
      <div class="card-body p">
        <p>$ ${event.price}</p>
        <a href="./details.html?id=${event._id}">More</a>
      </div>
    </div>
  </div>`
  
  return tarjeta;
};

function insertarCheckbox() {
  let listCategories = "";
  const checkContainer = document.querySelector(".checkbox");
  let categories = [];

  data.events.forEach(evento => {
    if (!categories.includes(evento.category)) {
      categories.push(evento.category);
      listCategories += `<div class="form-check form-check-inline p-2">
      <input class="form-check-input" type="checkbox" id="${evento.category}" value="${evento.category}">
      <label class="form-check-label" for="${evento.category}">${evento.category}</label>
      </div>`;
    }
checkContainer.innerHTML = listCategories;
});
};
