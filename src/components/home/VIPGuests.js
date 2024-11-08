import React from 'react';

function VIPGuests() {
  return (
<section class="vip-section">
<div className='vip-container'>
    <img src='/icons/flowers_division.png' alt="Icono de flores" className="vip-icon-image"/>
  </div>
  <div class="vip-columns-container">
    <div class="vip-column">
      <h3>Nuestros Padres</h3>
      <ul>
        <li>CARLOS AGUILAR VARGAS</li>
        <li>MA. LOURDES AIDA CERVANTES GARCIA</li>
        <li class="vip-divider-line"></li>
        <li>MA. MERICIA GALVEZ MONRROY</li>
        <li>JAVIER VICENTE FRUTO(+)</li>
      </ul>
    </div>

    <div class="vip-column">
      <h3>Nuestros Padrinos</h3>
      <ul>
        <li>JOSE LUIS CERVANTES GARCIA</li>
        <li>LETICIA AURORA CERVANTES GARCIA</li>
        <li class="vip-divider-line"></li>
        <li>LEONEL GALVEZ MONRROY</li>
        <li>MARIA FELIZ RIVERA JUAREZ</li>
      </ul>
    </div>
  </div>
</section>
  );
}

export default VIPGuests;
