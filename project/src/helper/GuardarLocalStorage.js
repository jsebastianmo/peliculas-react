const GuardarLocalStorage = (key, item) =>{
    const items = JSON.parse(localStorage.getItem(key));
    let peliculas = [];

    if(Array.isArray(items)){
        if(items.length > 0){
            peliculas = [...items, item];
        }else{
            peliculas = [item];
        }
    }else{
        peliculas = [item];
    }
    localStorage.setItem(key, JSON.stringify(peliculas));
    return peliculas;
}

export default GuardarLocalStorage;