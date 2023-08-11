llamadaDemo();

/*llamada*/
function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
   
        var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';
            
            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";
                    
                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;
                    
                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0,150) + " ...";

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;

                    
                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);
                }
            }

        });

}

function Llamada1(){
    //alert('llamada1');
    var txtPeli = document.getElementById('txtPeli');
    var cmbUbication = document.getElementById('cmbUbication');

    //alert(txtPeli.value);
    //alert(cmbUbication.value);
    var url = "";
    if(txtPeli != null && cmbUbication != null){
        url = "https://movie.azurewebsites.net/api/cartelera?title=" + txtPeli.value + "&ubication=" + (cmbUbication.value == "Mostrar todos" ? "" : cmbUbication.value);
    }
    else{
        url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication="
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';
            
            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";
                    
                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;
                    
                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0,150) + " ...";

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;

                    
                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);
                }
            }

        });


}

function Llamada2() {
    var txt_title = document.getElementById('Title').value;
    var txt_imdbID = document.getElementById('imdbID').value;
    var txt_description = document.getElementById('description').value;
    var txt_Ubication = document.getElementById('Ubication').value;
    var txt_year = document.getElementById('year').value;
    var txt_Tipo = document.getElementById('Tipo').value;
    var txt_Poster = document.getElementById('Poster').value;

    url = "https://movie.azurewebsites.net/api/cartelera";

    const Json = {
        imdbID: txt_imdbID,
        Title: txt_title,
        Year: txt_year,
        Type: txt_Tipo,
        Poster: txt_Poster,
        description: txt_description,
        Ubication: txt_Ubication,
        Estado: 1
    }

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Json),
    };

    fetch(url, config)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then(Json => {
            console.log(Json);
        }).catch(e => {
            console.log(e);
        });
        alert('Registro Agregado');
        location.reload();

}

function Llamada3() {

    var txt_imdbID3 = document.getElementById('imdbID3').value;

    url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + txt_imdbID3;

    const config = {
        method: 'DELETE',
    };

    fetch(url, config)
        .then(res => res.json())
        .then(res => console.log(res))
        alert('Registro Eliminado');
        location.reload();
}

function Llamada4() {
    var txt_title2 = document.getElementById('Title2').value;
    var txt_imdbID2 = document.getElementById('imdbID2').value;
    var txt_description2 = document.getElementById('description2').value;
    var txt_Ubication2 = document.getElementById('Ubication2').value;
    var txt_year2 = document.getElementById('year2').value;
    var txt_Tipo2 = document.getElementById('Tipo2').value;
    var txt_Poster2 = document.getElementById('Poster2').value;

    url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + txt_imdbID2;

    const Json2 = {
        imdbID: txt_imdbID2,
        Title: txt_title2,
        Year: txt_year2,
        Type: txt_Tipo2,
        Poster: txt_Poster2,
        description: txt_description2,
        Ubication: txt_Ubication2,
        Estado: 1
    };

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Json2),
    };
    fetch(url, config)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then(Json => {
            console.log(Json);
        }).catch(e => {
            console.log(e);
        });
        alert('Registro Actualizado');
        location.reload();
}