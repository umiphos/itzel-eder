import React from 'react';

function Gift() {
  return (
<section class="gift-section">
  <div className='gift-container'>
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="icon-image"/>
  </div>
  <h2>OBSEQUIOS</h2>
  <div class="columns-container-gift">
    <div class="column-gift">
        <ul>
        <h3>Sobre</h3>
          <li><img src='/icons/icon_envelop_green.png' class="icon-gift"/>Entregar en la fiesta</li>
        </ul>
     </div>

    <div class="column-gift">
      <h3>Transferencia</h3>
      <ul>
        <li><img src='/icons/icon_transfer_green.png' class="icon-gift"/> 021090064784056101</li>
      </ul>
    </div>

    <div class="column-gift">
      <h3>Mesa de regalos</h3>
      <ul>
        <li><img src='/icons/icon_liverpool_green.png' class="icon-gift"/> 51366211</li>
      </ul>
    </div>
  </div>
</section>

);
}

export default Gift;
