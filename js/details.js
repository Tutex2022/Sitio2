const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const evento = data.events.find(event => event._id == id);

let cardDetalle = document.getElementById("row");

let htmlDetail = 
`<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
<img class="borde" src="${evento.image}" style="border: solid blue" width="90%" class="img-fluid" alt="Image" />
</div>


<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5" style="border: solid blue">
<h3 class="display-0 text-center">${evento.name}</h3>
<p><strong>Description:</strong> ${evento.description}</p>
<p><strong>Category:</strong> ${evento.category}</p>
<p><strong>Date:</strong> ${evento.date}</p>
<p><strong>Place:</strong> ${evento.place}</p>
<p><strong>Capacity:</strong> ${evento.capacity}</p>
<p><strong>Price:</strong> ${evento.price}</p>
</div>`;

cardDetalle.innerHTML = htmlDetail;
