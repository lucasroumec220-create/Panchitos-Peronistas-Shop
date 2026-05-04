const productos = [
  {nombre: "Kit Cristina", precio: 10.000},
  {nombre: "Kit Super Peronista", precio: 4.750},
  {nombre: "Kit Peronista Chorrito", precio: 2.000},
  {nombre: "Kit Constructor / Minero", precio: 3.000},
  {nombre: "Mistery Box", precio: 1500},
  {nombre: "Mistery Box Super Chori", precio: 800},
  {nombre: "Mistery Box Super Cristina", precio: 3.000},
  {nombre: " 1Millon de Cristina Cash", precio: 4.000},
  {nombre: "Pancho Veggie", precio: 2.000},
  
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="producto">
      <h2>${p.nombre}</h2>
      <p>$${p.precio}</p>
      <button onclick="comprar('${p.nombre}')">Comprar</button>
    </div>
  `;
});

function comprar(nombre){
  alert("Elegiste: " + nombre);
}
