import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserView from './views/UserView';
import AdminView from './views/AdminView';
import { TARIFAS, ROLES, VEHICULOS_INICIALES } from './service/vehiculosService';
import './App.css';

export default function App() {
  const [rolActual, setRolActual] = useState('Estudiante');
  const [saldo, setSaldo] = useState(15.00);
  const [vehiculos, setVehiculos] = useState(VEHICULOS_INICIALES);
  const [vehiculoAlquilado, setVehiculoAlquilado] = useState(null);

  const alquilarVehiculo = (id) => {
    const tarifa = TARIFAS[rolActual];
    if (saldo < tarifa) {
      alert('Saldo insuficiente para alquilar. Por favor recarga.');
      return;
    }
    setSaldo(saldo - tarifa);
    setVehiculos(vehiculos.map(v => v.id === id ? { ...v, estado: 'en uso' } : v));
    setVehiculoAlquilado(vehiculos.find(v => v.id === id));
  };

  const devolverVehiculo = () => {
    setVehiculos(vehiculos.map(v => v.id === vehiculoAlquilado.id ? { ...v, estado: 'disponible' } : v));
    setVehiculoAlquilado(null);
  };

  const actualizarEstadoAdmin = (id, nuevoEstado) => {
    setVehiculos(vehiculos.map(v => v.id === id ? { ...v, estado: nuevoEstado } : v));
  };

  return (
    <div className="app-container">
      <Navbar rolActual={rolActual} setRolActual={setRolActual} saldo={saldo} setSaldo={setSaldo} roles={ROLES} />
      <div className="panel-contenedor">
        {rolActual === 'Administrador' ? (
          <AdminView vehiculos={vehiculos} actualizarEstado={actualizarEstadoAdmin} />
        ) : (
          <UserView 
            vehiculos={vehiculos} tarifa={TARIFAS[rolActual]} 
            vehiculoAlquilado={vehiculoAlquilado} 
            alquilarVehiculo={alquilarVehiculo} devolverVehiculo={devolverVehiculo} 
          />
        )}
      </div>
    </div>
  );
}