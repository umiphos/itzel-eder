import React from 'react';

function Information() {
  return (
<section class="information-section">
  <div className='information-container'>
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="icon-image"/>
  </div>
<h3>DÓNDE Y CUÁNDO</h3>
<div class="information-columns-container">
    <div class="information-column">
      <div class="information-container">
        <img src='/icons/icon_ceremony_green.png' alt="Ceremonia Icon" class="information-icon"/>
        <h3>Ceremonia</h3>
      </div>
      <ul>
        <li>5:00 PM</li>
        <li>Parroquia del Espíritu Santo</li>
        <li>Avenida Felipe Sevilla del Río S/N</li>
        <li>esquina Primo de Verdad,</li>
        <li>Colima, Col.</li>
        <li>
          <a href="https://maps.app.goo.gl/7ip3gCPDNtSdyUBP9" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/map_icon.png"
              alt="Maps Icon"
              style={{ width: '50px', height: '50px', verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
        </li>
      </ul>
    </div>

    <div class="information-column">
      <div class="information-container">
        <img src='/icons/icon_reception_green.png' alt="Recepción Icon" class="information-icon"/>
        <h3>Recepción</h3>
      </div>
      <ul>
        <li>7:00 PM</li>
        <li>Hacienda Pastores</li>
        <li>4.5KM hacia el norte de la </li>
        <li>Ex-Hacienda del Carmen</li>
        <li>antes de llegar al Chivato</li>
        <li>Villa de Alvarez, Col.</li>
        <li>
          <a href="https://maps.app.goo.gl/7ip3gCPDNtSdyUBP9" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/map_icon.png"
              alt="Maps Icon"
              style={{ width: '50px', height: '50px', verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>


  );
}

export default Information;
