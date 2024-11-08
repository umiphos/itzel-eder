import React from 'react';

function Gift() {
  return (
<section class="seccion-regalo">
  <h2>OBSEQUIO</h2>
  <div class="contenedor-columnas-regalo">
    <div class="columna-regalo">
        <ul>
        <h3>Efectivo</h3>
          <li><img src='/icons/icon_envelop_green.png' class="icon-regalo"/> Mensajito</li>
        </ul>
     </div>

    <div class="columna-regalo">
      <h3>Transferencia</h3>
      <ul>
        <li><img src='/icons/icon_transfer_green.png' class="icon-regalo"/> 021090064784056101</li>
      </ul>
    </div>

    <div class="columna-regalo">
      <h3>Liverpool</h3>
      <ul>
        <li><img src='/icons/icon_liverpool_green.png' class="icon-regalo"/> 51366211</li>
      </ul>
    </div>
  </div>
</section>

);
}

export default Gift;
