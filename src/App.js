import React, { useState } from 'react';
import './styles.css';

function App() {
  const [section, setSection] = useState(null);

  return (
    <div className="app-container">
      <h1>Operativo 4en1 - Empresas de Alimentos</h1>
      <div className="top-bar">
        <button onClick={() => setSection('inventario')}>📦 Inventario</button>
        <button onClick={() => setSection('compras')}>🛒 Compras</button>
        <button onClick={() => setSection('inspecciones')}>✅ Inspecciones</button>
        <button onClick={() => setSection('mantenimiento')}>🧯 Mantenimiento</button>
      </div>

      {/* INVENTARIO */}
      {section === 'inventario' && (
        <div className="section">
          <h2>📦 Inventario</h2>
          <p>Última actualización: 7 mayo 2025</p>
          <div className="inventory-status">
            <div className="status green">✅ Óptimo: 6</div>
            <div className="status yellow">⚠️ Advertencia: 2</div>
            <div className="status red">🚨 Crítico: 1</div>
          </div>
          <button>Realizar Inventario</button>
          <button>Generar Lista de Compra</button>
        </div>
      )}

      {/* COMPRAS */}
      {section === 'compras' && (
        <div className="section">
          <h2>🛒 Compras</h2>
          <p>Lista de Compras Activa</p>
          <button>📷 Subir Factura de Compra</button>
          <button>🔍 Comparador Online de Costos</button>
          <button>➕ Agregar Nuevo Proveedor</button>
        </div>
      )}

      {/* INSPECCIONES */}
      {section === 'inspecciones' && (
        <div className="section">
          <h2>✅ Inspecciones</h2>
          <div className="inspection-status">
            <p>Local: 89% - Última: 7 mayo 2025</p>
            <p>GMP: 85% - Última: 7 mayo 2025</p>
            <p>HACCP: 92% - Última: 7 mayo 2025</p>
          </div>
          <button>Registrar Nueva Inspección</button>
        </div>
      )}

      {/* MANTENIMIENTO */}
      {section === 'mantenimiento' && (
        <div className="section">
          <h2>🧯 Mantenimiento</h2>
          <button>📋 Reportar Falla</button>
          <button>📊 Status Equipos en Reparación</button>
          <button>🛠️ Mantenimiento Preventivo</button>
          <button>📋 Lista de Talleres de Servicios</button>
          <button>📜 Historial de Mantenimiento</button>
        </div>
      )}
    </div>
  );
}

export default App;
