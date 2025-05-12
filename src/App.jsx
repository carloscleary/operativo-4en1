
import React, { useState } from "react";
import './styles.css';
import Inventario from './InventoryComponent';
import Compras from './ComprasComponent';
import Inspecciones from './InspectionComponent';
import Mantenimiento from './MaintenanceComponent';

function App() {
  const [activeSection, setActiveSection] = useState("Inventario");

  return (
    <div className="app-container">
      <h1>Operativo 4en1 - Empresas de Alimentos</h1>
      <div className="menu">
        <button onClick={() => setActiveSection("Inventario")}>📦 Inventario</button>
        <button onClick={() => setActiveSection("Compras")}>🛒 Compras</button>
        <button onClick={() => setActiveSection("Inspecciones")}>✅ Inspecciones</button>
        <button onClick={() => setActiveSection("Mantenimiento")}>🧯 Mantenimiento</button>
      </div>
      <div className="content">
        {activeSection === "Inventario" && <Inventario />}
        {activeSection === "Compras" && <Compras />}
        {activeSection === "Inspecciones" && <Inspecciones />}
        {activeSection === "Mantenimiento" && <Mantenimiento />}
      </div>
    </div>
  );
}

export default App;
