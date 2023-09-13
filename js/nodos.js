//let es una definicion de una o varias variable
let identificador, etiqueta,seccion, clase, nombre, referencia; 
identificador=document.getElementById('titulo');//atrapa lo que esta dentro del h1
console.log(identificador.innerText);//lo munetra en la consola con el innerText

etiqueta=document.getElementsByTagName("p");//es un arreglo 
console.log(etiqueta[1].innerText);//se llama al sugundo parrafo
seccion=document.getElementsByTagName('section');//se llama a la seccionens que hay en el html
console.log(seccion[3].innerText);
clase=document.getElementsByClassName('parrafo');//llama las clases
console.log(clase[0].innerText);//el lugar de la clase
nombre=document.getElementsByName('subtitulo');//llama al name de la etiqueta h3
console.log(nombre[1].innerText);

//Crear Nodos
let elemento,elementop, contenido;
elemento=document.createElement('p');//CreateElement crea un nodo 
contenido=document.createTextNode('Párrafo colocado por Omar');//Crea el texto del nodo que se creo con createTextNode
elemento.appendChild(contenido);//une el nodo con el texto
  //colocar el nodo
  etiqueta[2].appendChild(elemento);

  elementop=document.createElement('p');
  let contenido2=document.createTextNode('Mi primer parrafo');
  elementop.appendChild(contenido2);
  etiqueta[1].appendChild(elementop);



 
  //Nodos con estilo y remplazar

  elemento=document.createElement('p');
  contenido=document.createTextNode('Párrafo en Reemplazo ');
  elemento.setAttribute('class','parrafo2');// recibir los atributos de las etquetas y su valor
  elemento.appendChild(contenido);
  seccion[1].replaceChild(elemento,etiqueta[0]);//remplaza el segundo nombre por el primero osea elemetnto va a replazar a etiqueta
//eliminar
  seccion[0].removeChild(nombre[0]);//elimina 
  //EJ

  var nremplazo=document.createElement('p')
  nremplazo.setAttribute('class','nuevoNodo');
  var contnremplazo=document.createTextNode('Hola nuevo Nodo');
  nremplazo.appendChild(contnremplazo);
  seccion[1].replaceChild(nremplazo,etiqueta[1]);

var enlace=document.getElementById('enlace');
 enlace.remove();//NO se usa child ya que no se encuentra en un nodo hijo
 


  //Crear nodos dentro de otros nodos
  seccionNueva=document.createElement('section');
  encabezado=document.createElement('h1');
  encabezado.setAttribute('class','encabezado');
  contenido=document.createTextNode("insertar Imágenes desde JS");
  encabezado.appendChild(contenido);

  articulo1=document.createElement('article');
  imagen=document.createElement('img');
  imagen.setAttribute('src', 'img/U1.png');
  articulo1.appendChild(imagen);

  seccionNueva.appendChild(encabezado);
  seccionNueva.appendChild(articulo1);
  seccion[3].insertAdjacentElement('afterend',seccionNueva);

  var articulo2=document.createElement('article');
  var imagen2=document.createElement('img');
  imagen2.setAttribute('class','img');
  imagen2.setAttribute('src', 'img/U2.jpg');
  articulo2.appendChild(imagen2);
  seccion[4].insertAdjacentElement('afterend',articulo2);


//ejm
 sectionN=document.createElement('section');
 a=document.createElement('a');
 a.setAttribute('title','Acceso a Instagram');
 a.setAttribute('href','https://www.Instagram.com');
 var ncontenido=document.createTextNode('Instagram');
 a.appendChild(ncontenido);
 seccion[4].insertAdjacentElement('afterend',a);



