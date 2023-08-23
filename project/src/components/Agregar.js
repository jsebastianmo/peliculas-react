import GuardarLocalStorage from "../helper/GuardarLocalStorage";

const Agregar = ({listadoPeliculas, setListadoPeliculas}) =>{

    const agregarHandle = (e) =>{
        e.preventDefault();
        const target = e.target;
        let pelicula = {
            id: Date.now(),
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        GuardarLocalStorage("peliculas", pelicula);
        setListadoPeliculas((elementos)=>{
            return [...elementos, pelicula]
        })
    }

    return(
        <section className="añadir">
            <form onSubmit={agregarHandle}>
                <label> Añadir Películas </label>
                <input type="text" placeholder="titulo" name="titulo"/>
                <textarea placeholder="Descripcion" name="descripcion"/>
                <input type="submit" value="Guardar" />
            </form>
        </section>
    )
}

export default Agregar;