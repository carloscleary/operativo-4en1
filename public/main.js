
// main.js

// Modulo de Inventario
let inventory = [
  { name: "Harina de Maíz", qty: 6, unit: "Kg", status: "Óptimo" },
  { name: "Aceite", qty: 2, unit: "L", status: "Advertencia" },
  { name: "Queso", qty: 1, unit: "Kg", status: "Crítico" }
];

// Modulo de Compras
let purchaseList = [
  { name: "Harina de Maíz", qty: 6, unit: "Kg", price: 2.5 },
  { name: "Aceite", qty: 3, unit: "L", price: 4.0 }
];

// Modulo de Inspecciones
let inspections = [
  { type: "Local", completion: 89, date: "2025-05-10" },
  { type: "GMP", completion: 92, date: "2025-05-09" }
];

// Modulo de Mantenimiento
let maintenanceList = [
  { equipment: "Freidora", status: "Funcional", lastCheck: "2025-05-09" }
];

// Configuración General
function showSection(section) {
  const content = document.getElementById("content-area");
  if (section === 'inventario') showInventory(content);
  if (section === 'compras') showPurchases(content);
  if (section === 'inspecciones') showInspections(content);
  if (section === 'mantenimiento') showMaintenance(content);
  if (section === 'configuracion') showConfiguration(content);
}

// Notificaciones
function showNotifications() {
  alert("No tienes notificaciones pendientes.");
}

// Mostrar Configuración y Perfil
function showConfiguration(content) {
  content.innerHTML = '<h2>👤 Configuración y Perfil</h2>' +
    '<button onclick="showProfileSettings()">Perfil de Usuario</button>' +
    '<button onclick="showUserManagement()">Gestión de Usuarios</button>';
}

// Integrar los módulos (Inventario, Compras, Inspecciones, Mantenimiento) en funciones específicas
function showInventory(content) {
  content.innerHTML = '<h2>📦 Inventario</h2>';
}
function showPurchases(content) {
  content.innerHTML = '<h2>🛒 Compras</h2>';
}
function showInspections(content) {
  content.innerHTML = '<h2>✅ Inspecciones</h2>';
}
function showMaintenance(content) {
  content.innerHTML = '<h2>🧯 Mantenimiento</h2>';
}
