import React from 'react';

function Gift() {
  return (
<section className="gift-section">
  <div className='gift-container'>
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="icon-image"/>
  </div>
  <h2>OBSEQUIOS</h2>
  <div className="columns-container-gift">
    <div className="column-gift">
        <ul>
        <h3>Sobre</h3>
          <li><img src='/icons/icon_envelop_green.png' alt="" className="icon-gift"/>Entregar en la fiesta</li>
        </ul>
     </div>

    <div className="column-gift">
      <h3>Transferencia</h3>
      <ul>
        <li><img src='/icons/icon_transfer_green.png' alt="" className="icon-gift"/> 021090064784056101</li>
      </ul>
    </div>

    <div className="column-gift">
      <h3>Mesa de regalos</h3>
      <ul>
        <li><img src='/icons/icon_liverpool_green.png' alt="" className="icon-gift"/> 51366211</li>
      </ul>
    </div>
  </div>
</section>

);
}

export default Gift;
