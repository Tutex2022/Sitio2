let htmlCard = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(currentDate);
    console.log(eventDate);
    if (eventDate < currentDate) {
       console.log('pasado');
    } else {
        console.log('futuro')

        htmlCard += `<div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img class="borde" src="${event.image}" style="border: solid blue" width="90%" class="img-fluid" alt="Image" />
          </div>

          
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5" style="border: solid blue">
              <h3 class="display-1 text-center">Title</h3>
              <p class="text-justify">
              ${event.description}
              </p>
          </div>
          
        </div>
      </div>`;
    }
    }