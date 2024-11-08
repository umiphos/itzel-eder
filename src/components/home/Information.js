import React from 'react';

function Information() {
  return (
<section class="information-section">
  <div class="information-columns-container">
    <h3>Dónde y cuándo</h3>
    <div class="column">
      <div class="information-container">
        <img src='/icons/icon_ceremony_green.png' alt="Ceremonia Icon" class="icon"/>
        <h3>Ceremonia 5:00 PM</h3>
      </div>
      <ul>
        <li>Parroquia del espiritu santo</li>
        <li>Avenida Felipe Sevilla del Rio S/N</li>
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

    <div class="column">
      <div class="information-container">
        <img src='/icons/icon_reception_green.png' alt="Recepción Icon" class="icon"/>
        <h3>Recepción 7:00 PM</h3>
      </div>
      <ul>
        <li>Hacienda Pastores, 4.5KM</li>
        <li>Hacia el norte de la Hacienda del Carmen, antes de llegar al Chivato, Villa de Alvarez Colima</li>
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
