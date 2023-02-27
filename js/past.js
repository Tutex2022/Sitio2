let htmlEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(currentDate);
    console.log(eventDate);
    if (eventDate > currentDate) {
       console.log('pasado');
    } else {
        console.log('futuro')
        htmlEvents += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
    <div class="card shadow">
      <img src="${event.image}" height="160" class="card-img-top" alt="personas mirando">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
      </div>
      
      <div class="card-body">
        <p>$ ${event.price}</p>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>`;
    }
    
    

  document.querySelector('.row').innerHTML = htmlEvents
}