function agregar(){
    let genero, contenido, imprimir, lista
    lista=document.getElementsByTagName('li');
    
    genero=document.getElementById('nuevoElemento').value 
    contenido=document.createElement('li')
    contenido.setAttribute('class', 'nodo');

    imprimir=document.createTextNode(genero)
    contenido.appendChild(imprimir)

    lista[2].insertAdjacentElement('afterend',contenido);
}

function eliminarNodo() {
    var lista = document.getElementById('lista');
    var primerN = lista.getElementsByTagName('li')[0];
    lista.removeChild(primerN);
    
}


function crearNuevoNodo() {
    
    var nuevoSection = document.createElement('section');
    var nuevoArticle = document.createElement('article');
    var nuevoAside = document.createElement('aside');

   
    nuevoArticle.innerHTML = '<h2>Artículo Nuevo</h2><p>Contenido</p>';
    nuevoAside.innerHTML = '<h2>Aside Nuevo</h2><p>Contenido</p>';
    nuevoSection.appendChild(nuevoArticle);
    nuevoSection.appendChild(nuevoAside);
    document.body.appendChild(nuevoSection);
}