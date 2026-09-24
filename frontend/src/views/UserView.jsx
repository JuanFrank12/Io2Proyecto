import React from 'react';
import '../styles/vistas.css';

export default function UserView({ vehiculos, tarifa, vehiculoAlquilado, alquilarVehiculo, devolverVehiculo }) {
  return (
    <div>
      <h3 className="vista-header">Panel de Usuario (Tarifa: Q{tarifa}/hora)</h3>
      {vehiculoAlquilado ? (
        <div className="vehiculo-en-uso">
          <h4>Vehículo en uso actualmente:</h4>
          <p><strong>{vehiculoAlquilado.tipo}</strong> (ID: {vehiculoAlquilado.id})</p>
          <button className="btn-accion btn-devolver" onClick={devolverVehiculo}>
            Estacionar y Devolver
          </button>
        </div>
      ) : (
        <div>
          <h4>Vehículos Disponibles para Alquilar:</h4>
          <div className="grid-vehiculos">
            {vehiculos.filter(v => v.estado === 'disponible').map(v => (
              <div key={v.id} className="tarjeta-vehiculo">
                <p><strong>{v.tipo}</strong></p>
                <p>ID: {v.id}</p>
                <button className="btn-accion btn-alquilar" onClick={() => alquilarVehiculo(v.id)}>
                  Alquilar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}