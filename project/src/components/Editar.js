const Editar = ({id, titulo, descripcion, setEditar, setListadoPeliculas}) =>{

    const guardarHandle = e => {
        e.preventDefault();
        const target = e.target;
        const peliculas = JSON.parse(localStorage.getItem("peliculas"));
        peliculas.filter(pelicula => {
            if(pelicula.id === id){
                pelicula.titulo = target.titulo.value || titulo;
                pelicula.descripcion = target.descripcion.value || descripcion;
            }
        })
        setListadoPeliculas(peliculas);
        setEditar(0);
    }

    return(
        <form onSubmit={guardarHandle}>
            <h1> Editar la pelicula: { titulo.toLowerCase() } </h1>
            <input name="titulo" placeholder={titulo} />
            <textarea name="descripcion" placeholder={descripcion} />
            <div className="group">
                <input className="edit" type="submit" value="Guardar"/>
                <button className="delete" onClick={()=>setEditar(0)}> Cancelar </button>
            </div>
        </form>
    )
}

export default Editar;