
import React, { useState } from "react";
import './styles.css';

function Inventario() {
  const [inventory, setInventory] = useState([
    { product: "Harina de Maíz", qty: 6, status: "Óptimo" },
    { product: "Aceite", qty: 2, status: "Advertencia" },
    { product: "Queso", qty: 0, status: "Crítico" }
  ]);

  return (
    <div>
      <h2>Inventario</h2>
      <p>📦 Inventario Visual</p>
      <button>Realizar Inventario</button>
    </div>
  );
}

export default Inventario;
