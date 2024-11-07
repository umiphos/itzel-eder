import React from 'react';

function Information() {
  return (
<section class="seccion">
  <div class="contenedor-columnas">
    <div class="columna">
      <div class="header-container">
        <img src='/icons/icono_ceremonia.png' alt="Ceremonia Icon" class="icon"/>
        <h3>Ceremonia 5:00 PM</h3>
      </div>
      <ul>
        <li>Parroquia del espiritu santo</li>
        <li>Avenida Felipe Sevilla del Rio S/N</li>
        <li><a href="https://www.google.com/maps/place/Parroquia+del+Espíritu+Santo" target="_blank">Maps</a></li>
      </ul>
    </div>

    <div class="columna">
      <div class="header-container">
        <img src='/icons/icon_reception.png' alt="Recepción Icon" class="icon"/>
        <h3>Recepción 7:00 PM</h3>
      </div>
      <ul>
        <li>Hacienda Pastores, 4.5KM</li>
        <li>Hacia el norte de la Hacienda del Carmen, antes de llegar al Chivato, Villa de Alvarez Colima</li>
        <li><a href="https://www.google.com/maps/place/Hacienda+Pastores" target="_blank">Maps</a></li>
      </ul>
    </div>
  </div>
</section>


  );
}

export default Information;
