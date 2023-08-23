const Buscador = ({listadoPeliculas, setListadoPeliculas}) =>{

    const buscarHandle = e =>{
        const filtro = e.target.value.toLowerCase();
        let peliculas = [];
        filtro.length > 1 ?
        listadoPeliculas.map(pelicula =>{
            if(pelicula.titulo.toLowerCase().includes(filtro) || pelicula.descripcion.toLowerCase().includes(filtro)){
                peliculas.push(pelicula)
            }
        })
        :
        peliculas = JSON.parse(localStorage.getItem("peliculas"));

        setListadoPeliculas(peliculas);
    }

    return(
        <section className="buscador">
            <label> Buscador </label>
            <input type="text" id="buscar" onChange={buscarHandle} name="buscar"/>
            <input type="button" value="Buscar" />
        </section>
    )
}

export default Buscador;