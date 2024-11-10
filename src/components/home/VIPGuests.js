import React from 'react';

function VIPGuests() {
  return (
<section className="vip-section">
<div className='vip-container'>
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="vip-icon-image"/>
  </div>
  <div className="vip-columns-container">
    <div className="vip-column">
      <h3>Nuestros Padres</h3>
      <ul>
        <li>CARLOS AGUILAR VARGAS</li>
        <li>MA. LOURDES AIDA CERVANTES GARCIA</li>
        <li className="vip-divider-line"></li>
        <li>MA. MERICIA GALVEZ MONRROY</li>
        <li>JAVIER VICENTE FRUTO(+)</li>
      </ul>
    </div>

    <div className="vip-column">
      <h3>Nuestros Padrinos</h3>
      <ul>
        <li>JOSÉ LUIS CERVANTES GARCIA</li>
        <li>LETICIA AURORA CERVANTES GARCIA</li>
        <li className="vip-divider-line"></li>
        <li>ALEJANDRA FABIOLA GÁLVEZ MAGAÑA</li>
        <li>JOSÉ MANUEL OSEGUERA JIMÉNEZ</li>
      </ul>
    </div>
  </div>
</section>
  );
}

export default VIPGuests;
