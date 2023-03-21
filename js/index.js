let data = localStorage.getItem("data")
data = JSON.parse(data)

function crearTarjeta() {
let htmlEvents = "";
for (let event of data.events) {
        
    htmlEvents += tarjeta(event);

  document.querySelector('.row').innerHTML = htmlEvents
}
}

crearTarjeta();


/*Insertar checkbox*/

insertarCheckbox();

/*Buscar con Filtro*/

function bothFiltersSearch(checkeados, keyWord, htmlEvents) {
  for(let elemento of checkeados) {
      data.events.filter(evento => (elemento == evento.category) && ((evento.name.toLowerCase().includes(keyWord)) || (evento.description.toLowerCase().includes(keyWord))) ).forEach(evento => { htmlEvents += tarjeta(evento) });
  };
  htmlEvents.length == 0 ? nothingFound(keyWord) :  document.querySelector('.row').innerHTML = htmlEvents;
};


/*Filtrar por checkboxs*/

const homeChecks = document.querySelectorAll(".form-check-input");
for (let check of homeChecks) {
  check.addEventListener('change', () => {
      let checkeados = [];
      for (let chk of homeChecks) {
          if (chk.checked) {
              checkeados.push(chk.value)
          };
      };

      let keyWord = searchInput.value.toLowerCase().trim();
      let htmlEvents = "";
      if ( (checkeados.length > 0) && (keyWord == "") ) {
          for(let elemento of checkeados) {
              data.events.filter(evento => elemento == evento.category).forEach(evento => { htmlEvents += tarjeta(evento) });
              document.querySelector('.row').innerHTML = htmlEvents;
          };
      } else if ( (checkeados.length > 0) && (keyWord != "") ) {
          bothFiltersSearch(checkeados, keyWord, htmlEvents);            
      } else {
          crearTarjeta();
      };
  });
};


/* Busqueda*/

let searchForm = document.querySelector(".barra");
let searchInput = document.querySelector(".form-control");
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  let htmlEvents = "";
  let result = false;
  let keyWord = searchInput.value.toLowerCase().trim();
  
  
  let checkedCategories = [];
  for (let chk of homeChecks) {
      if (chk.checked) {
          checkedCategories.push(chk.value)
      };
  };
  
  if ((keyWord != "") && (checkedCategories.length == 0)) {
      data.events.forEach(event => {
          if ( (event.name.toLowerCase().includes(keyWord)) || (event.description.toLowerCase().includes(keyWord)) ) {
              htmlEvents += tarjeta(event);
              result = true;
          }
      });

      if (result) {
        document.querySelector('.row').innerHTML = htmlEvents;
      } else {
          nothingFound(keyWord);
      };
      
  } else if ((keyWord != "") && (checkedCategories.length > 0))
  {
      bothFiltersSearch(checkedCategories, keyWord, htmlEvents);
  } else {
    crearTarjeta();
  };
});