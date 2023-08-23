import { useState, useEffect } from 'react';
import Editar from './Editar';

const Peliculas = ({listadoPeliculas, setListadoPeliculas}) =>{

    const [ editar, setEditar] = useState();

    const deleteHandle = (id) =>{
        const peliculas = listadoPeliculas.filter(pelicula => pelicula.id != id);
        setListadoPeliculas(peliculas)
    }

    return(
        <section className="content">
            {
                listadoPeliculas.length == 0 ? (
                    <h1> Sin películas para mostrar </h1>
                )
                :
                (
                    listadoPeliculas.map(pelicula => (
                        <article className="pelicula" key={pelicula.id}>
                            <h1 className="title"> {pelicula.titulo} </h1>
                            <p className="description"> {pelicula.descripcion} </p>
                            <div className="group">
                                <button type="button" className="edit" onClick={()=>setEditar(pelicula.id)}> Editar </button>
                                <button type="button" className="delete" onClick={()=>deleteHandle(pelicula.id)}> Borrar </button>
                            </div>
                            {
                                editar === pelicula.id && (<Editar id={pelicula.id} titulo={pelicula.titulo} descripcion={pelicula.descripcion} setEditar={setEditar} setListadoPeliculas={setListadoPeliculas}/>)
                            }
                        </article>
                    ))

                )
            }
        </section>
    )
}

export default Peliculas;